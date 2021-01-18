
import * as React from 'react';
import * as data from "data";

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AdditionalSettingsDemo from './AdditionalSettingsDemo';
import {
  componentSanityChecks,
  runPropsMatrix,
  testCheckBox,
} from 'testUtility';
import {
  ChallengeModes
} from '../../types';

jest.mock('data');
// jest.mock('data', () => ({
//     get: jest.fn((x: string, defaultValue) => {
//       console.log('mock '+ x);
//       if (x === 'config.aga_rankings_enabled') {
//         return true;
//       }
//       return defaultValue;
//     })
// }));

jest.mock('translate', () => ({
    _: jest.fn(x => x),
}));

const getBaseProps = (customProps = {}) => {
  const baseProps = {
    challenge: {
      game: {
        width: 19,
        height: 19
      }
    },
    conf: {
      selected_board_size: '19x19'
    },
    forking_game: '',
    mode: ChallengeModes.DEMO,
    ranked: false,
    update_demo_rules: (ev) => console.log(),
    update_board_size: (ev) => console.log(),
    update_board_width: (ev) => console.log(),
    update_board_height: (ev) => console.log(),
    update_ranked: (ev) => console.log(),
    update_aga_ranked: (ev) => console.log(),
  };
  return {
    ...baseProps,
    ...customProps
  };
}


runPropsMatrix([
  ['normal', getBaseProps()],
  ['as demo', getBaseProps({
    mode: ChallengeModes.DEMO
  })],
],(labelSubfix: string, props) => {
  componentSanityChecks(`BasicSettings.${labelSubfix}`, <AdditionalSettingsDemo {...props} />);
});

describe('ChallengeModes additional settings demo', () => {

  let mockedProps;
  beforeEach(() => {
    mockedProps = getBaseProps()
  });


  test('render additional settings as demo', () => {
    render(<AdditionalSettingsDemo {...mockedProps} />);

    waitFor(() => expect(screen.queryByLabelText('Rules')).toBeTruthy());
  });

  test('render additional settings with a custom board size', () => {
    mockedProps.conf.selected_board_size = "custom";

    render(<AdditionalSettingsDemo {...mockedProps} />);

    expect(screen.queryByTestId('challenge-goban-width')).toBeTruthy();
    expect(screen.queryByTestId('challenge-goban-height')).toBeTruthy();
  });
});
