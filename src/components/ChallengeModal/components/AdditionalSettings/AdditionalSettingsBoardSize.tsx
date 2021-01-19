import * as React from 'react';
import {
  _
} from "translate";

// import {
//
// } './types';
import {
  ChallengeModes,
  OnChangeHandlerSelect,
  OnChangeHandlerInput,
} from '../../types';

interface AdditionalSettingsBoardSizeProps {
  enableCustomBoardSizes: boolean,
  selectedBoardSize: string,
  board_width: number,
  board_height: number,
  update_board_size: OnChangeHandlerSelect,
  update_board_width: OnChangeHandlerInput,
  update_board_height: OnChangeHandlerInput,
};

const AdditionalSettingsBoardSize = ({
  enableCustomBoardSizes,
  selectedBoardSize,
  gameWidth,
  gameHeight,
  update_board_size,
  update_board_width,
  update_board_height
}) => {
  return (
    <>
      <div className="form-group" id="challenge-board-size-group">
          <label className="control-label" htmlFor="challenge-board-size">{_("Board Size")}</label>
          <div className="controls">
              <div className="checkbox">
                  <select id="challenge-board-size" value={selectedBoardSize} onChange={update_board_size} className="challenge-dropdown form-control">
                      <optgroup label={_("Normal Sizes")}>
                          <option value="19x19">19x19</option>
                          <option value="13x13">13x13</option>
                          <option value="9x9">9x9</option>
                      </optgroup>
                      <optgroup label={_("Extreme Sizes")}>
                          <option disabled={!enableCustomBoardSizes} value="25x25">25x25</option>
                          <option disabled={!enableCustomBoardSizes} value="21x21">21x21</option>
                          <option disabled={!enableCustomBoardSizes} value="5x5">5x5</option>
                      </optgroup>
                      <optgroup label={_("Non-Square")}>
                          <option disabled={!enableCustomBoardSizes} value="19x9">19x9</option>
                          <option disabled={!enableCustomBoardSizes} value="5x13">5x13</option>
                      </optgroup>
                      <optgroup label={_("Custom")}>
                          <option disabled={!enableCustomBoardSizes} value="custom">{_("Custom Size")}</option>
                      </optgroup>
                  </select>
              </div>
          </div>
      </div>

      {selectedBoardSize === "custom" &&
          <div className="form-group">
              <label className="control-label" htmlFor="challenge-board-size-custom"></label>
              <div className="controls">
                  <div className="checkbox">
                      <input
                        role="input"
                        type="number"
                        value={gameWidth}
                        onChange={update_board_width}
                        id="challenge-goban-width"
                        data-testid="challenge-goban-width"
                        className="form-control"
                        style={{width: "3em"}}
                        min="1"
                        max="25"/>
                      <input
                        role="input"
                        type="number"
                        value={gameHeight}
                        onChange={update_board_height}
                        id="challenge-goban-height"
                        data-testid="challenge-goban-height"
                        className="form-control"
                        style={{width: "3em"}}
                        min="1"
                        max="25"/>
                  </div>
              </div>
          </div>
      }
    </>
  );
};


export default AdditionalSettingsBoardSize;
