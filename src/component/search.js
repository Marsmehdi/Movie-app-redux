import React, { Component } from "react";
import { SEARCH } from "../actions/action";
import { connect } from "react-redux";
class Search extends Component {
  

  render() {
    return (
      <div className="searchbar">
        <input
          type="text"
          className="form-control"
          name="searsh"
          placeholder="l'affiche de film.."
          onChange={e=>this.props.SEARCH(e.target.value)}
        />
      </div>  );}}

const mapDispatchToProps = dispatch => ( { SEARCH: title => dispatch(SEARCH(title)) });
export default connect(null, mapDispatchToProps)(Search);
