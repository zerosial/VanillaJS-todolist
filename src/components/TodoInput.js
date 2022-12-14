import { PostData, DeleteAllData } from "../utils/TodoApi.js";

export default function TodoInput({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  this.user = userName;

  $target.innerHTML = `
    <form class="m-2" id="input-form">
      <label for="todo-input">Todo</label>
	    <input class="border-2 border-black rounded-sm w-40" id="todo-input" type="text" placeholder="할일을 입력해 주세요" autofocus />
	    <button class="ml-2 w-12 h-8 border-4 border-blue-600 bg-blue-300 rounded-md">입력</button>
    </form>
    <button class="border-4 mt-2 w-16 h-8 border-red-600 bg-red-300 rounded-md" id="clear">클리어</button>
  `;

  const $todoForm = document.querySelector("#input-form");
  const $todoInput = document.querySelector("#todo-input");
  const $todoClear = document.querySelector("#clear");

  $todoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    await PostData({
      todoText: $todoInput.value,
      userName: this.user,
    });

    $todoInput.value = "";
    document.dispatchEvent(
      new CustomEvent("reRender", {
        detail: {
          todoUsers: this.user,
        },
      })
    );
  });

  $todoClear.addEventListener("click", async () => {
    await DeleteAllData({ userName: this.user });

    document.dispatchEvent(
      new CustomEvent("reRender", {
        detail: {
          todoUsers: this.user,
        },
      })
    );
  });

  this.setState = (user) => {
    this.user = user;
  };
}
