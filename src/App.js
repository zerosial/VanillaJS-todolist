import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import TodoUsers from "./components/TodoUsers.js";

export default function App($target) {
  $target.innerHTML = `
  <header class="grid grid-flow-col" id="todoInput"></header>
  <main class="flex">
    <div id="todoList"></div>
    <div id="todousers"></div>
  </main>
  <footer id="todoCount"></footer>
  `;

  const todoList = new TodoList({
    userName: "brian",
    $target: document.querySelector("#todoList"),
  });
  const todoCount = new TodoCount({
    userName: "brian",
    $target: document.querySelector("#todoCount"),
  });
  const todoUsers = new TodoUsers({
    userName: "brian",
    $target: document.querySelector("#todousers"),
  });

  const todoInput = new TodoInput({
    userName: "brian",
    $target: document.querySelector("#todoInput"),
  });

  todoInput.render();
  todoList.render();
  todoCount.render();
  todoUsers.render();

  document.addEventListener("reRender", (e) => {
    console.log("rerender", e.detail.todoUsers);
    todoList.setState(e.detail.todoUsers);
    todoCount.setState(e.detail.todoUsers);
    todoInput.setState(e.detail.todoUsers);
  });
}
