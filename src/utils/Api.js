(async function () {
  const $target = document.querySelector(".App");

  const username = "roto";

  async function fetchData() {
    const res = await fetch(`https://todo-api.roto.codes/${username}`);
    return await res.json();
  }

  const data = await fetchData();

  const todoList = new TodoList({
    $target,
    initialState: data,
    onClick: async function (id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: "PUT",
      });

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
    onRemove: async function (id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: "DELETE",
      });

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
  });

  document
    .querySelector("#add-todo-button")
    .addEventListener("click", async function () {
      const todoText = document.querySelector("#todo-input").value;

      if (todoText.length > 0) {
        // 데이터 추가하기
        await fetch(`https://todo-api.roto.codes/${username}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: todoText,
          }),
        });

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await fetchData();
        todoList.setState(updatedData);
      }
    });
})();
