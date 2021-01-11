import * as React from "react";

import {
  _
} from "translate";
import * as data from "data";

import AdditionalSettingsBoardSize from './AdditionalSettingsBoardSize';
import {
  AdditionalSettingsHeaderRanked,
  AdditionalSettingsHeaderAgaRanked
} from './AdditionalSettingsHeaderRanked';

type ChallengeModes = "open" | "computer" | "player" | "demo";
interface AdditionalSettingsNormalProps {
  challenge
  conf
  forking_game: boolean
  mode: ChallengeModes
  ranked: boolean
  update_demo_rules: Function
  update_board_size: Function
  update_board_width: Function
  update_board_height: Function
  update_ranked: Function
  update_aga_ranked: Function
}

export const AdditionalSettingsNormal = ({
  mode,
  conf,
  ranked,
  forking_game,
  challenge,
  update_ranked,
  update_aga_ranked,
  update_board_size,
  update_board_width,
  update_board_height,
}: AdditionalSettingsNormalProps) => {

  let enable_custom_board_sizes = mode === 'demo' || !ranked;

  if (forking_game) {
    return null;
  }

  return (
    <div id="challenge-additional-settings" className="right-pane pane form-horizontal" role="form">
        <div>
            <AdditionalSettingsHeaderRanked
              challenge={challenge}
              update_ranked={update_ranked}
            />
            {data.get("config.aga_rankings_enabled", null) &&
              <AdditionalSettingsHeaderAgaRanked
                challenge={challenge}
                update_aga_ranked={update_aga_ranked}
              />
            }
        </div>

        <AdditionalSettingsBoardSize
          enable_custom_board_sizes={enable_custom_board_sizes}
          selected_board_size={conf.selected_board_size}
          board_width={challenge.game.width}
          board_height={challenge.game.height}
          update_board_size={update_board_size}
          update_board_width={update_board_width}
          update_board_height={update_board_height}
        />
    </div>
  );
};


export default AdditionalSettingsNormal;
