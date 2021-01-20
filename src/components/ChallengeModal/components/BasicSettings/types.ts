
import {
  OnChangeHandlerInput,
  OnChangeHandlerSelect,
  ChallengeModes,
  ToDoAny,
} from '../../types';

export interface BasicSettingsGamePrivateProps {
  dataTestid: string
  checked: boolean
  onChange: OnChangeHandlerInput
};

export interface BasicSettingsGameNameProps {
  botId?: ToDoAny
  botList?: ToDoAny
  gameName: string,
  mode: ChallengeModes
  onChangeChallengeGameName: OnChangeHandlerInput
  onChangeConfBotId: OnChangeHandlerSelect
}

export interface BasicSettingsProps extends BasicSettingsGameNameProps {
    gameDemoPrivate: boolean
    gamePrivate: boolean
    onChangePrivate: OnChangeHandlerInput
    onChangeDemoPrivate: OnChangeHandlerInput
}
