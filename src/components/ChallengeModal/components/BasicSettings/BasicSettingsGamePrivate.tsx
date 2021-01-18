import * as React from 'react';

import {_} from "translate";

import {
  BasicSettingsGamePrivateProps,
} from '../../types';

const BasicSettingsGamePrivate = (props: BasicSettingsGamePrivateProps) => {
  return (
      <div className="checkbox">
          <input
            type="checkbox"
            id="challenge-private"
            data-testid={props.dataTestid}
            checked={props.checked}
            onChange={props.onChange}
            />
      </div>
  );
}

export default BasicSettingsGamePrivate
