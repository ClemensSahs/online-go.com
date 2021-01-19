import * as React from 'react';
import {
  _
} from "translate";

import AdditionalSettingsHeaderDemo from './AdditionalSettingsHeaderDemo';
import AdditionalSettingsBoardSize from './AdditionalSettingsBoardSize';

import {
  AdditionalSettingsDemoProps,
} from './types';

const AdditionalSettingsDemo = ({
  enableCustomBoardSizes,
  gameWidth,
  gameHeight,
  forkingGame,
  mode,
  ranked,
  rules,
  selectedBoardSize,
  onChangeDemoRules,
  onChangeBoardSize,
  onChangeBoardWidth,
  onChangeBoardHeight,
}: AdditionalSettingsDemoProps) => {
  return (
    <div id="challenge-basic-settings" className="right-pane pane form-horizontal" role="form">
      <AdditionalSettingsHeaderDemo rules={rules} onChangeDemoRules={onChangeDemoRules} />

      {!forkingGame &&
        <AdditionalSettingsBoardSize
          enableCustomBoardSizes={enableCustomBoardSizes}
          selectedBoardSize={selectedBoardSize}
          gameWidth={gameWidth}
          gameHeight={gameHeight}
          onChangeBoardSize={onChangeBoardSize}
          onChangeBoardWidth={onChangeBoardWidth}
          onChangeBoardHeight={onChangeBoardHeight}
        />
      }


    </div>
  );
};


export default AdditionalSettingsDemo;
