import * as React from 'react';
import {
  _
} from "translate";

export const AdditionalSettingsHeaderRanked = ({
  challenge,
  onChangeRanked
}) => <div>
    <div className="form-group">
        <label className="control-label" htmlFor="challenge-ranked">{_("Ranked")}</label>
        <div className="controls">
            <div className="checkbox">
                <input type="checkbox"
                    id="challenge-ranked"
                    disabled={challenge.game.private}
                    checked={challenge.game.ranked} onChange={onChangeRanked}/>
            </div>
        </div>
    </div>
</div>;

export const AdditionalSettingsHeaderAgaRanked = ({
  challenge,
  onChangeAgaRanked
}) =>
    <div className="form-group">
        <label className="control-label" htmlFor="challenge-aga-ranked">{_("AGA Ranked")}</label>
        <div className="controls">
            <div className="checkbox">
                <input type="checkbox"
                    id="challenge-aga-ranked"
                    disabled={challenge.game.private}
                    checked={challenge.aga_ranked} onChange={onChangeAgaRanked}/>
            </div>
        </div>
    </div>;
