import React from "react";

// import store from "./StoreClass.js";

// import "../css/style.css";

export class InputGoal extends React.Component {
  addData(store, event) {
    console.log(store);

    if (event.keyCode === 13 && event.target.value.trim() !== "") {
      store.setArray([
        ...store.getData(),
        {
          isChecked: false,
          value: event.target.value,
          id: Date.now(),
        },
      ]);
      event.target.value = "";
    }
  }

  render() {
    return (
      <section className="dotoApp">
        <div className="header">
          <h1>ToDoList</h1>
          <div className="header-task">
            <i className="fas fa-angle-down hidden allComplete"></i>
            <input className="input-goal" type="text" placeholder="What needs to be done" />
          </div>
        </div>
        <div className="main">
          <ul className="todoList"></ul>
        </div>
        <div className="footer hidden">
          <span className="number-items-left">0 items left</span>
          <button className="all-button">All</button>
          <button className="active-button">Active</button>
          <button className="completed-button">Completed</button>
          <button className="clear-completed-button">Clear completed</button>
        </div>
      </section>
    );
  }
}
