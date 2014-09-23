<!-- Set default language -->
<?php $LANG = "/"; if (strcmp(substr(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), 1,2), "fr") == 0) {$LANG = "fr";} ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>La Maison des Amis - Facilities</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

		<!-- Include Common Header 
		================================================== -->
		<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"); ?>
	
	</head>
	
	<body>


	<!-- Include NAVBAR
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/" . $LANG . "/nav.html"); ?>

	<!-- Include CONTENT
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/" . $LANG . "/facilities.html"); ?>

	<!-- Include FOOTER
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/" . $LANG . "/footer.html"); ?>
	
  </body>
</html>
