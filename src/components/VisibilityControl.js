import React from "react";
export const VisibilityControl = (props) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
        className="form-check-input"
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  );
};
