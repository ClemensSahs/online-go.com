
import {
  OnChangeHandlerInput,
  OnChangeHandlerSelect,
  ChallengeModes,
} from '../../types';
export {
  ChallengeModes,
} from '../../types';

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
  selectedBoardSize: string
  gameHeight: number
  gameWidth: number
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
  selectedBoardSize: string
  gameWidth: number
  gameHeight: number
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  rules
  update_demo_rules: OnChangeHandlerSelect
  update_board_size: OnChangeHandlerSelect
  update_board_width: OnChangeHandlerSelect
  update_board_height: OnChangeHandlerSelect
}
