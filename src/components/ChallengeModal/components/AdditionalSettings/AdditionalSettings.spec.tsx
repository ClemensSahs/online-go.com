
import * as React from 'react';
import * as data from "data";

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AdditionalSettings from './AdditionalSettings';
import {
  ChallengeModes
} from '../../types';

jest.mock('data');

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
    onChangeDemoRules: (ev) => console.log(),
    onChangeBoardSize: (ev) => console.log(),
    onChangeBoardWidth: (ev) => console.log(),
    onChangeBoardHeight: (ev) => console.log(),
    onChangeRanked: (ev) => console.log(),
    onChangeAgaRanked: (ev) => console.log(),
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
