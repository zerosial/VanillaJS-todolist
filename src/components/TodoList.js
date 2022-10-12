import { GetData, DeleteData, PutData } from "../utils/TodoApi.js";

export default function TodoList({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  const buttonStyle =
    "ml-7 border-4 w-10 border-red-700 rounded-md font-black text-lg bg-red-400";
  const liStyle =
    "font-black border-2 border-red-400 rounded-md w-56 h-10 p-2 inline-block";

  this.user = userName;

  this.render = async () => {
    $target.innerHTML = `
    <div>완료 리스트</div>
    <div class="h-[19rem] border-2 border-red-700 rounded-lg">
    <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
    <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
    <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
    <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
    </div>
    <div>미완료 리스트</div>
    <div class="h-[19rem] border-2 border-red-700 rounded-lg">
      <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
      <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
      <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
      <li class="m-1"><span class="font-black border-2 border-gray-300 bg-gray-400 rounded-md w-56 h-10 p-2 animate-pulse inline-block">로딩중</span><button class="ml-8 border-4 w-10 border-gray-300 bg-gray-400 rounded-md font-black text-lg animate-pulse">x</button></li>
    </div>
    `;
    const data = await GetData({ userName: this.user });
    let doneTodo = "";
    let doingTodo = "";
    data.map(
      (data) =>
        `${
          data.isCompleted
            ? (doneTodo += `<li class="m-1"><span class="${liStyle}" id="${data._id}">${data.content}</span><button class="${buttonStyle}" id="${data._id}">x</button></li>`)
            : (doingTodo += `<li class="m-1"><span class="${liStyle}" id="${data._id}">${data.content}</span><button class="${buttonStyle}" id="${data._id}">x</button></li>`)
        }`
    );

    $target.innerHTML = `
    <div>완료 리스트</div>
    <div class="h-[19rem] border-2 border-red-700 rounded-lg w-[19rem]">${doneTodo}</div>
    <div>미완료 리스트</div>
    <div class="h-[19rem] border-2 border-red-700 rounded-lg w-[19rem]">${doingTodo}</div>
    `;
  };

  $target.addEventListener("click", async (e) => {
    console.log(e.target, e.target.nodeName);
    if (e.target && e.target.nodeName === "SPAN") {
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
    this.render();
  };
}
