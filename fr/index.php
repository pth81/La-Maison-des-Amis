<!-- Set default language -->
<?php $LANG = "/"; if (strcmp(substr(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), 1,2), "fr") == 0) {$LANG = "fr";} ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>La Maison des Amis - Gîte avec Piscine et wifi dans Le Tarn. Giroussens, 10 KM de Lavaur, Rabastens, St Sulpice.</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		
		<!-- Include Common Header 
		================================================== -->
		<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"); ?>
	
	</head>
	
	<body>

	<!-- Include NAVBAR
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/"  . "/fr/nav.html"); ?>
	
	<!-- Include CONTENT
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/" . $LANG . "/homepage.html"); ?>

	<!-- Include FOOTER
	================================================== -->
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/" . $LANG . "/footer.html"); ?>


  </body>
</html>
