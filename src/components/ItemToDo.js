import React from "react";
import { ChangeInput } from "./ChangeInput";
import { ToDoContext } from "./CreateContextApp.js";

export class ItemToDo extends React.Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
      isEdit: false,
    };
  }

  static contextType = ToDoContext;

  checkboxHandler = () => {
    const newArray = this.context.context.todosArray.map((todo) => {
      if (todo.id === this.props.item.id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      } else {
        return todo;
      }
    });
    this.context.setContext({
      todosArray: newArray,
      isAllCompleted: !newArray.find((item) => !item.isChecked),
    });
    this.state.isChecked === false ? this.setState({ isChecked: true }) : this.setState({ isChecked: false });
  };

  handleDoubleClick = () => {
    this.state.isEdit === false ? this.setState({ isEdit: true }) : this.setState({ isEdit: false });
  };

  handleOnBlur = (event) => {
    if (event.target.value !== "") {
      const newArr = this.context.context.todosArray.map((todo) => {
        if (todo.id === this.props.item.id) {
          return {
            ...todo,
            value: event.target.value,
          };
        } else {
          return todo;
        }
      });

      this.context.setContext({
        todosArray: newArr,
      });
    }
    this.setState({ isEdit: false });
  };

  removeItem = () => {
    const newArray = this.context.context.todosArray.filter((item) => item.id !== this.props.item.id);
    this.context.setContext({
      todosArray: newArray,
      isAllCompleted: !newArray.find((item) => !item.isChecked),
    });
  };

  render() {
    const { removeItem } = this.context;
    return (
      <li className="item-text">
        {this.state.isEdit === true ? (
          <ChangeInput handleOnBlur={this.handleOnBlur} value={this.props.item.value} />
        ) : (
          <>
            <input
              checked={this.props.item.isChecked}
              onChange={this.checkboxHandler}
              type="checkbox"
              className="item-checkbox"
            />
            <label
              className={this.props.item.isChecked ? "check list-item-li-done" : "check"}
              htmlFor={this.props.item.id}
              onClick={this.checkboxHandler}
            ></label>
            <span
              className={this.props.item.isChecked ? "text-li list-item-label-done list-item-li-done" : "text-li"}
              onDoubleClick={this.handleDoubleClick}
            >
              {this.props.item.value}
            </span>
            <span
              className="delete"
              onClick={this.removeItem}
            >
              ×
            </span>
          </>
        )}
      </li>
    );
  }
}
