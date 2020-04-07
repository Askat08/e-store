import React from "react";

export default function SearchBox({
  onSearchClick,
  onSearchChange,
  searchField,
}) {
  return (
    <div className="input-group col-sm-9 mx-auto">
      <input
        className="form-control py-2 shadow-none"
        type="search"
        value={searchField}
        placeholder="Search..."
        id="example-search-input"
        onChange={onSearchChange}
        onKeyPress={onSearchClick}
      />
      <span className="input-group-append">
        <button
          className="btn btn-outline-info shadow-none"
          type="button"
          onClick={onSearchClick}
        >
          <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  );
}
