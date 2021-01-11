

export enum ChallengeModes {
  COMPUTER = "computer",
  DEMO = "demo",
  OPEN = "open",
  PLAYER = "player",
}

export interface AdditionalSettingsProps {
  challenge
  conf
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  rules
  update_demo_rules: Function
  update_board_size: Function
  update_board_width: Function
  update_board_height: Function
  update_ranked: Function
  update_aga_ranked: Function
}
