export default function LocaleData() {
  this.get = (data) => {
    try {
      const list = localStorage.getItem(data);
      return list;
    } catch (e) {
      console.log(`parse 에러가 발생했습니다.${e}`);
    }
  };

  this.set = (data) => {
    try {
      if (localStorage.getItem(data)) {
        localStorage.removeItem(data);
      } else {
        localStorage.setItem(data, true);
      }
    } catch (e) {
      console.log(`todolist 추가에 에러가 발생했습니다. ${e}`);
    }
  };
}
