export default function LocaleData() {
  this.get = () => {
    try {
      const data = localStorage.user ? JSON.parse(localStorage.user) : [];
      return data;
    } catch (e) {
      console.log(`parse 에러가 발생했습니다.${e}`);
    }
  };

  this.add = (inputData) => {
    try {
      localStorage.user = JSON.stringify([
        ...this.get(),
        {
          text: inputData,
          isCompleted: false,
        },
      ]);
      this.reRender();
    } catch (e) {
      console.log(`todolist 추가에 에러가 발생했습니다. ${e}`);
    }
  };

  this.set = (data) => {
    try {
      localStorage.user = JSON.stringify(data);
      this.reRender();
    } catch (e) {
      console.log(`todolist 추가에 에러가 발생했습니다. ${e}`);
    }
  };

  this.reRender = () => {
    document.dispatchEvent(new CustomEvent('reRender', {}));
  };
}
