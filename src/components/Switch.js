import React from "react";
import "../styles.css";

function Switch({ toggled, onToggle }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;