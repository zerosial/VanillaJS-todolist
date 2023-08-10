import { GetUser } from "../utils/TodoApi.js";
import LocaleData from "../utils/LocaleData.js";

export default function TodoUsers({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  this.user = userName;
  this.pages = 0;
  this.max;
  this.select = "all";

  const localeData = new LocaleData();

  this.render = async () => {
    const data = await GetUser();
    let items;
    if (this.select === "all") {
      this.max = data.length;
      items = data
        .map(
          (data) =>
            `<li class="flex justify-between border-2 pl-2 pr-2 border-red-500 bg-orange-200 rounded-lg w-[22rem] id="userlist">
            <div id="${data}" class="w-80 inline-block text-center">
              ${data}
            </div>
            ${
              localeData.get(data)
                ? `<div class="${data}" id="favorite">❤️</div>`
                : `<div class="${data}" id="notfavorite">🤍</div>`
            }
          </li>`
        )
        .slice(this.pages, this.pages + 13)
        .join("");
    }
    if (this.select === "likes") {
      this.max = data.length;
      let arr = [];
      for (var i = 0; i < localStorage.length; i++) {
        arr.push(localStorage.key(i));
      }
      this.max = localStorage.length;

      items = arr
        .map(
          (data) =>
            `<li class="flex justify-between border-2 pl-2 pr-2 border-red-500 bg-orange-200 rounded-lg w-[22rem] id="userlist">
          <div id="${data}" class="w-80 inline-block text-center">${data}</div>
          <div class="${data}" id="favorite">❤️</div>
        </li>`
        )
        .slice(this.pages, this.pages + 13)
        .join("");
    }

    $target.innerHTML = `<div class="absolute flex w-96 ml-20 pl-4 h-[36rem] border-2 border-red-500 bg-orange-200 rounded-lg">
        <ul class="grid grid-flow-row-dense items-start mt-1">
        <li class="w-96 flex">
          <form class="m-1" id="user-form">
            <label for="user-name">이름</label>
            <input class="border-2 border-black rounded-sm w-40" id="user-name" type="text" placeholder="이름을 입력해주세요"/>
            <button class="w-10 ml-2 mr-6 h-8 border-4 border-blue-600 bg-blue-300 rounded-md">입력</button>
            <select id="select" class="rounded-l">
              <option value='' selected>-선택-</option>
              <option value='all'>전체</option>
              <option value='likes'>좋아요</option>
          </select>
          </form>
        </li>
        ${items}
        <li class="w-96 flex justify-between pr-8">
          <button class="text-2xl" id="left">⬅</button>
          <div class="text-2xl font-black">${
            parseInt(this.pages / 13) + 1
          }</div>
          <button class="text-2xl" id="right">➡</button>
        </li>
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

  $target.addEventListener("change", (e) => {
    e.preventDefault();
    if (
      e.target &&
      e.target.nodeName === "SELECT" &&
      e.target.id === "select"
    ) {
      this.select = e.target.value;
      this.pages = 0;
      this.render();
    }
  });

  $target.addEventListener("click", async (e) => {
    if (
      e.target &&
      e.target.nodeName === "DIV" &&
      e.target.id.indexOf("favorite") === -1
    ) {
      document.dispatchEvent(
        new CustomEvent("reRender", {
          detail: {
            todoUsers: e.target.id,
          },
        })
      );
    }

    if (
      e.target &&
      e.target.nodeName === "DIV" &&
      e.target.id.indexOf("favorite") !== -1
    ) {
      localeData.set(e.target.className);

      if (e.target.id === "notfavorite") {
        e.target.innerHTML = "❤️";
        e.target.id = "favorite";
      } else if (e.target.id === "favorite") {
        e.target.innerHTML = "🤍";
        e.target.id = "notfavorite";
      }
      this.render();
    }

    if (e.target && e.target.nodeName === "BUTTON" && e.target.id === "left") {
      this.pages = this.pages - 13;
      if (this.pages < 0) this.pages = 0;
      this.render();
    }

    if (e.target && e.target.nodeName === "BUTTON" && e.target.id === "right") {
      this.pages = this.pages + 13;
      if (this.pages >= this.max) this.pages = this.max - 13;
      this.render();
    }
  });

  this.setState = async (user) => {
    this.user = user;
    this.render();
  };
}
