import React from "react";
import "./SidebarRow.css";
function SidebarRow({ Icon, title, select }) {
  return (
    <div className={`sidebarRow  ${select && "sidebarRow_selected"}`}>
      <Icon className="sidebarRow__icon" fontSize="small" />
      <p className="sidebarRow__title">{title}</p>
    </div>
  );
}

export default SidebarRow;
