var url = "getFeatured.php?param="; // The server-side script

function handleHttpResponse() {

  if (http.readyState == 4) {

    // Split the comma delimited response into an array

    results = http.responseText.split(",");

    document.getElementById('city').value = results[0];

    document.getElementById('state').value = results[1];

  }

}


function updateFeatured() {
	    var zipValue = document.getElementById("zip").value; 
		http.open("GET", url + escape(zipValue), true); 
		http.onreadystatechange = handleHttpResponse; 
		http.send(null);
}

function getHTTPObject() {

  var xmlhttp;

  /*@cc_on

  @if (@_jscript_version >= 5)

    try {

      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e) {

      try {

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

      } catch (E) {

        xmlhttp = false;

      }

    }

  @else

  xmlhttp = false;

  @end @*/

  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {

    try {

      xmlhttp = new XMLHttpRequest();

    } catch (e) {

      xmlhttp = false;

    }

  }

  return xmlhttp;

}

var http = getHTTPObject(); // We create the HTTP Object
