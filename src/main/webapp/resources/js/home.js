function loadData(user) {
	$.get('users/' + user, function(response) {
		console.log(response);
		$('#tableMeals').find('tbody').remove();

		for (var i=0; i<response.meals.length; i++) {
			var dt = new Date(response.meals[i].date);
			var row = $("<tr></tr>");
			$("<td></td>").text(dt.toString("MMM dd")).appendTo(row);
			$("<td></td>").text(response.meals[i].type).appendTo(row);
			$('#tableMeals').append(row[0].outerHTML);
		}
		$('#tableMeals').data('model', response);
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

