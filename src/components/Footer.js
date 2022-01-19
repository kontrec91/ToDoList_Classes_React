import React from "react";
import { ToDoContext } from "./CreateContextApp.js";

export class Footer extends React.Component {
  static contextType = ToDoContext;

  showCountItems = () => {
    const arr = this.context.context.todosArray.filter((item) => item.isChecked !== true);
    return arr.length;
  };

  showClearCompletedButton = () => {
    const isCompleted = this.context.context.todosArray.some((item) => item.isChecked === true);
    return isCompleted;
  };

  handleSetFilterType = (value) => {
    this.context.setContext({
      filterType: value,
    });
  };

  handlerClearCompleted = (event) => {
      const fileredArr = this.context.context.todosArray.filter((item) => item.isChecked === false);

      this.context.setContext({
        todosArray: fileredArr,
        filterType: "All",
      });
  };
  

  render() {
    const { todosArray } = this.context.context;
    return (
      <div className={todosArray.length ? "footer" : "footer hidden"}>
        <span className="number-items-left">{this.showCountItems()} items left</span>
        <button onClick={()=> this.handleSetFilterType('All')} className="all-button active">
          All
        </button>
        <button onClick={()=>this.handleSetFilterType('Active')} className="active-button">
          Active
        </button>
        <button onClick={()=>this.handleSetFilterType('Completed')} className="completed-button">
          Completed
        </button>
        <button
          onClick={this.handlerClearCompleted}
          className={this.showClearCompletedButton() ? "clear-completed-button" : "clear-completed-button hidden"}
        >
          Clear completed
        </button>
      </div>
    );
  }
}
