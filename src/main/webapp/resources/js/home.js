function loadData(user) {
	$.get('users/' + user, function(response) {
		$('#tableMeals').data('model', response);
		loadMealTable(response.meals);
	});
}

function loadMealTable(meals) {
	console.log(meals);
	$('#tableMeals').find('tbody').remove();

	for (var i=0; i<meals.length; i++) {
		var dt = new Date(meals[i].date);
//		console.log(dt);
		var row = $("<tr></tr>");
		$("<td></td>").text(dt.toString("MMM dd")).appendTo(row);
		$("<td></td>").text(meals[i].type).appendTo(row);
		$('#tableMeals').append(row[0].outerHTML);
	}

	playWithDates();
}

function setEvents() {
	$('#clearLink').on('click', clearDate);
}

function clearDate() {
	$('#datepicker').datepicker('setDate', null);
	$('#datepicker').data('theDate', null);
	var user = $('#tableMeals').data('model');
	var allMeals = user.meals; 
	loadMealTable(allMeals);
}

function playWithDates() {
	console.log('playing...');

	var user = $('#tableMeals').data('model');
	console.log(user.meals);
	
	console.log('done playing.');
}

function datePickerOnClose(dateText, inst) {
	console.log('picked: ' + dateText);
	var user = $('#tableMeals').data('model');
	var allMeals = user.meals; 
	if (dateText === '') {
		$('#datepicker').data('theDate', null);
		loadMealTable(allMeals);
	} else {
		$('#datepicker').data('theDate', new Date(dateText));
		console.log(allMeals.filter(checkMealDate));
		loadMealTable(allMeals.filter(checkMealDate));
	}
}

function checkMealDate(meal) {
//	console.log(Date.prototype.equals);
	var d1 = new Date(meal.date);
	var d2 = $('#datepicker').data('theDate');
	return d1.equals(d2);
//	return true;
//	return Date.equals(new Date(meal.date), $('#datepicker').data('theDate'));
//	return Date.equals(Date.today(), Date.parse('today'));
}

