function addTask() {
    var titleInput = document.getElementById('taskTitle');
    var descriptionInput = document.getElementById('textField');

    var title = titleInput.value;
    var description = descriptionInput.value;

    if (title === "" || description === "") {
        alert('Preencha todos os campos')
        return;
    }

    var table = document.getElementById("taskList")
    var newRow = table.insertRow();
    var cellTitle = newRow.insertCell(0);
    var cellDescription = newRow.insertCell(1);
    var cellAction = newRow.insertCell(2);

    cellTitle.innerHTML = title;
    cellDescription.innerHTML = description;
    cellAction.innerHTML = '<button class="delete-btn" onclick="deleteTask(this)">Excluir</button>';

    titleInput.value = "";
    descriptionInput.value = "";


}


function deleteTask(row) {
    var index = row.parentNode.parentNode.rowIndex;
    document.getElementById("taskList").deleteRow(index);
  }