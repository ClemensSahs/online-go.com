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

// export interface BasicSettingsProps {
//   gameName: string,
//   challenge
//   conf
//   botId,
//   botList?,
//   gameDemoPrivate
//   gamePrivate
//   mode: ChallengeModes
//   update_conf_bot_id: OnChangeHandlerSelect
//   update_challenge_game_name: OnChangeHandlerSelect
  // update_private: OnChangeHandlerSelect
  // update_demo_private: OnChangeHandlerSelect
// }
