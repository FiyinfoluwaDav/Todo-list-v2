import React from "react";
import "../switch.css";

function Switch({ toggled, onToggle }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;