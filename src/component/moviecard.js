import React, { Component } from "react";
import Search from './search'
import Rating from './rating'
import Card from './card'
import Add from './add'

import { connect } from "react-redux";

class Moviecard extends Component {
 
  render() {
    return (<>
       <Search />
            < Rating />
      <div className="movlist">
        {this.props.x.filter(e=>e.txt.toUpperCase().
        includes(this.props.searsh.toUpperCase().trim())&&e.idx>=this.props.star)
     .map((e) => <Card xa={e} />)}
   <Add/>
      </div>
      </>)
  }
}
const mapStateToProps = state => {
  return { x: state.films,
searsh:state.Searsh,star:state.star };
};


export default connect(mapStateToProps)(Moviecard);
