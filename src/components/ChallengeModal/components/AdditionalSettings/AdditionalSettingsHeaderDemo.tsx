import * as React from 'react';
import {
  _
} from "translate";

const AdditionalSettingsHeaderDemo = ({
  rules,
  update_demo_rules
}) =>
    <div className="form-group" id="challenge.game.rules-group">
        <label className="control-label" htmlFor="rules">{_("Rules")}</label>
        <div className="controls">
            <div className="checkbox">
                <select
                  value={rules}
                  onChange={update_demo_rules}
                  className="challenge-dropdown form-control"
                >
                    <option value="aga">{_("AGA")}</option>
                    <option value="chinese">{_("Chinese")}</option>
                    <option value="ing">{_("Ing SST")}</option>
                    <option value="japanese">{_("Japanese")}</option>
                    <option value="korean">{_("Korean")}</option>
                    <option value="nz">{_("New Zealand")}</option>
                </select>
            </div>
        </div>
  </div>;

  export default AdditionalSettingsHeaderDemo;
