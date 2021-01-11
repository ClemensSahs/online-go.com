
import * as React from 'react';
import * as data from "data";

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AdditionalSettingsNormal from './AdditionalSettingsNormal';
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

const getBaseProps = () => {
  return {
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
    mode: ChallengeModes.OPEN,
    ranked: false,
    update_demo_rules: (ev) => console.log(),
    update_board_size: (ev) => console.log(),
    update_board_width: (ev) => console.log(),
    update_board_height: (ev) => console.log(),
    update_ranked: (ev) => console.log(),
    update_aga_ranked: (ev) => console.log(),
  };
}

describe('ChallengeModes additional settings normal', () => {

  let mockedProps;
  beforeEach(() => {
    mockedProps = getBaseProps()
  });


  test('render additional settings', () => {

    render(<AdditionalSettingsNormal {...mockedProps} />);

    expect(screen.queryByLabelText('Ranked')).toBeTruthy();
    expect(screen.queryByLabelText('AGA Ranked')).toBeNull();
  });


  test('render additional settings with aga ranking', () => {
    (data.get as unknown as jest.Mock).mockImplementation((x: string, defaultValue?: any): any => {
      if (x === 'config.aga_rankings_enabled') {
        return true;
      }
      return defaultValue;
    });

    render(<AdditionalSettingsNormal {...mockedProps} />);

    expect(screen.queryByLabelText('Ranked')).toBeTruthy();
    expect(screen.queryByLabelText('AGA Ranked')).toBeTruthy();
  });

  test('render additional settings as folking game', () => {
    mockedProps.forking_game = true;

    render(<AdditionalSettingsNormal {...mockedProps} />);

    expect(screen.queryByLabelText('Ranked')).toBeNull();
    expect(screen.queryByLabelText('AGA Ranked')).toBeNull();
    expect(screen.queryByLabelText('Board Size')).toBeNull();
  });

  test('render additional settings with a custom board size', () => {
    mockedProps.conf.selected_board_size = "custom";

    render(<AdditionalSettingsNormal {...mockedProps} />);

    expect(screen.queryByTestId('challenge-goban-width')).toBeTruthy();
    expect(screen.queryByTestId('challenge-goban-height')).toBeTruthy();
  });
});
