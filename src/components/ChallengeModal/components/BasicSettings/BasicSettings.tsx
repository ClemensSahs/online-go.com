import * as React from 'react';

import {_} from "translate";

import {
  BasicSettingsProps,
  ChallengeModes
} from '../../types';

import BasicSettingsGameName from './BasicSettingsGameName';
import BasicSettingsGamePrivate from './BasicSettingsGamePrivate';


const getPrivateProps = (props: BasicSettingsProps) => {
  if (props.mode === ChallengeModes.DEMO) {
    return {
      onChange: props.onChangeDemoPrivate,
      checked: props.gameDemoPrivate,
      dataTestid: 'private-input-demo'
    }
  }
  return {
    onChange: props.onChangePrivate,
    checked: props.gamePrivate,
    dataTestid: 'private-input'
  }
}

const BasicSettings = (props: BasicSettingsProps) => {
    const privateProps = getPrivateProps(props);

    return (
    <div
      id="challenge-basic-settings"
      className="left-pane pane form-horizontal"
      role="form"
    >
        <BasicSettingsGameName {...props} />
        <div className="form-group">
            <label className="control-label" htmlFor="challenge-private">
                {_("Private")}
            </label>
            <div className="controls">
                <BasicSettingsGamePrivate {...privateProps} />
            </div>
        </div>
    </div>
  );
}

export default BasicSettings
