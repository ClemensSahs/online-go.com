
import * as React from "react";
import {
  _
} from "translate";

import AdditionalSettingsNormal from './AdditionalSettingsNormal';
import AdditionalSettingsDemo from './AdditionalSettingsDemo';
import {
  AdditionalSettingsProps,
  ChallengeModes
} from '../../types';

const AdditionalSettings = (props: AdditionalSettingsProps) => {
  let childProps = {
    ...props,
    enable_custom_board_sizes: !props.ranked
  };

  if (props.mode !== ChallengeModes.DEMO) {
    childProps.enable_custom_board_sizes = true;

    return <AdditionalSettingsNormal {...childProps}/>;
  }

  return <AdditionalSettingsDemo {...childProps}/>;
};

export default AdditionalSettings;
