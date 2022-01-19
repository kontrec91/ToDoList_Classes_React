import React from "react";
import { ItemToDo } from "./ItemToDo";
import { ToDoContext } from "./CreateContextApp.js";

export class TodoList extends React.Component {
  static contextType = ToDoContext;

  filteredArray = () => {
    const { filterType, todosArray } = this.context.context;
    switch (filterType) {
      case "Active":
        return todosArray.filter((item) => item.isChecked === false);
      case "Completed":
        return todosArray.filter((item) => item.isChecked === true);
      default:
        return todosArray;
    }
  };

  render() {
    const {  todosArray } = this.context.context;
    return (
      <div className="main">
        <ul className="todoList">
          {this.filteredArray().map((item) => {
            return (
              <ItemToDo
                key={item.id}
                item={item}
              >
                {item.value}
              </ItemToDo>
            );
          })}
        </ul>
      </div>
    );
  }
}
