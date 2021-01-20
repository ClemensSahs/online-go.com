
import {
  OnChangeHandlerInput,
  OnChangeHandlerSelect,
  ChallengeModes,
} from '../../types';

export interface BasicSettingsGamePrivateProps {
  dataTestid: string
  checked: boolean
  onChange: OnChangeHandlerInput
};

export interface BasicSettingsGameNameProps {
  botId?
  botList?
  gameName: string,
  mode: ChallengeModes
  onChangeChallengeGameName: OnChangeHandlerInput
  onChangeConfBotId: OnChangeHandlerSelect
}

export interface BasicSettingsProps extends BasicSettingsGameNameProps {
  //   gameName: string,
  //   challenge
  //   conf
  //   botId,
  //   botList?,
    gameDemoPrivate: boolean
    gamePrivate: boolean
  //   update_conf_bot_id: OnChangeHandlerSelect
  //   update_challenge_game_name: OnChangeHandlerSelect
    onChangePrivate: OnChangeHandlerInput
    onChangeDemoPrivate: OnChangeHandlerInput
}
