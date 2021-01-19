
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
    forkingGame: '',
    mode: ChallengeModes.DEMO,
    enableCustomBoardSizes: false,
    ranked: false,
    onChangeDemoRules: (ev) => console.log(),
    onChangeBoardSize: (ev) => console.log(),
    onChangeBoardWidth: (ev) => console.log(),
    onChangeBoardHeight: (ev) => console.log(),
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
          forkingGame: false,
      })
  ],
  [
      'with-folking',
      getBaseProps({
          forkingGame: true,
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
