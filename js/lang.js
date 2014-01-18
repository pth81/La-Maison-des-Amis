// Set default lang to english
$(document).ready(function() {
  if(typeof(Storage)!=="undefined")
  {
  sessionStorage.lang ="en";
  }
	if (typeof window.lang === 'undefined') {
		window.lang = 'en';
	}
});


function switchLang(reqLang, url) {

	window.lang = reqLang;		

	if (reqLang == 'en') {
		// No need to add 'en' - English is the default
		urlLangPrefix = '';
	} else {
		// Add '/' prefix for the url
		urlLangPrefix = '/' + reqLang;
	}
	// Remove lang prefix if any
	url = url.replace("/fr", "/");
	
	finalUrl = urlLangPrefix + url;
	
	// Be sure there isnt a double slash
	finalUrl = finalUrl.replace(/\/\//, "/");
		
    window.location.href = finalUrl;
    
}

