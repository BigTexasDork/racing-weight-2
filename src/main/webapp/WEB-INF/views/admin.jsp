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
	<title>Admiin</title>
    <meta name="description" content="admin page">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<!-- src='<c:url value="/resources/js/admin.js"/>' -->
    <link rel="stylesheet" href='<c:url value="/resources/css/normalize.css"/>'>
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" href='<c:url value="/resources/css/main.css"/>'>
    <link rel="stylesheet" href='<c:url value="/resources/css/home.css"/>'>
    <script src='<c:url value="/resources/js/modernizr-2.6.2.min.js"/>'></script>
    <script src='<c:url value="/resources/js/admin.js"/>'></script>
    <script src='<c:url value="/resources/js/date.js"/>'></script>
	<script type="text/javascript">
		var user = '<sec:authentication property="principal.username" />';
		console.log(user);
	</script>
</head>
<body>
	<h1 id='banner'>Admin</h1>
	<hr/>

	<p> add user</p>
	
<a href="<c:url value="/j_spring_security_logout"/>">Logout</a>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	<script type="text/javascript">
		$(function() {
		});
	</script>
</body>
</html>
