export default function LocaleData() {
  this.get = (data) => {
    try {
      const list = localStorage.getItem(data);
      return list;
    } catch (e) {
      throw new Error(`로컬 스토리지에서 에러가 발생했습니다. ${e}`);
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
      throw new Error(`로컬 스토리지에서 에러가 발생했습니다. ${e}`);
    }
  };
}
