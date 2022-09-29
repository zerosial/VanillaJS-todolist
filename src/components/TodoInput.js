import CheckIdError from './CheckError.js';

export default function TodoInput(data, $target) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  CheckIdError($target);

  $target.innerHTML = `
    <form class="m-2" id="input-form">
	    <input class="border-2 border-black rounded-sm" id="todo-input" type="text" placeholder="할일을 입력해 주세요" autofocus />
	    <button class="ml-4 w-16 h-8 border-4 border-blue-600 bg-blue-300 rounded-md" type="submit">입력</button>
    </form>
    <button class="border-4 mt-2 w-16 h-8 border-red-600 bg-red-300 rounded-md" id="clear">클리어</button>
  `;

  const $todoForm = document.querySelector('#input-form');
  const $todoInput = document.querySelector('#todo-input');
  const $todoClear = document.querySelector('#clear');

  $todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    data.add($todoInput.value);
    $todoInput.value = '';
  });

  $todoClear.addEventListener('click', (event) => {
    localStorage.clear();
    data.reRender();
  });
}
