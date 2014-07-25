if (typeof(String.prototype.localeCompare) === 'undefined') {
    String.prototype.localeCompare = function(str, locale, options) {
        return ((this == str) ? 0 : ((this > str) ? 1 : -1));
    };
}

var blanks = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

function loadData(user) {
	return $.get('users/' + user);
}

function setupPage(data) {
	$('#tableMeals').data('model', data);
	loadMealTable(data.meals);
	$( "#tabs").tabs({
        activate: function( event, ui ) {
        	var cmp = ui.newTab.text().localeCompare('');
        	if ( cmp != 0 ) {
        		filterOnDate(ui.newTab.text());
        	}
            //console.log('activated tab: *' + $.trim(ui.newTab.text()) + '*');
            //console.log(' localeCompare: ' + );
        },
        create: function( event, ui ) {
        	var cmp = ui.tab.text().localeCompare('');
        	if ( cmp != 0 ) {
        		filterOnDate(ui.tab.text());
        	}
        	//console.log('created tab: *' + ui.tab.text() + '*');
            //console.log(' localeCompare: ' + ui.tab.text().localeCompare(''));
        }
    });
	$( "#datepicker" ).datepicker( {
		onClose: datePickerOnClose
	});
	setTabData(new Date().toString('M/d/yyyy'));
	setEvents();
}

function setupPageFailed() {
	console.log('setup failed');
}

function loadMealTable(meals) {
	console.log(meals);
	$('#tableMeals').find('tbody').remove();

	for (var i=0; i<meals.length; i++) {
		var dt = new Date(meals[i].date);
//		console.log(dt.last().sunday());
		var row = $("<tr></tr>");
		$("<td></td>").text(dt.toString("MMM dd")).appendTo(row);
		$("<td></td>").text(meals[i].type).appendTo(row);
		$('#tableMeals').append(row[0].outerHTML);
	}

//	playWithDates();
}

function setEvents() {
	$('#clearLink').on('click', clearDate);

}

function clearDate() {
	var dateText = new Date().toString('MM/dd/yyyy');
	setTabData(dateText);
	filterOnDate(dateText);
	$('#datepicker').datepicker('setDate', null);
	$('#datepicker').data('theDate', null);
//	var user = $('#tableMeals').data('model');
//	var allMeals = user.meals; 
//	loadMealTable(allMeals);
}

function playWithDates() {
	console.log('playing...');

	var user = $('#tableMeals').data('model');
	console.log(user.meals);
	
	console.log('last Sunday:');
	console.log(' ' + new Date().last().sunday());
	
	console.log('done playing.');
}

function datePickerOnClose(dateText, inst) {
	setTabData(dateText);	
	filterOnDate(dateText);
}

function filterOnDate(dateText) {
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

function setTabData(dateText) {
	dateText = Date.parse(dateText).toString('MM/dd/yyyy');
	for (var i=0; i<7; i++) {
		var tabDate = (Date.parse(dateText).is().sunday()) ? 
				Date.parse(dateText).addDays(i) : 
					Date.parse(dateText).last().sunday().addDays(i);
		$('#t'+i).text(tabDate.toString('MM/dd/yyyy'));
		var comp = dateText.localeCompare(tabDate.toString('MM/dd/yyyy'));
		if (comp == 0) {
			$( "#tabs" ).tabs( "option", "active", i );
		}
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
