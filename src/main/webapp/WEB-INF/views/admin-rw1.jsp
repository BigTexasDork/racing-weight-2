<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c' %>

<c:url value="/users/" var="usersUrl"/>

<html>
<head>
	<link rel='stylesheet' type='text/css' media='screen' href='<c:url value="/resources/css/style.css"/>'/>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type='text/javascript' src='<c:url value="/resources/js/admin.js"/>'></script>

	<title>Racing Weight</title>
	
	<script type='text/javascript'>
	$(function() {
		// init
		urlHolder.users = '${usersUrl}';
		loadUsers();
		setEvents();
	});
	</script>
</head>

<body>
	<h1 id='banner'>Users</h1>
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
		<input type='button' value='New' id='newBtnUser' />
		<input type='button' value='Delete' id='deleteBtnUser' />
		<input type='button' value='Edit' id='editBtnUser' />
		<input type='button' value='Reload' id='reloadBtnUser' />
	</div>
	
	<div id='newFormUser'>
		<form>
  			<fieldset>
				<legend>Create New User</legend>
				<label for='newUsername'>Username</label><input type='text' id='newUsername'/><br/>
				<label for='newPassword'>Password</label><input type='password' id='newPassword'/><br/>
				<label for='newFirstName'>First Name</label><input type='text' id='newFirstName'/><br/>
				<label for='newLastName'>Last Name</label><input type='text' id='newLastName'/><br/>
				<label for='newRole'>Role</label>
					<select id='newRole'>
						<option value='1'>Admin</option>
						<option value='2' selected='selected'>Regular</option>
					</select>
  			</fieldset>
			<input type='button' value='Close' id='closeNewForm' />
			<input type='submit' value='Submit'/>
		</form>
	</div>
	
	<div id='editFormUser'>
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
		
	<table id='tableMeals'>
		<caption></caption>
		<thead>
			<tr>
				<th>Meal</th>
				<th>Portions</th>
			</tr>
		</thead>
	</table>
	
	<div id='controlMeals'>
		<input type='button' value='New' id='newBtnMeal' />
		<input type='button' value='Delete' id='deleteBtnMeal' />
		<input type='button' value='Edit' id='editBtnMeal' />
		<input type='button' value='Reload' id='reloadBtnMeal' />
	</div>
	
	<div id='newFormMeal'>
		<form>
 			<fieldset>
				<legend>Create New Meal</legend>
					<label for='newMealType'>Meal</label>
						<select id='newMealType'>
							<option value='0'>Breakfast</option>
							<option value='1'>Lunch</option>
							<option value='2'>Dinner</option>
							<option value='3'>Snack</option>
						</select>
 			</fieldset>
			<input type='button' value='Close' id='closeNewFormMeal' />
			<input type='submit' value='Submit'/>
		</form>
	</div>
	
	
</body>
</html>