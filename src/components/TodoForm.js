import React from "react";
import { ToDoContext } from "./CreateContextApp.js";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }
  static contextType = ToDoContext;

  addToDo = (event) => {
    if (event.charCode === 13 && event.target.value.trim() !== "") {
      this.context.setContext({
        todosArray: [
          ...this.context.context.todosArray,
          {
            isChecked: false,
            value: event.target.value,
            id: Date.now(),
          },
        ],
        isAllCompleted: false,
      });
      event.target.value = "";
    }
  };

  handleCheckAll = (event) => {
    console.log("status: ", !this.context.context.isAllCompleted, event.target);
    if (!this.context.context.isAllCompleted) {
      const newArray = this.context.context.todosArray.map((item) => {
        return { ...item, isChecked: true };
      });
      this.context.setContext({
        todosArray: newArray,
        isAllCompleted: !newArray.find((item) => !item.isChecked),
      });

      this.setState({
        isSelected: true,
      });
    } else {
      const newArray = this.context.context.todosArray.map((item) => {
        return { ...item, isChecked: false };
      });
      this.context.setContext({
        todosArray: newArray,
        isAllCompleted: !newArray.find((item) => !item.isChecked),
      });
      this.setState({
        isSelected: false,
      });
    }
  };

  render() {
    const { todosArray } = this.context.context;

    console.log(this.context);
    return (
      <div className="header">
        <h1>ToDoList</h1>
        <div className="header-task">
          <span
            className={
              !todosArray.length ? "allComplete hidden" : this.state.isSelected ? "allComplete checked" : "allComplete"
            }
            onClick={this.handleCheckAll}
          ></span>
          <input
            className="input-goal"
            type="text"
            placeholder="What needs to be done"
            onKeyPress={this.addToDo}
            autoFocus={true}
          />
        </div>
      </div>
    );
  }
}
