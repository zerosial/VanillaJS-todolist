import CheckIdError from "../utils/CheckError.js";
import { GetData, DeleteData, PutData } from "../utils/TodoApi.js";

export default function TodoCount(data, $target) {
  if (!new.target) {
    throw new Error("생성자 함수 new가 생략되었습니다.");
  }

  CheckIdError($target);

  this.data = GetData({ userName: "brian" });

  this.render = async () => {
    const data = await GetData({ userName: "brian" });
    $target.innerHTML = `<span class="font-black">해야할 일의 수는 : ${
      data.filter((e) => !e.isCompleted).length
    } , 완료한 일의 수는 : ${data.filter((e) => e.isCompleted).length}</span>`;
  };

  this.setState = async (data) => {
    this.data = await GetData({ userName: "brian" });
    this.render();
  };
}
