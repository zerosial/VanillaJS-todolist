import { GetData, DeleteData, PutData } from "../utils/TodoApi.js";

export default function TodoList({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  const buttonStyle =
    "ml-28 border-4 w-12 border-red-700 rounded-md font-black text-lg bg-red-400";
  const liStyle = "font-black border-2 border-red-400 rounded-md w-64 h-10 p-2";

  this.user = userName;

  this.render = async () => {
    $target.innerHTML = `<li class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-64 h-10 p-2 animate-pulse"></li><button class="ml-28 border-4 w-12 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button>
    <li class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-64 h-10 p-2 animate-pulse"></li><button class="ml-28 border-4 w-12 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button>
    <li class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-64 h-10 p-2 animate-pulse"></li><button class="ml-28 border-4 w-12 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button>`;
    const data = await GetData({ userName: this.user });
    console.log(this.user, data);
    const items = data
      .map(
        (data, i) =>
          `${
            data.isCompleted
              ? `<li class="${liStyle} line-through" id="${data._id}">${data.content}</li><button class="${buttonStyle}" id="${data._id}">x</button>`
              : `<li class="${liStyle}" id="${data._id}">${data.content}</li><button class="${buttonStyle}" id="${data._id}">x</button>`
          }`
      )
      .join("");
    $target.innerHTML = `${items}`;
  };

  $target.addEventListener("click", async (e) => {
    document.dispatchEvent(
      new CustomEvent("reRender", {
        detail: {
          todoUsers: this.user,
        },
      })
    );

    if (e.target && e.target.nodeName === "LI") {
      await PutData({
        userName: this.user,
        id: e.target.id,
      });
    }

    if (e.target && e.target.nodeName === "BUTTON") {
      await DeleteData({
        userName: this.user,
        id: e.target.id,
      });
    }
  });

  this.setState = (user) => {
    this.user = user;
    this.render();
  };
}
