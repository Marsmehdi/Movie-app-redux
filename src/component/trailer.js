import React, { Component } from "react";
import { connect } from "react-redux";



class Trailer extends    Component {
    render(){
    
  return (
    <div className="ftou7">
          {this.props.x.map(e=>(e.id)==(this.props.pathindex)&&(
     
      <iframe width="574" height="323" className="trailer" src={e.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>))}
    </div>
  );
}}
const mapStateToProps = state => {
  return { x: state.films,
    pathindex: state.pathindex };
};

export default connect(mapStateToProps) (Trailer);