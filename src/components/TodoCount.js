import CheckIdError from './CheckError.js';

export default function TodoCount(data, $target) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  CheckIdError($target);

  this.data = data.get();

  this.render = () => {
    $target.innerHTML = `<a class="font-black">해야할 일의 수는 : ${
      this.data.filter((e) => !e.isCompleted).length
    } , 완료한 일의 수는 : ${
      this.data.filter((e) => e.isCompleted).length
    }</a>`;
  };

  this.setState = (data) => {
    this.data = data.get();
    this.render();
  };
}
