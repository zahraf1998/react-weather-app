import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <div className="mb-3">
          <div className="row text-center">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter a city ..."
                className="form-control"
                id="search-input"
                autoComplete="off"
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-outline-secondary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-secondary location"
                id="current-button"
              >
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
