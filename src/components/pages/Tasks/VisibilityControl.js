import React from "react";
export const VisibilityControl = (props) => {
  return (
    <div className="my-1 text-center">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
        className="form-check-input mx-4"
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  );
};
