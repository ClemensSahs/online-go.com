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

export interface BasicSettingsGamePrivateProps {
  dataTestid: string
  checked: boolean
  onChange: OnChangeHandlerInput
};


export interface BasicSettingsGameNameProps {
  gameName: string,
  botId
  botList?
  mode: ChallengeModes
  onChangeChallengeGameName: OnChangeHandlerInput
  onChangeConfBotId: OnChangeHandlerSelect
}

export interface BasicSettingsProps extends BasicSettingsGamePrivateProps, BasicSettingsGameNameProps {
  //   gameName: string,
  //   challenge
  //   conf
  //   botId,
  //   botList?,
    gameDemoPrivate
    gamePrivate
  //   mode: ChallengeModes
  //   update_conf_bot_id: OnChangeHandlerSelect
  //   update_challenge_game_name: OnChangeHandlerSelect
    onChangePrivate: OnChangeHandlerInput
    onChangeDemoPrivate: OnChangeHandlerInput
}

export interface AdditionalSettingsProps {
  challenge
  conf
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  rules
  update_demo_rules: OnChangeHandlerSelect
  update_board_size: OnChangeHandlerSelect
  update_board_width: OnChangeHandlerSelect
  update_board_height: OnChangeHandlerSelect
  update_ranked: OnChangeHandlerSelect
  update_aga_ranked: OnChangeHandlerSelect
  withAgaRanking: boolean
}

export interface AdditionalSettingsNormalProps {
  challenge
  conf
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  update_demo_rules: OnChangeHandlerSelect
  update_board_size: OnChangeHandlerSelect
  update_board_width: OnChangeHandlerSelect
  update_board_height: OnChangeHandlerSelect
  update_ranked: OnChangeHandlerSelect
  update_aga_ranked: OnChangeHandlerSelect
  withAgaRanking: boolean
}

export interface AdditionalSettingsDemoProps {
  challenge
  conf
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  rules
  update_demo_rules: OnChangeHandlerSelect
  update_board_size: OnChangeHandlerSelect
  update_board_width: OnChangeHandlerSelect
  update_board_height: OnChangeHandlerSelect
}
