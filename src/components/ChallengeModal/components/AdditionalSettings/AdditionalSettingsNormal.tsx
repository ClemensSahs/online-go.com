import * as React from "react";

import {
  _
} from "translate";
import * as data from "data";

import AdditionalSettingsBoardSize from './AdditionalSettingsBoardSize';
import AdditionalSettingsHeaderRanked from './AdditionalSettingsHeaderRanked';

import {
  AdditionalSettingsNormalProps,
  ChallengeModes
} from './types';

export const AdditionalSettingsNormal = ({
  agaRanked,
  enableCustomBoardSizes,
  forkingGame,
  gameHeight,
  gameWidth,
  isPrivate,
  ranked,
  selectedBoardSize,
  onChangeRanked,
  onChangeAgaRanked,
  onChangeBoardHeight,
  onChangeBoardSize,
  onChangeBoardWidth,
  withAgaRanking,
}: AdditionalSettingsNormalProps) => {
  if (forkingGame) {
    return null;
  }

  return (
    <div id="challenge-additional-settings" className="right-pane pane form-horizontal" role="form">
        <div>
            <AdditionalSettingsHeaderRanked
              ranked={ranked}
              isPrivate={isPrivate}
              label={_("Ranked")}
              onChange={onChangeRanked}
              id={'challenge-ranked'}
            />
            {withAgaRanking &&
              <AdditionalSettingsHeaderRanked
                ranked={agaRanked}
                isPrivate={isPrivate}
                label={_("AGA Ranked")}
                onChange={onChangeAgaRanked}
                id={'challenge-aga-ranked'}
              />
            }
        </div>

        <AdditionalSettingsBoardSize
          enableCustomBoardSizes={enableCustomBoardSizes}
          selectedBoardSize={selectedBoardSize}
          gameWidth={gameHeight}
          gameHeight={gameWidth}
          onChangeBoardSize={onChangeBoardSize}
          onChangeBoardWidth={onChangeBoardWidth}
          onChangeBoardHeight={onChangeBoardHeight}
        />
    </div>
  );
};


export default AdditionalSettingsNormal;
