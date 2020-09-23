<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form id='formSubmit'>
		<label>Email</label><input type="text" name="email" id="email"><br>
		<label>Password</label><input type="text" name="password" id="password"><br>
		<button type="submit">SEND</button> <button style="display: none;" type="submit" id="update" >UPDATE</button>
	</form>
	<table border="1" id="dataList">
		<thead>
			<tr>
				<th>Email</th>
				<th>Password</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody
		></tbody>
	</table>
	<script src="table1.js"></script>
</body>
</html>