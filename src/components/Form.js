import React from "react";
import "./Form.css";

export default function Form({ changeCity, getData }) {
  function handleChange(e) {
    changeCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="row text-center">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-outline-secondary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary location">
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
