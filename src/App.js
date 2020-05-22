import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal'
import Todolist from './components/Todolist'
import logo from './logo.svg'
class App extends Component {
  constructor(){
    super();
    this.showModal = this.showModal.bind(this);   
    this.showTodoList = this.showTodoList.bind(this);
    this.backModal = this.backModal.bind(this)
    this.backTodo = this.backTodo.bind(this)  
    this.state = {
      show: false,
      hiddenClose: false, 
      showTodo: false
    }
  }
  showModal(){
    this.setState({
      show: true
    });
  }
  backModal(){
    this.setState({
      show: false
    });
  }
  backTodo(){
    this.setState({
      showTodo: false
    });
  }
  showTodoList(){
    this.setState({
      showTodo: true
    })
  }
  render() {
    
    if(this.state.show){
      return <Modal hiddenClose={this.state.hiddenClose} backModal={this.backModal} />
    }
     if(this.state.showTodo){
      return <Todolist   backTodo={this.backTodo}/>
    }
        if(!this.state.show){
         return (
      <div className="App">
         <header className="App-header">
          <img src={logo}className="App-logo" alt="logo" />
          <p>
            <button onClick={this.showModal}>Open modal</button>
          </p>
           <p>
            <button onClick={this.showTodoList}>Open Todolist</button>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love Tùn
          </a>
        </header>      
      </div>
    );
    }
    return (
      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.showModal}>Open modal</button>
          </p>
           <p>
            <button onClick={this.showTodoList}>Open Todolist</button>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
             Love Tùn
          </a>
        </header>    
      </div>
    );
  }
}

export default App;
