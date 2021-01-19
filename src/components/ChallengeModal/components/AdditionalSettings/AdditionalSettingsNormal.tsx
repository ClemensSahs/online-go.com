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


import {
  AdditionalSettingsNormalProps,
  ChallengeModes
} from './types';

export const AdditionalSettingsNormal = ({
  mode,
  ranked,
  forking_game,
  selectedBoardSize,
  gameHeight,
  gameWidth,
  challenge,
  update_ranked,
  update_aga_ranked,
  update_board_size,
  update_board_width,
  update_board_height,
  withAgaRanking
}: AdditionalSettingsNormalProps) => {

  let enable_custom_board_sizes = mode === ChallengeModes.DEMO || !ranked;

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
            {withAgaRanking &&
              <AdditionalSettingsHeaderAgaRanked
                challenge={challenge}
                update_aga_ranked={update_aga_ranked}
              />
            }
        </div>

        <AdditionalSettingsBoardSize
          enableCustomBoardSizes={enable_custom_board_sizes}
          selectedBoardSize={selectedBoardSize}
          gameWidth={gameHeight}
          gameHeight={gameWidth}
          update_board_size={update_board_size}
          update_board_width={update_board_width}
          update_board_height={update_board_height}
        />
    </div>
  );
};


export default AdditionalSettingsNormal;
