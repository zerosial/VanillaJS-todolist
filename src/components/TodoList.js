import CheckIdError from "../utils/CheckError.js";
import { GetData, DeleteData, PutData } from "../utils/TodoApi.js";

export default function TodoList(data, $target) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  CheckIdError($target);

  const buttonStyle =
    "ml-28 border-4 w-12 border-red-700 bg-red-400 rounded-md font-black text-lg";
  const liStyle = "font-black border-2 border-red-400 rounded-md w-64 h-10 p-2";
  const ulStyle =
    "grid grid-cols-2 justify-center content-start w-80 h-[40rem] gap-2";

  this.data = GetData({ userName: "brian" });

  this.render = async () => {
    const data = await GetData({ userName: "brian" });
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
    $target.innerHTML = `<ul class="${ulStyle}">${items}</ul>`;
  };

  $target.addEventListener("click", async (e) => {
    const data = await GetData({ userName: "brian" });
    console.log(data, e.target.id);
    if (e.target && e.target.nodeName === "LI") {
      PutData({
        userName: "brian",
        id: e.target.id,
      });
    }

    if (e.target && e.target.nodeName === "BUTTON") {
      DeleteData({
        userName: "brian",
        id: e.target.id,
      });
    }

    document.dispatchEvent(new Event("reRender"));
  });

  this.setState = async (data) => {
    this.data = await GetData({ userName: "brian" });
    this.render();
  };
}
