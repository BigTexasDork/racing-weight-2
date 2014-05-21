/**
 * Contains custom JavaScript code
 */
var urlHolder = new Object();

function loadUsers() {
	$.get(urlHolder.users, function(response) {
		
 		$('#tableUsers').find('tbody').remove();
 		$('#tableMeals').find('tbody').remove();
 		
 		for (var i=0; i<response.users.length; i++) {
			var row = '<tr>';
			row += '<td><input type="radio" name="index" id="index" value="'+i+'"></td>';
			row += '<td>' + response.users[i].username + '</td>';
			row += '<td>' + response.users[i].firstName + '</td>';
			row += '<td>' + response.users[i].lastName + '</td>';
			row += '<td>' + getRole(response.users[i].role.role) + '</td>';
			row += '</tr>';
	 		$('#tableUsers').append(row);
 		}
 		
 		$('#tableUsers').data('model', response.users);
		toggleForms('hide', 'User');
		toggleForms('hide', 'Meal');
		
		$( "#tableUsers tbody" ).on( "click", "input:radio[name=index]", loadMeals);
 	});
}

function loadMeals() {
	$('#tableMeals').find('tbody').remove();
	
	var selected = $('input:radio[name=index]:checked').val();
	var user = $('#tableUsers').data('model')[selected];

	if (null != user.meals) {
		for (var i=0; i<user.meals.length; i++) {
			row = '<tr>';
			row += '<td>' + user.meals[i].mealType + '</td>';
			row += '<td>' + user.meals[i].portions.length + '</td>';
			row += '</tr>';
			$('#tableMeals').append(row);
		}
	}
	else {
		$('#tableMeals').append('<tr><td colspan="2">no meals found</td></tr>');
	}
	
}

function submitNewRecord() {
	var user = {};
	user.username = $('#newUsername').val();
	user.password = $('#newPassword').val();
	user.firstName = $('#newFirstName').val();
	user.lastName = $('#newLastName').val();
	user.roleId = $('#newRole').val();

	var request = $.ajax({
		type: "POST",
		contentType: "application/json",
		url: urlHolder.users,
		data: JSON.stringify(user)
	});
	request.done(
		function(response) {
			if (response != null) {
				loadUsers();
				toggleForms('hide', 'User'); ;
				toggleCrudButtons('show', 'User');
				alert('Success! Record has been added.');
			} else {
				alert('Failure! An error has occurred!');
			}
		});
	request.fail(
		function() {
			alert('Failure! An error has occurred!');
		});
}

function submitDeleteRecord() {
	var selected = $('input:radio[name=index]:checked').val();
	var id = $('#tableUsers').data('model')[selected].id;
	
	var request = $.ajax({
		type: "DELETE",
		url: urlHolder.users + id
	});
	request.done(function(data) {
		loadUsers();
		toggleForms('hide', 'User'); ;
		toggleCrudButtons('show', 'User');
		alert('Success! Record has been deleted.');
	});
	request.fail(function(jqXHR, textStatus) {
		alert('Failure! An error has occurred!');
	});
}

function submitUpdateRecord() {
	var selected = $('input:radio[name=index]:checked').val();
	var id = $('#tableUsers').data('model')[selected].id;
	var user = {};
	user.username = $('#editUsername').val();
	user.firstName = $('#editFirstName').val();
	user.lastName = $('#editLastName').val();
	user.roleId = $('#editRole').val();

	var request = $.ajax({
		type: "PUT",
		contentType: "application/json",
		url: urlHolder.users + id,
		data: JSON.stringify(user)
	});
	request.done(function(data) {
		loadUsers();
		toggleForms('hide', 'User'); ;
		toggleCrudButtons('show', 'User');
		alert('Success! Record has been edited.');
	});
	request.fail(function(jqXHR, textStatus) {
		alert('Failure! An error has occurred!');
	});
}

function getRole(role) {
	if (role == 1) {
		return 'Admin';
	} else if (role == 2) {
		return 'Regular';
	} else {
		return 'Unknown';
	} 
}

function hasSelected() {
	var selected = $('input:radio[name=index]:checked').val();
	if (selected == undefined) { 
		alert('Select a record first!');
		return false;
	}
	
	return true;
}

function fillEditForm() {
	var selected = $('input:radio[name=index]:checked').val();
	$('#editUsername').val( $('#tableUsers').data('model')[selected].username );
	$('#editFirstName').val( $('#tableUsers').data('model')[selected].firstName );
	$('#editLastName').val( $('#tableUsers').data('model')[selected].lastName );
	$('#editRole').val( $('#tableUsers').data('model')[selected].role.role );
}

function resetNewForm() {
	$('#newUsername').val('');
	$('#newPassword').val('');
	$('#newFirstName').val('');
	$('#newLastName').val('');
	$('#newRole').val('2');
}

function resetEditForm() {
	$('#editFirstName').val('');
	$('#editLastName').val('');
	$('#editRole').val('2');
}

function toggleForms(id, group) {
	if (id == 'hide') {
		$('#newForm' + group).hide();
		$('#editForm' + group).hide();
		
	} else if (id == 'new') {
 		resetNewForm();
 		$('#newForm' + group).show();
 		$('#editForm' + group).hide();
 		
	} else if (id == 'edit') {
 		resetEditForm();
 		$('#newForm' + group).hide();
 		$('#editForm' + group).show();
	}
}

function toggleCrudButtons(id, group) {
	if (id == 'show') {
		$('#newBtn' + group).removeAttr('disabled');
		$('#editBtn' + group).removeAttr('disabled');
		$('#deleteBtn' + group).removeAttr('disabled');
		$('#reloadBtn' + group).removeAttr('disabled');
		
	} else if (id == 'hide'){
		$('#newBtn' + group).attr('disabled', 'disabled');
		$('#editBtn' + group).attr('disabled', 'disabled');
		$('#deleteBtn' + group).attr('disabled', 'disabled');
		$('#reloadBtn' + group).attr('disabled', 'disabled');
	}
}

function setUserEvents() {
	$('#newBtnUser').click(function() { 
		toggleForms('new', 'User');
		toggleCrudButtons('hide', 'User');
	});
	
	$('#editBtnUser').click(function() { 
		if (hasSelected()) {
			toggleForms('edit', 'User');
			toggleCrudButtons('hide', 'User');
			fillEditForm();
		}
	});
	
	$('#reloadBtnUser').click(function() { 
		loadUsers();
	});

	$('#deleteBtnUser').click(function() {
		if (hasSelected()) { 
			submitDeleteRecord();
		}
	});
	
	$('#newFormUser').submit(function() {
		event.preventDefault();
		submitNewRecord();
	});
	
	$('#editFormUser').submit(function() {
		event.preventDefault();
		submitUpdateRecord();
	});

	$('#closeNewForm').click(function() { 
		toggleForms('hide', 'User'); 
		toggleCrudButtons('show', 'User');
	});
	
	$('#closeEditForm').click(function() { 
		toggleForms('hide', 'User'); 
		toggleCrudButtons('show', 'User');
	});
}

function setMealEvents() {
	$('#newBtnMeal').click(function() { 
		toggleForms('new', 'Meal');
		toggleCrudButtons('hide', 'Meal');
	});
	
	$('#editBtnMeal').click(function() { 
		if (hasSelected()) {
			toggleForms('edit', 'Meal');
			toggleCrudButtons('hide', 'Meal');
			fillEditForm();
		}
	});
	
	$('#reloadBtnMeal').click(function() { 
		loadMeals();
	});

	$('#deleteBtnMeal').click(function() {
		if (hasSelected()) { 
			submitDeleteRecordMeal();
		}
	});

	$('#closeNewFormMeal').click(function() { 
		toggleForms('hide', 'Meal'); 
		toggleCrudButtons('show', 'Meal');
	});
	
}

function setEvents() {
	setUserEvents();
	setMealEvents();
}