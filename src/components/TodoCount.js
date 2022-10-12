import { GetData } from '../utils/TodoApi.js';

export default function TodoCount({ userName, $target }) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  this.user = userName;

  this.render = async () => {
    $target.innerHTML = `<div class="ml-4 font-black animate-pulse text-center rounded-lg bg-gray-400 border-2 border-gray-300">할일 로딩중</div>`;
    const data = await GetData({ userName: this.user });
    $target.innerHTML = `<span class="font-black ml-4 text-center">해야할 일의 수는 : ${
      data.filter((e) => !e.isCompleted).length
    } , 완료한 일의 수는 : ${data.filter((e) => e.isCompleted).length}</span>`;
  };

  this.setState = (user) => {
    this.user = user;
    this.render();
  };
}
