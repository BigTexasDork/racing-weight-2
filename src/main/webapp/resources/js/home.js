function loadData(user) {
	$.get('users/' + user, function(response) {
		console.log(response);
		$('#tableMeals').find('tbody').remove();

		for (var i=0; i<response.meals.length; i++) {
			var row = $("<tr></tr>");
			$("<td></td>").text(response.meals[i].date).appendTo(row);
			$("<td></td>").text(response.meals[i].type).appendTo(row);
			$('#tableMeals').append(row[0].outerHTML);
		}
		$('#tableMeals').data('model', response);
		/*
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
*/
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

