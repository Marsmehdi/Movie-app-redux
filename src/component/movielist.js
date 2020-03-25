import React, { Component } from 'react'

import { connect } from "react-redux";
import Trailer from './trailer'
import Moviecard from'./moviecard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

 class Movielist extends Component {


    render() {

        return (
          <Router>

         <Switch>
          <Route  exact  path="/">
          <Moviecard/>
          </Route>
          
        
            <Route
              path='/:id'
              render={() => (
                <Trailer
                  
                />

         
              )}
            />
        
         
          
           
          
        
          
        </Switch>
      
         </Router>
         
         
           
    

   

            
          
        )
    }
  }


  const mapStateToProps = state => {
    return {
   
      movies: state.films,  pathindex: state.pathindex
      
    };}



export default connect(mapStateToProps) (Movielist)


