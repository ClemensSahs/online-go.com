
import * as React from 'react';
import { bots_list } from "bots";
import { rankString, getUserRating } from "rank_utils";


import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('bots');
jest.mock('rank_utils');

import BasicSettings from './BasicSettings';
import {
  componentSanityChecks,
  runPropsMatrix,
  testCheckBox,
} from 'testUtility';
import {
  ChallengeModes,
} from '../../types';

jest.mock('translate', () => ({
    _: jest.fn(x => x),
    pgettext: jest.fn((x,y) => x),
}));

jest.mock('sockets', () => ({
    termination_socket: {
      on: jest.fn(x => x),
    }
}));

const getBaseProps = (customProps = {}) => {
  const baseProps = {
    botId: null,
    botList: [],
    gamePrivate: false,
    gameDemoPrivate: false,
    gameName: 'test game',
    mode: ChallengeModes.OPEN,
    onChangeChallengeGameName: jest.fn(x => x),
    onChangeConfBotId: jest.fn(x => x),
    onChangeDemoPrivate: jest.fn(x => x),
    onChangePrivate: jest.fn(x => x),
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
  ['as computer', getBaseProps({
    mode:ChallengeModes.COMPUTER,
    botId: 12,
    botList: [
      {id: 'test-bot-1', username: 'test-bot-1', rank: '20', rankString: '10k'},
      {id: 'test-bot-2', username: 'test-bot-2', rank: '21', rankString: '9k'},
      {id: 'test-bot-3', username: 'test-bot-3', rank: '22', rankString: '8k'}
    ],
  })],
  ['as player', getBaseProps({
    mode:ChallengeModes.PLAYER
  })]
],(labelSubfix: string, props) => {
  componentSanityChecks(`BasicSettings.${labelSubfix}`, <BasicSettings {...props} />);
});

describe('ChallengeModes basic settings', () => {

  let mockedProps;
  beforeEach(() => {
    cleanup();
    mockedProps = getBaseProps();
  });


  test('render basic settings check private update', () => {
    testCheckBox({
      Component: BasicSettings,
      mockedProps,
      propertyNameOfValue: 'gamePrivate',
      propertyNameOfUpdateFunction: 'onChangePrivate',
      testid: 'private-input',
    });
  });

  test('render basic settings check private demo update', () => {
    testCheckBox({
      Component: BasicSettings,
      mockedProps: {
        ...mockedProps,
        mode: ChallengeModes.DEMO
      },
      propertyNameOfValue: 'gameDemoPrivate',
      propertyNameOfUpdateFunction: 'onChangeDemoPrivate',
      testid: 'private-input-demo',
    });
  });
});
