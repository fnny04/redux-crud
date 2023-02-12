import React from "react";
import Filter from "./components/Filter";
import AddTodo from "./container/AddTodo";
import VisibleTodoList from "./container/VisibleTodoList";

function App() {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Filter />
    </>
  );
}

export default App;
