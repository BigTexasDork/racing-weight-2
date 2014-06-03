/**
 * Contains custom JavaScript code
 */
var urlHolder = new Object();

function loadTable() {
	$.get("/ssmvc/users/", function(response) {
		
 		$('#tableUsers').find('tbody').remove();
 		
 		for (var i=0; i<response.length; i++) {
			var row = '<tr>';
			row += '<td><input type="radio" name="index" id="index" value="'+i+'"></td>';
			row += '<td>' + response[i].username + '</td>';
			row += '<td>' + response[i].firstName + '</td>';
			row += '<td>' + response[i].lastName + '</td>';
			row += '<td>' + getRole(response[i].role) + '</td>';
			row += '</tr>';
	 		$('#tableUsers').append(row);
 		}
 		
 		$('#tableUsers').data('model', response);
		toggleForms('hide'); ;
 	});
}

function submitNewRecord() {
	var user = {
			username: $('#newUsername').val(),
			password: $('#newPassword').val(),
			firstName: $('#newFirstName').val(),
			lastName: $('#newLastName').val(),
			role: $('#newRole').val()
		};
	var request = $.ajax({
		type: "POST",
		contentType: "application/json",
		url: '/ssmvc/users/',
		data: JSON.stringify(user)
	});
	request.done(
		function(response) {
			if (response != null) {
				loadTable();
				toggleForms('hide');
				toggleCrudButtons('show');
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
	var username = $('#tableUsers').data('model')[selected].username;
	
	var request = $.ajax({
		type: "DELETE",
		url: "/ssmvc/users/" + username
	});
	request.done(function(data) {
		loadTable();
		toggleForms('hide');
		toggleCrudButtons('show');
		alert('Success! Record has been deleted.');
	});
	request.fail(function(jqXHR, textStatus) {
		alert('Failure! An error has occurred!');
	});
}

function submitUpdateRecord() {
	var user = {};
	user.username = $('#editUsername').val();
	user.firstName = $('#editFirstName').val();
	user.lastName = $('#editLastName').val();
	user.role = $('#editRole').val();

	var request = $.ajax({
		type: "PUT",
		contentType: "application/json",
		url: '/ssmvc/users/',
		data: JSON.stringify(user)
	});
	request.done(function(data) {
		loadTable();
		toggleForms('hide'); ;
		toggleCrudButtons('show');
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
	$('#editRole').val( $('#tableUsers').data('model')[selected].role );
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

function toggleForms(id) {
	if (id == 'hide') {
		$('#newForm').hide();
		$('#editForm').hide();
		
	} else if (id == 'new') {
 		resetNewForm();
 		$('#newForm').show();
 		$('#editForm').hide();
 		
	} else if (id == 'edit') {
 		resetEditForm();
 		$('#newForm').hide();
 		$('#editForm').show();
	}
}

function toggleCrudButtons(id) {
	if (id == 'show') {
		$('#newBtn').removeAttr('disabled');
		$('#editBtn').removeAttr('disabled');
		$('#deleteBtn').removeAttr('disabled');
		$('#reloadBtn').removeAttr('disabled');
		
	} else if (id == 'hide'){
		$('#newBtn').attr('disabled', 'disabled');
		$('#editBtn').attr('disabled', 'disabled');
		$('#deleteBtn').attr('disabled', 'disabled');
		$('#reloadBtn').attr('disabled', 'disabled');
	}
}
