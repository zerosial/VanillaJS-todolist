const TODOLIST_API = "https://todo-api.roto.codes/";

export default async function TodoApi() {
  try {
    this.getData = async ({ userName }) => {
      const res = await fetch(`https://todo-api.roto.codes/${userName}`);
      return await res.json();
    };

    this.postData = async ({ todoText, userName }) => {
      await fetch(`https://todo-api.roto.codes/${userName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: todoText,
        }),
      });
    };

    this.putData = async ({ userName, id }) => {
      await fetch(`https://todo-api.roto.codes/${userName}/${id}/toggle`, {
        method: "PUT",
      });
    };

    this.deleteData = async ({ userName, id }) => {
      await fetch(`https://todo-api.roto.codes/${userName}/${id}`, {
        method: "DELETE",
      });
    };
  } catch (err) {
    throw new Error("API 통신에 에러가 발생했습니다.", err);
  }
}
