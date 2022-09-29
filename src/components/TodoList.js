import CheckIdError from './CheckError.js';

export default function TodoList(data, $target) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  CheckIdError($target);

  const buttonStyle =
    'ml-28 border-4 w-12 border-red-700 bg-red-400 rounded-md font-black text-lg';
  const liStyle = 'font-black border-2 border-red-400 rounded-md w-64 h-10 p-2';
  const ulStyle =
    'grid grid-cols-2 justify-center content-start w-80 h-[40rem] gap-2';

  this.data = data.get();

  this.render = () => {
    const items = this.data
      .map(
        (data, i) =>
          `${
            data.isCompleted
              ? `<li class="${liStyle} line-through" id="${i}">${data.text}</li><button class="${buttonStyle}" id="${i}">x</button>`
              : `<li class="${liStyle}" id="${i}">${data.text}</li><button class="${buttonStyle}" id="${i}">x</button>`
          }`
      )
      .join('');
    $target.innerHTML = `<ul class="${ulStyle}">${items}</ul>`;
  };

  $target.addEventListener('click', function (e) {
    this.data = data.get();
    if (e.target && e.target.nodeName === 'LI') {
      Object.values(this.data)[e.target.id].isCompleted = !Object.values(
        this.data
      )[e.target.id].isCompleted;
    }

    if (e.target && e.target.nodeName === 'BUTTON') {
      this.data.splice(e.target.id, 1);
    }

    data.set(this.data);
  });

  this.setState = (data) => {
    this.data = data.get();
    this.render();
  };
}
