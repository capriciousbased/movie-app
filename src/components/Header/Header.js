import React from "react";
import "./Header.css";

function header() {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        🎬 Entertainment Hub 🎥
      </span>
    </div>
  );
}

export default header;
