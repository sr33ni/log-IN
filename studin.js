var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["regNo"] = document.getElementById("regNo").value;
    formData["passWord"] = document.getElementById("passWord").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("dataList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.regNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.passWord;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("regNo").value = "";
    document.getElementById("passWord").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("regNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("passWord").value = selectedRow.cells[1].innerHTML;
 
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.regNo;
    selectedRow.cells[1].innerHTML = formData.passWord;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("dataList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("regNo").value == "") {
        isValid = false;
        document.getElementById("regNoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("regNoValidationError").classList.contains("hide"))
            document.getElementById("regNoValidationError").classList.add("hide");
    }
    return isValid;
}