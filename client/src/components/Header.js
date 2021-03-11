import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container header-row">
        <div className="coln">
          <h1>ToDoo</h1>
        </div>
        <div className="coln"><div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div></div>
        <div className="coln">
        <img src="" alt="" width="30" height="24" />
        </div>
      </div>
    </header>
  );
}
