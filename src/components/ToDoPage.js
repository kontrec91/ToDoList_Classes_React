import React from "react";

import { TodoForm } from "./TodoForm.js";
import { Footer } from "./Footer.js";
import { TodoList } from "./TodoList.js";
import { ToDoContext } from "./CreateContextApp.js";


export default class ToDoPage extends React.Component {
    static contextType = ToDoContext;//заимпортить-заэкспортить

  render() {
    console.log('context: ', this.context.context)

    return (
      <section className="dotoApp">
          <TodoForm />
          <TodoList />
          <Footer />
      </section>
    );
  }
}

