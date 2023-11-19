import React from "react";

/*If you component doesn't have props, you don't need to call
them */
export default function JoinButton() {
  return (
    <div className="section">
      <div className="button zoom">
        <a href="https://google.com" target="_blank">
          <button className="button">Join CAVE</button>
        </a>
      </div>
    </div>
  );
}
