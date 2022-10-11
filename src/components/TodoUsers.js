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
          `<li class="text-center border-2 border-red-500 bg-orange-200 rounded-lg w-52">${data}</li>`
      )
      .slice(0, 15)
      .join("");
    $target.innerHTML = `<div class="absolute flex w-72 ml-20 pl-4 h-[36rem] border-2 border-red-500 bg-orange-200 rounded-lg">
    <ul class="grid grid-flow-row-dense items-start w-32 mt-1">
    ${items}
    </ul>
  </div>`;
  };

  $target.addEventListener("click", async (e) => {
    if (e.target && e.target.nodeName === "LI") {
      document.dispatchEvent(
        new CustomEvent("reRender", {
          detail: {
            todoUsers: e.target.innerHTML,
          },
        })
      );
    }
  });

  this.setState = async (user) => {
    this.user = user;
    this.render();
  };
}
