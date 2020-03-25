import React, { Component } from "react";
import { DELETE, EDIT,pathHandler} from "../actions/action";
import { Button, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Card extends Component {
  state = {
    show: false,

    tab: [
      "fa fa-star ",
      "fa fa-star ",
      "fa fa-star",
      "fa fa-star",
      "fa fa-star "
    ],
    src: "",
    txt: "",
    id: ""
  };
  onDelet = a => {
    this.props.DELETE(a);
    console.log(a)
  };
  handleShow = i => {
    this.setState({ show: true });

    this.props.x.map(
      el =>
        el.id === i &&
        this.setState({ src: el.scr, txt: el.txt, tab: el.tab, id: el.id })
    );
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  checked =idx => {
   
    this.setState({
      tab: this.state.tab.map((el, index) =>
        index <= idx ? "fa fa-star checked" : "fa fa-star"
      )
    });
  };

  onChange = event => {
    this.setState({ txt: event.target.value });
  };
  onEdit = id => {
    if (this.state.src.trim() === "" || this.state.txt.trim() === "") return;

    this.props.EDIT(el =>
      id === el.id
        ? {
            ...el,
            txt: this.state.txt.trim(),
            scr: this.state.src.trim(),
            srcset: this.state.src + " 1x",
            tab: this.state.tab
          }
        : el
    );

    this.setState({ src: "", txt: "" });
    this.setState({ show: false });
  };
  render() {
    const { scr, txt, tab,srcset,id } = this.props.xa;
    return (
      
     
          <div className="carte">
            <figure className="office__image">
              <img
                width="300"
                height="400"
                src={scr}
                alt=""
                srcset={srcset}
              />
            </figure>
            <Button
             variant="primary"
              onClick={() => this.props.pathHandler(id)}
            
            >
              
              <Link to={{ pathname: "/" + txt.replace(/ /g, "_") }} >
                WATCH TRAILER
              </Link>
          </Button>
            
            <div>
              <Button variant="success" onClick={() => this.handleShow(id)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => this.onDelet(id)}>
                Remove
              </Button>
            </div>
            <div>
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                animation={true}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Ajouter un film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="src"
                        placeholder="l'affiche de film.."
                        value={this.state.src}
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
                        value={this.state.txt}
                        placeholder={"Nom de film.."}
                        onChange={this.onChange}
                      />
                    </div>
                    <div>
                      {this.state.tab.map((el, index) => (
                        <span
                          className={el}
                          onClick={() => this.checked(index)}
                        ></span>
                      ))}
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn btn-success"
                    onClick={() => this.onEdit(this.state.id)}
                  >
                    Add film
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div>
              {tab.map((e, index) => (
                <span className={e}></span>
              ))}
            </div>
            <div className="office__desc">{txt}</div>
          </div>
        )}}
      
     
        const mapStateToProps = state => {
            return { x: state.films,
          searsh:state.Searsh,star:state.star };
          };

const mapDispatchToProps = dispatch => {
  return {
    DELETE: payload => dispatch(DELETE(payload)),
    EDIT: payload => dispatch(EDIT(payload)),
    
    pathHandler: payload => dispatch(pathHandler(payload)),
   
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
