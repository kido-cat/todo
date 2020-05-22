import React, { Component } from "react";
import "../style/Modal.css";
class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
     hiddenClose: this.props.hiddenClose
    };
    this.hiddenBthClose = this.hiddenBthClose.bind(this);
  }
  hiddenBthClose(){
    this.setState({
      hiddenClose: true
    });
  }
  render() {
    //click
    console.log(this.props.backModal)
    if(this.state.hiddenClose){
      return <div className="Modal">
        <div className="wrapper_content">
          <div className="head_content">
            <h1> This is a modal 1</h1>
            <a  onClick={this.props.backModal} className="btn_close isHidden" href="#">
              <img src="https://cdn.glitch.com/c22689e0-a419-4eb5-8a14-e3b31b436c3b%2Fclose.svg?v=1590054511894" />
            </a>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="buttons">
            <a onClick={this.hiddenBthClose} className="btn btn_accept" href="#">Accept</a>
            <a onClick={this.hiddenBthClose} className="btn btn_decline" href="#">Decline</a>
          </div>
        <a onClick={this.props.backModal} href="#"> GO back</a>
        </div>
      </div>

    }
    
    // normal
    return (
      <div className="Modal">
        <div className="wrapper_content">
          <div className="head_content">
            <h1> This is a modal 1</h1>
            <a  onClick={this.props.backModal} className="btn_close" href="#">
              <img src="https://cdn.glitch.com/c22689e0-a419-4eb5-8a14-e3b31b436c3b%2Fclose.svg?v=1590054511894" />
            </a>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="buttons">
            <a onClick={this.hiddenBthClose} className="btn btn_accept" href="#">Accept</a>
            <a onClick={this.hiddenBthClose} className="btn btn_decline" href="#">Decline</a>
          </div>
          <a onClick={this.props.backModal} href="#"> GO back</a>
        </div>
      </div>
    );


  }
}

export default Modal;
