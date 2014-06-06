<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c' %>

<c:url value="/users/" var="recordsUrl"/>
<c:url value="/users/create" var="addUrl"/>
<c:url value="/users/update" var="editUrl"/>
<c:url value="/users/delete" var="deleteUrl"/>

<html>
<head>
	<link rel='stylesheet' type='text/css' media='screen' href='<c:url value="/resources/css/style.css"/>'/>

	<title>User Admin</title>
	
</head>

<body>
	<h1 id='banner'>User Admin</h1>
	<hr/>
	
	<table id='tableUsers'>
		<caption></caption>
		<thead>
			<tr>
				<th></th>
				<th>Username</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Role</th>
			</tr>
		</thead>
	</table>
	
	<div id='controlBar'>
		<input type='button' value='New' id='newBtn' />
		<input type='button' value='Delete' id='deleteBtn' />
		<input type='button' value='Edit' id='editBtn' />
		<input type='button' value='Reload' id='reloadBtn' />
	</div>
	
	<div>
		<form id='newForm'>
  			<fieldset>
				<legend>Create New Record</legend>
				<p>
					<label for='newUsername'>Username</label>
					<input type='text' id='newUsername' name="name" minlength="5" type="text" required/>
				</p>
				<p>
					<label for='newPassword'>Password</label>
					<input type='password' id='newPassword'/>
				</p>
				<p>
					<label for='newFirstName'>First Name</label>
					<input type='text' id='newFirstName'/>
				</p>
				<p>
					<label for='newLastName'>Last Name</label>
					<input type='text' id='newLastName'/>
				</p>
				<p>
					<label for='newRole'>Role</label>
					<select id='newRole'>
						<option value='1'>Admin</option>
						<option value='2' selected='selected'>Regular</option>
					</select>
				</p>
  			</fieldset>
			<input type='button' value='Close' id='closeNewForm' />
			<input type='submit' value='Submit'/>
		</form>
	</div>
	
	<div id='editForm'>
		<form>
  			<fieldset>
				<legend>Edit Record</legend>
				<input type='hidden' id='editUsername'/>
				<label for='editFirstName'>First Name</label><input type='text' id='editFirstName'/><br/>
				<label for='editLastName'>Last Name</label><input type='text' id='editLastName'/><br/>
				<label for='editRole'>Role</label>
					<select id='editRole'>
						<option value='1'>Admin</option>
						<option value='2' selected='selected'>Regular</option>
					</select>
			</fieldset>
			<input type='button' value='Close' id='closeEditForm' />
			<input type='submit' value='Submit'/>
		</form>
	</div>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	<script type='text/javascript' src='<c:url value="/resources/js/custom.js"/>'></script>
	<script type='text/javascript' src='<c:url value="/resources/js/lib/jquery.validate.js"/>'></script>
	<script type='text/javascript'>
	
		$.validator.setDefaults({
			debug: true
		});
		
		$(function() {
			toggleForms('hide');
			loadTable();
			
			$('#newForm').validate();
			
			$('#newBtn').click(function() { 
				toggleForms('new');
				toggleCrudButtons('hide');
			});
			
			$('#editBtn').click(function() { 
				if (hasSelected()) {
					toggleForms('edit');
					toggleCrudButtons('hide');
					fillEditForm();
				}
			});
			
			$('#reloadBtn').click(function() { 
				loadTable();
			});
	
			$('#deleteBtn').click(function() {
				if (hasSelected()) { 
					submitDeleteRecord();
				}
			});
			
			$('#newForm').submit(function() {
				event.preventDefault();
				submitNewRecord();
			});
			
			$('#editForm').submit(function() {
				event.preventDefault();
				submitUpdateRecord();
			});
	
			$('#closeNewForm').click(function() { 
				toggleForms('hide'); 
				toggleCrudButtons('show');
			});
			
			$('#closeEditForm').click(function() { 
				toggleForms('hide'); 
				toggleCrudButtons('show');
			});
		});
	</script>
</body>
</html>