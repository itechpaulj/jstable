const formSubmit = document.querySelector('#formSubmit');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const updateBtn = document.querySelector('#update');
let selectedRow = null;
const readFormData = () =>{
	let formData = {};
	formData['email'] = email.value;
	formData['password'] = password.value;
	return formData;
}

const insertFormData = (data) =>{
	let table = document.querySelector('#dataList');
	let tbody = table.querySelector('tbody');
	let newRow = tbody.insertRow(tbody.length);

	let cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.email;

	let cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.password;

	let cell3 = newRow.insertCell(2);
	cell3.innerHTML = `<a onclick = 'editFormData(this)' href='#'>EDIT</a> | <a href='#'>DELETE</a> `;
}

const editFormData = (td) => {
	selectedRow = td.parentElement.parentElement;
	//console.log(selectedRow)
	email.value = selectedRow.cells[0].innerHTML;
	password.value = selectedRow.cells[1].innerHTML;
}

const updateFormData = (formData) => {
	selectedRow.cells[0].innerHTML = formData.email;
	selectedRow.cells[1].innerHTML = formData.password;
}


const resetForm = () =>{
	email.value = ""
	password.value = ""
}

formSubmit.addEventListener('submit',(e)=>{
	e.preventDefault();
	//console.log('test');

	let showBtn = updateBtn.style.display = 'inline';
	let FormData = readFormData();
	if(selectedRow == null)
	{
	insertFormData(FormData);
	}
	resetForm();
});

updateBtn.addEventListener('click' , (e)=>{
		e.preventDefault();
		let FormData = readFormData();
	if(selectedRow == null)
	{
	insertFormData(FormData);
	}
	else{
		updateFormData(FormData);
	}

})