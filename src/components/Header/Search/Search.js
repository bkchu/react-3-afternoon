import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  onChangeHandler(e) {
    this.props.search(e.target.value);
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            value={this.state.query}
            onChange={e => this.onChangeHandler(e)}
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}
