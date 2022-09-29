import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import LocaleData from './utils/LocaleData.js';

export default function App($target) {
  $target.innerHTML = `
  <header class="grid grid-flow-col" id="todoInput"></header>
  <main id="todoList"></main>
  <footer id="todoCount"></footer>
  `;

  const $todoInput = document.querySelector('#todoInput');
  const $todoList = document.querySelector('#todoList');
  const $todoCount = document.querySelector('#todoCount');

  const todoData = new LocaleData();
  const todoList = new TodoList(todoData, $todoList);
  const todoCount = new TodoCount(todoData, $todoCount);
  new TodoInput(todoData, $todoInput);

  todoList.render();
  todoCount.render();

  document.addEventListener('reRender', () => {
    todoList.setState(todoData);
    todoCount.setState(todoData);
  });
}
