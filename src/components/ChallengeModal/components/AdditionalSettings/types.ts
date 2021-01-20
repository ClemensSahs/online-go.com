
import {
  OnChangeHandlerInput,
  OnChangeHandlerSelect,
  ChallengeModes,
} from '../../types';
export {
  ChallengeModes,
} from '../../types';

export interface AdditionalSettingsBaseProps {
  enableCustomBoardSizes: boolean
  forkingGame: boolean
  gameWidth: number
  gameHeight: number
  mode: ChallengeModes
  selectedBoardSize: string
  onChangeBoardHeight: OnChangeHandlerSelect
  onChangeBoardSize: OnChangeHandlerSelect
  onChangeBoardWidth: OnChangeHandlerSelect
}

export interface AdditionalSettingsNormalProps extends AdditionalSettingsBaseProps {
  agaRanked: boolean
  isPrivate: boolean
  ranked: boolean
  onChangeRanked: OnChangeHandlerSelect
  onChangeAgaRanked: OnChangeHandlerSelect
  withAgaRanking: boolean
}

export interface AdditionalSettingsDemoProps extends AdditionalSettingsBaseProps {
  rules
  onChangeDemoRules: OnChangeHandlerSelect
}


export interface AdditionalSettingsProps extends AdditionalSettingsNormalProps, AdditionalSettingsDemoProps{
  // conf
  // challenge
}
