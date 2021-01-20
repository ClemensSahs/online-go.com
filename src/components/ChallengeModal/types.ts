import * as React from 'react';


export enum ChallengeModes {
  COMPUTER = "computer",
  DEMO = "demo",
  OPEN = "open",
  PLAYER = "player",
}

export type OnChangeHandlerInput = React.ChangeEventHandler<HTMLInputElement>;
export type OnChangeHandlerSelect = React.ChangeEventHandler<HTMLSelectElement>;

export interface BotObject {
  id: string
  rank: number
  username: string
  rankString: string
}

export * from './components/AdditionalSettings/types';
export * from './components/BasicSettings/types';

export type ToDoAny = any;
export type ToDoRemoveForDumpChilds = any;
