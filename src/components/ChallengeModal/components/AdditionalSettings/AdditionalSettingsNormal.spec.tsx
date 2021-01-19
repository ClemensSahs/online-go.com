
import * as React from 'react';
import * as data from "data";

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AdditionalSettingsNormal from './AdditionalSettingsNormal';
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
    challenge: {
      game: {
        width: 19,
        height: 19
      }
    },
    gameWidth: 19,
    gameHeight: 19,
    conf: {
      selected_board_size: '19x19'
    },
    selectedBoardSize: '19x19',
    forking_game: '',
    withAgaRanking: false,
    mode: ChallengeModes.OPEN,
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
        'basic',
        getBaseProps({})
    ],
    [
        'with-forking-game',
        getBaseProps({
            forking_game: true
        }),
        { canBeEmpty: true }
    ],
    [
        'with-aga-ranking',
        getBaseProps({
          withAgaRanking: false
        })
    ],
    [
        'without-aga-ranking',
        getBaseProps({
            withAgaRanking: true
        })
    ],
    [
        'custom board size',
        getBaseProps({
            conf: { selected_board_size: "custom" },
            selectedBoardSize: 'custom',
        })
    ],
],(labelSubfix: string, props, testAttributes) => {
  componentSanityChecks(
    `AdditionalSettingsNormal.${labelSubfix}`,
    <AdditionalSettingsNormal {...props} />,
    testAttributes
  );
});

describe('ChallengeModes additional settings normal', () => {

  let mockedProps;
  beforeEach(() => {
    mockedProps = getBaseProps()
  });

  test('render additional settings with a custom board size', () => {

  });
});
