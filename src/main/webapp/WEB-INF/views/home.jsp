<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ page session="false" %>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Home</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<!-- src='<c:url value="/resources/js/admin.js"/>' -->
    <link rel="stylesheet" href='<c:url value="/resources/css/normalize.css"/>'>
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" href='<c:url value="/resources/css/main.css"/>'>
    <link rel="stylesheet" href='<c:url value="/resources/css/home.css"/>'>
    <script src='<c:url value="/resources/js/modernizr-2.6.2.min.js"/>'></script>
    <script src='<c:url value="/resources/js/home.js"/>'></script>
    <script src='<c:url value="/resources/js/date.js"/>'></script>
	<script type="text/javascript">
		var user = '<sec:authentication property="principal.username" />';
		console.log(user);
	</script>
</head>
<body>
	<div id='menu'>
	</div>

	<h1 id='banner'>Meals</h1>
	<hr/>

	<p>
		Date: <input type="text" id="datepicker"> <a id="clearLink">today</a>
	</p>

<div id="tabs">
    <div class="scroller">
        <ul>
            <li><a id='t0' href="#tabs-1"></a></li>
            <li><a id='t1' href="#tabs-1"></a></li>
            <li><a id='t2' href="#tabs-1"></a></li>
            <li><a id='t3' href="#tabs-1"></a></li>
            <li><a id='t4' href="#tabs-1"></a></li>
            <li><a id='t5' href="#tabs-1"></a></li>
            <li><a id='t6' href="#tabs-1"></a></li>
        </ul>
    </div>
    <div id="tab-content-holder">
        <div id="tabs-1">
	<table id='tableMeals'>
		<caption></caption>
		<thead>
			<tr>
				<th>Date</th>
				<th>Type</th>
			</tr>
		</thead>
	</table>
        </div>
    </div>
</div>


	
<a href="<c:url value="/j_spring_security_logout"/>">Logout</a>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	<script type="text/javascript">
		$(function() {
			// init
			$.when(loadData(user))
			.done(setupPage)
			.fail(setupPageFailed);
		});
	</script>
</body>
</html>
