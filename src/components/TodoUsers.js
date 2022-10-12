import { GetUser } from "../utils/TodoApi.js";

export default function TodoUsers({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  this.user = userName;

  this.render = async () => {
    const data = await GetUser();
    const items = data
      .map(
        (data) =>
          `<li class="flex justify-between border-2 pl-2 pr-2 border-red-500 bg-orange-200 rounded-lg w-64">
            <div id="${data}">
             ${data}
            </div>
            <div id="notfavorite">
              🤍
            </div>
          </li>`
      )
      .slice(0, 15)
      .join("");
    $target.innerHTML = `<div class="absolute flex w-72 ml-20 pl-4 h-[36rem] border-2 border-red-500 bg-orange-200 rounded-lg">
    <ul class="grid grid-flow-row-dense items-start mt-1">
    <li class="w-72">
      <form class="m-1 w-72" id="user-form">
        <label for="user-name">이름</label>
        <input class="border-2 border-black rounded-sm w-40" id="user-name" type="text" placeholder="이름을 입력해주세요"/>
        <button class="ml-2 w-10 h-8 border-4 border-blue-600 bg-blue-300 rounded-md">입력</button>
      </form>
    </li>
    ${items}
    </ul>
  </div>`;
  };

  $target.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      e.target &&
      e.target.nodeName === "FORM" &&
      e.target.id === "user-form"
    ) {
      document.dispatchEvent(
        new CustomEvent("reRender", {
          detail: {
            todoUsers: document.querySelector("#user-name").value,
          },
        })
      );
    }
  });

  $target.addEventListener("click", async (e) => {
    if (
      e.target &&
      e.target.nodeName === "DIV" &&
      e.target.id.indexOf("favorite") === -1
    ) {
      console.log(e.target.innerHTML);
      document.dispatchEvent(
        new CustomEvent("reRender", {
          detail: {
            todoUsers: e.target.innerHTML,
          },
        })
      );
    }

    if (
      e.target &&
      e.target.nodeName === "DIV" &&
      e.target.id.indexOf("favorite") !== -1
    ) {
      console.log(e.target.id);
      if (e.target.id === "notfavorite") {
        e.target.innerHTML = "❤️";
        e.target.id = "favorite";
      } else if (e.target.id === "favorite") {
        e.target.innerHTML = "🤍";
        e.target.id = "notfavorite";
      }
    }
  });

  this.setState = async (user) => {
    this.user = user;
    this.render();
  };
}
