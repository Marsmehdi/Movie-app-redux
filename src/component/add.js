import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import {ADD} from '../actions/action'

class Add extends Component {
  state ={
    show:false ,
    newFilm : {txt:'ywywyw'},
    tab:["fa fa-star ",
     "fa fa-star ",
     "fa fa-star",
     "fa fa-star",
     "fa fa-star "],
     src:"",txt:"",idx:0,trailer:""
  }


  
    
   
   onChange = (event) => {
       this.setState({ txt: event.target.value });
      };
  
  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
      
  onChange = (event) => {
    this.setState({ txt: event.target.value });
   };



   checked=(a)=>{
    console.log(a)
    this.setState({tab:this.state.tab.map((el,index)=>(index <= a?
      "fa fa-star checked" :"fa fa-star")),idx:a})
}
onadd=()=>{
    if (this.state.src.trim() === '' || this.state.txt.trim() === '') return;

      const newFilm = {
      id:uuidv4(),
      lien:'#',
       scr: this.state.src.trim(),
       srcset:this.state.src+' 1x',
       txt: this.state.txt.trim(),
       tab :this.state.tab,
       idx:this.state.idx,
       trailer:this.state.trailer
          
     };
    this.props.ADD(this.props.x.concat(newFilm));
    
      
    console.log()
    this.setState({ src: '', txt: '', });
    this.setState({ show: false });
}



  render() {
    return (
      <div>
        <Button variant="primary" className="btnadd" onClick={this.handleShow}>
          +
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="src"
                  placeholder="l'affiche de film.."
                  onChange={event => {
                    this.setState({ src: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="txt"
                  placeholder="Nom de film.."
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="txt"
                  placeholder="trailer"
                  onChange={event => {
                    this.setState({ trailer: event.target.value });
                  }}
                />
              </div>
              <div>
              {this.state.tab.map((el,index)=>(
                    <span className={el} onClick={()=>this.checked(index)}
                    
                    ></span>
                )
                )}
          
            
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" onClick={()=>this.onadd()}>
              Add film
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps=state=>{
    return {x: state.films}
}
const mapDispatchToProps=(dispatch)=>{
    return {ADD:(payload)=>dispatch(ADD(payload))} 
}

export default connect(mapStateToProps,mapDispatchToProps)(Add) 


