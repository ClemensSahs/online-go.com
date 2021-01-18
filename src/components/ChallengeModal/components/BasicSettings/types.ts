import * as React from 'react';

import {
  OnChangeHandlerInput,
  OnChangeHandlerSelect,
  ChallengeModes,
} from '../types';

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
