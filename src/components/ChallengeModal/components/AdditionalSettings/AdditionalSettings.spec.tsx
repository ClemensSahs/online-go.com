
import * as React from 'react';
import * as data from "data";

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AdditionalSettings from './AdditionalSettings';
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
    withAgaRanking: false,
    update_demo_rules: (ev) => console.log(),
    update_board_size: (ev) => console.log(),
    update_board_width: (ev) => console.log(),
    update_board_height: (ev) => console.log(),
    update_ranked: (ev) => console.log(),
    update_aga_ranked: (ev) => console.log(),
  };
}

describe('ChallengeModes additional settings switch', () => {

  let mockedProps;
  beforeEach(() => {
    mockedProps = getBaseProps()
  });


  test('render additional settings as open', () => {

    render(<AdditionalSettings {...mockedProps} />);

    expect(screen.queryByLabelText('Ranked')).toBeTruthy();
  });

  test('render additional settings as a demo', () => {
    mockedProps.mode = ChallengeModes.DEMO;

    render(<AdditionalSettings {...mockedProps} />);
    expect(screen.queryByLabelText('Ranked')).toBeNull();

  });
});
