document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");

  function addTodo() {
    if (title.value === "" || description.value === "") {
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are required";
      console.error("Title and description are required");
      return;
    } else {
      alert.classList.add("d-none");
      const row = table.insertRow();
      row.innerHTML = `
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td class="text-center">
        <input type="checkbox" />
      </td>
      <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
        <button class="btn btn-danger mb-1 ml-1">
          <i class="fa fa-trash"></i>
        </button>
      </td>
      `;
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.innerHTML = "<i class='fa fa-trash'></i>";
      console.log(row.children);
      console.log("Melo");
    }
  }

  btn.onclick = addTodo;
});

/*
btn.addEventListener("click", function(){
    console.log("click")
})
*/
