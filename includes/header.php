<!-- Set default language -->
<?php if (strcmp(substr(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), 1,2), "fr") == 0) {$LANG = "fr";} elseif (strcmp(substr(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), 1,2), "es") == 0) {$LANG = "es";} elseif (strcmp(substr(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), 1,3), "cat") == 0) {$LANG = "cat";} else {$LANG = "/";} ?>


	<meta name="author" content="Paul Hickey">
	
	<!-- Le styles -->
	<link href="https://netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
	<!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.css" rel="stylesheet">-->
	<!-- Coming soon bootstrap 3 -->
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">	
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	
	<link href="/css/style.css" rel="stylesheet">
	<link href="/css/scrolling-nav.css" rel="stylesheet">
	
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js"></script>
	
	
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
	<![endif]-->
	
	<!-- Fav and touch icons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
	<link rel="shortcut icon" href="../assets/ico/favicon.png">
