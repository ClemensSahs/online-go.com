import * as React from 'react';
import {
  _
} from "translate";

import AdditionalSettingsHeaderDemo from './AdditionalSettingsHeaderDemo';
import AdditionalSettingsBoardSize from './AdditionalSettingsBoardSize';

import {
  AdditionalSettingsDemoProps,
} from './types';

import {
  ChallengeModes,
} from '../../types';


const AdditionalSettingsDemo = ({
  gameWidth,
  gameHeight,
  forking_game,
  mode,
  ranked,
  rules,
  selectedBoardSize,
  update_demo_rules,
  update_board_size,
  update_board_width,
  update_board_height,
}: AdditionalSettingsDemoProps) => {

  let enableCustomBoardSizes = mode === ChallengeModes.DEMO || !ranked;

  return (
    <div id="challenge-basic-settings" className="right-pane pane form-horizontal" role="form">
      <AdditionalSettingsHeaderDemo rules={rules} onChangeDemoRules={update_demo_rules} />

      {!forking_game &&
        <AdditionalSettingsBoardSize
          enableCustomBoardSizes={enableCustomBoardSizes}
          selectedBoardSize={selectedBoardSize}
          gameWidth={gameWidth}
          gameHeight={gameHeight}
          update_board_size={update_board_size}
          update_board_width={update_board_width}
          update_board_height={update_board_height}
        />
      }


    </div>
  );
};


export default AdditionalSettingsDemo;
