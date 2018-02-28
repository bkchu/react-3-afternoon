import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

export default class Search extends Component {
  onChangeHandler(e) {
    this.props.search(e.target.value);
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            onChange={e => this.onChangeHandler(e)}
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}
