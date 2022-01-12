import "./App.css";
import "./css/style.css";
// import React, { Component } from "react";
import React from "react";

import { InputGoal } from "./components/InputGoal.js"
import store from "./components/StoreClass.js";


// class Test extends React.Component {
//   // name = null;
//   // constructor(name){
//   //   super()
//   //   this.name = name;
//   //   console.log(this.name);
//   // }

//   render() {
//     console.log(this.props);
//     return <h1> Hello {this.props.name}</h1>;
//   }
// }

function App() {
  return (
    <>
    {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Test name="Peter" />
      </header> */}
    {/* </div> */}

    {/* <InputGoal onKeyPress={}/> */}
    <InputGoal />
    {/* <InputGoal onKeyPress={InputGoal.addData(store)}/> */}

    </>

    
  );
}

export default App;
