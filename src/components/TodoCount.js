import { GetData } from "../utils/TodoApi.js";

export default function TodoCount({ userName, $target }) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  this.user = userName;

  this.render = async () => {
    const data = await GetData({ userName: this.user });
    console.log("[TodoCount-render] this.user :", this.user);
    console.log("[TodoCount-render] data :", data);
    $target.innerHTML = `<span class="font-black">해야할 일의 수는 : ${
      data.filter((e) => !e.isCompleted).length
    } , 완료한 일의 수는 : ${data.filter((e) => e.isCompleted).length}</span>`;
  };

  this.setState = (user) => {
    this.user = user;
    this.render();
  };
}
