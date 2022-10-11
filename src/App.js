import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoCount from "./components/TodoCount.js";
import TodoUsers from "./components/TodoUsers.js";

export default function App($target) {
  const userName = "brian";
  const buttonStyle =
    "ml-28 border-4 w-12 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse";
  const liStyle =
    "font-black border-2 border-gray-300 bg-gray-400 rounded-md w-64 h-10 p-2 animate-pulse";

  $target.innerHTML = `
  <div class="pl-2 text-2xl text-amber-900 font-black" id="username">사용자 : ${userName}</div>
  <header class="grid grid-flow-col" id="todoInput"></header>
  <main class="flex">
    <ul id="todoList" class="grid grid-cols-2 justify-center content-start w-80 h-[40rem] gap-2">
      <li class="${liStyle}"></li><button class="${buttonStyle}">x</button>
      <li class="${liStyle}"></li><button class="${buttonStyle}">x</button>
      <li class="${liStyle}"></li><button class="${buttonStyle}">x</button>
    </ul>
    <div id="todousers"></div>
  </main>
  <footer id="todoCount"> 
    <div class="ml-4 font-black animate-pulse text-center w-72 rounded-lg bg-gray-400 border-2 border-gray-300">할일 로딩중</div>
  </footer>
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

  todoList.render();
  todoCount.render();
  todoUsers.render();

  document.addEventListener("reRender", (e) => {
    document.querySelector(
      "#username"
    ).innerHTML = `<div id="username">사용자 : ${e.detail.todoUsers}</div>`;
    todoInput.setState(e.detail.todoUsers);
    todoList.setState(e.detail.todoUsers);
    todoCount.setState(e.detail.todoUsers);
  });
}
