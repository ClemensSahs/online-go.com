import * as React from 'react';
import {
  _
} from "translate";

import AdditionalSettingsHeaderDemo from './AdditionalSettingsHeaderDemo';
import AdditionalSettingsBoardSize from './AdditionalSettingsBoardSize';

import {
  ChallengeModes,
  AdditionalSettingsDemoProps
} from '../../types';


const AdditionalSettingsDemo = ({
  challenge,
  conf,
  forking_game,
  mode,
  ranked,
  rules,
  update_demo_rules,
  update_board_size,
  update_board_width,
  update_board_height,
}: AdditionalSettingsDemoProps) => {

  let enable_custom_board_sizes = mode === ChallengeModes.DEMO || !ranked;

  return (
    <div id="challenge-basic-settings" className="right-pane pane form-horizontal" role="form">
      <AdditionalSettingsHeaderDemo rules={rules} update_demo_rules={update_demo_rules} />

      {!forking_game &&
        <AdditionalSettingsBoardSize
          enable_custom_board_sizes={enable_custom_board_sizes}
          selected_board_size={conf.selected_board_size}
          board_width={challenge.game.width}
          board_height={challenge.game.height}
          update_board_size={update_board_size}
          update_board_width={update_board_width}
          update_board_height={update_board_height}
        />
      }


    </div>
  );
};


export default AdditionalSettingsDemo;
