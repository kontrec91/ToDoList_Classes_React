import "./App.css";
import "./css/style.css";
import React from "react";

import { ToDoContext } from "./components/CreateContextApp";

import ToDoPage from "./components/ToDoPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosArray: [],
      filterType: "All",
      isAllCompleted: false,
    };
  }

  static contextType = ToDoContext;

  setContext = (value) => {//в value должен приходить объект с названием поля и значением, которым мы хотим переприсвоить
    this.setState({
      ...value
    });
  };

  render() {
    return (
      <section className="dotoApp">
        <ToDoContext.Provider
          value={{
            context: this.state,
            setContext: this.setContext,
          }}
        >
          <ToDoPage />
        </ToDoContext.Provider>
      </section>
    );
  }
}
// App.contextType = ToDoContext;
