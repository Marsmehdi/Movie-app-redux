import React, { Component } from 'react'
import {RATING}from '../actions/action'

import {connect} from 'react-redux'
 class Rating extends Component {
     state={
     tab:["fa fa-star ",
     "fa fa-star ",
     "fa fa-star",
     "fa fa-star",
     "fa fa-star "],
    idx:""}
     checked=(a)=>{
        
         this.setState({tab:this.state.tab.map((el,index)=>(index <= a?
           "fa fa-star checked" :"fa fa-star")),idx : a})
          
           this.props.RATING(a)
         
     }
     
    render() {
        return (
            
            <div>
              {this.state.tab.map((el,index)=>(
                    <span className={el} onClick={()=>this.checked(index)} ></span>
                )
                )}
          
            
            </div>
        )
    }
}



const mapDispatchToProps=(dispatch)=>{
    return {RATING:(payload)=>dispatch(RATING(payload))} 

}


export default connect(null,mapDispatchToProps)(Rating) 

