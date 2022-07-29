const addTodo = () => {
  const input = document.getElementById("todo-name").value;
  document.getElementById("todo-name").value = "";
  addIncompleteList(input);
};

const deleteList = (elem) => {
  document.getElementById("incomplete-list").removeChild(elem);
};

const addIncompleteList = (text) => {
  // div要素の追加
  const div = document.createElement("div");
  div.classList.add("list-row");

  // list要素の追加
  const li = document.createElement("li");
  li.innerText = text;

  // 完了button要素の追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const todoName = addTarget.firstElementChild.innerText;

    // div要素の追加
    const div = document.createElement("div");
    div.classList.add("list-row");

    // list要素の追加
    const li = document.createElement("li");
    li.innerText = todoName;

    // 戻すbutton要素の追加
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const todoName = returnButton.parentNode.firstElementChild.innerText;
      addIncompleteList(todoName);
    });

    div.appendChild(li);
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(div);
  });

  // 削除button要素の追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", addTodo);
document.getElementById("todo-name").addEventListener("keydown", (e) => {
  if(!e.isComposing && e.key === "Enter") {
    console.log("発火してるよ");
    addTodo();
  }
  console.log("return")
  return;
})
