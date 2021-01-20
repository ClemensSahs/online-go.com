import * as React from 'react';

const AdditionalSettingsHeaderRanked = ({
  isPrivate,
  ranked,
  onChange,
  label,
  id
}) =>
    <div className="form-group">
        <label className="control-label" htmlFor={id}>{label}</label>
        <div className="controls">
            <div className="checkbox">
                <input type="checkbox"
                    id={id}
                    disabled={isPrivate}
                    checked={ranked} onChange={onChange}/>
            </div>
        </div>
    </div>;

export default AdditionalSettingsHeaderRanked
