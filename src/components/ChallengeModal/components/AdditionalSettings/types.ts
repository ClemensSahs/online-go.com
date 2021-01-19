
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
  gameWidth: number
  gameHeight: number
  forkingGame: boolean
  mode: ChallengeModes
  ranked: boolean
  selectedBoardSize: string
  onChangeBoardSize: OnChangeHandlerSelect
  onChangeBoardWidth: OnChangeHandlerSelect
  onChangeBoardHeight: OnChangeHandlerSelect
}

export interface AdditionalSettingsNormalProps extends AdditionalSettingsBaseProps {
  challenge

  onChangeRanked: OnChangeHandlerSelect
  onChangeAgaRanked: OnChangeHandlerSelect
  withAgaRanking: boolean
}

export interface AdditionalSettingsDemoProps extends AdditionalSettingsBaseProps {
  rules
  onChangeDemoRules: OnChangeHandlerSelect
}


export interface AdditionalSettingsProps extends AdditionalSettingsNormalProps, AdditionalSettingsDemoProps{
  conf
  challenge
}
