
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

jest.mock('translate', () => ({
    _: jest.fn(x => x),
}));

const getBaseProps = (customProps = {}) => {
  const baseProps = {
    gameWidth: 19,
    gameHeight: 19,
    selectedBoardSize: '19x19',
    forking_game: '',
    mode: ChallengeModes.DEMO,
    enableCustomBoardSizes: false,
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
  [
      'without-folking',
      getBaseProps({
          forking_game: false,
      })
  ],
  [
      'with-folking',
      getBaseProps({
          forking_game: true,
      })
  ],
  [
      'custom board size',
      getBaseProps({
          selectedBoardSize: "custom"
      })
  ],
  [
      'custom board size with ',
      getBaseProps({
          selectedBoardSize: "custom",
          enableCustomBoardSizes: true,
      })
  ],
],(labelSubfix: string, props) => {
  componentSanityChecks(`AdditionalSettingsDemo.${labelSubfix}`, <AdditionalSettingsDemo {...props} />);
});

describe('ChallengeModes additional settings demo', () => {

  let mockedProps;
  beforeEach(() => {
    mockedProps = getBaseProps()
  });

});
