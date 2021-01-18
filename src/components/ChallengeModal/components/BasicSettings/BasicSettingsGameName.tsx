import * as React from 'react';

import {_, pgettext} from "translate";

import {
  BasicSettingsGameNameProps,
  BotObject,
  ChallengeModes,
} from '../../types';

const BasicSettingsGameName = ({
  gameName,
  botId,
  botList,
  mode,
  onChangeChallengeGameName,
  onChangeConfBotId,
}: BasicSettingsGameNameProps) => {
    if (mode !== ChallengeModes.COMPUTER) {
        return (
            <div className="form-group">
                <label
                  className="control-label"
                  htmlFor="challenge_game_name"
                  >{_("Game Name")}</label>
                <div className="controls">
                    <div className="checkbox">
                        <input
                          type="text"
                          value={gameName}
                          onChange={onChangeChallengeGameName}
                          className="form-control"
                          id="challenge-game-name"
                          placeholder={_("Game Name")}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="form-group">
            <label
              className="control-label"
              htmlFor="engine"
            >
                {pgettext("Computer opponent", "AI Player")}
            </label>
            <div className="controls">
                <select
                  id="challenge-ai"
                  value={botId}
                  data-testid='challenge-ai'
                  onChange={onChangeConfBotId}
                  required={true}
                >
                    {botList.map((bot: BotObject, idx: string) => {
                        // const rank = rankString(getUserRating(bot).rank);
                        const optionString = `${bot.username} (${bot.rankString})`;
                        return <option key={idx} value={bot.id} >{optionString}</option>;
                    })}
                </select>
            </div>
        </div>
    );
}

export default BasicSettingsGameName
