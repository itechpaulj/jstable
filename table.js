const submitBtn = document.querySelector('#submitBtn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let selectedRow = null;
const readFormData = () => {
	let formData = {};
	formData['email'] = email.value;
	formData['password'] = password.value;
	return formData;
};

const insertFormData = (data) => {
	let table = document.querySelector('#dataList');
	let tbody = table.querySelector('tbody');
	let newRow = tbody.insertRow(tbody.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.email;

	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.password;

	cell3 = newRow.insertCell(2);
	cell3.innerHTML = `<a onclick='editFormData(this)' href='#'>EDIT</a> 
	| <a onclick='deleteData(this)' href='#'>DELETE</a> `;
};

const editFormData = (td) => {
	selectedRow = td.parentElement.parentElement;
	//console.log(selectedRow);
	email.value = selectedRow.cells[0].innerHTML;
	password.value = selectedRow.cells[1].innerHTML;
}

const updateData = (formData) =>{
	selectedRow.cells[0].innerHTML = formData.email;
	selectedRow.cells[1].innerHTML = formData.password;
}

const deleteData = (td) =>{
	if(confirm('Are You Sure?')){
	row = td.parentElement.parentElement;
	document.querySelector('#dataList').deleteRow(row.rowIndex);
	// reset input form
	email.value = ""
	password.value = ""
	}
}


// validate input

	const resetForm  = () => {
		email.value = ""
		password.value = ""
	}
submitBtn.addEventListener('submit',(e)=>{
	e.preventDefault();
	//console.log('test')
		let formData = readFormData();
		//console.log(formData);
		if(selectedRow == null){
		insertFormData(formData);
		//console.log(insertData);
		}
		else{
		updateData(formData);
		}
		// reset input form
		// reset input form

	resetForm();
});