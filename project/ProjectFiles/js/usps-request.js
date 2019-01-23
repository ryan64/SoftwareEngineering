function Request(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myFunction(this);
	    }
	};
	xhttp.open("GET", 'https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="365SCHOO5498"><Revision>1</Revision><Address ID="0"><Address1>'+ document.getElementById("street-address").value+ '</Address1><Address2></Address2><City>'+ document.getElementById("city").value+ '</City><State>'+ document.getElementById("state").value+ '</State><Zip5>'+ document.getElementById("zip").value+ '</Zip5><Zip4></Zip4></Address></AddressValidateRequest>', true);
	xhttp.send();

	function myFunction(xml) {
	    var xmlDoc = xml.responseXML;
	    console.log(xmlDoc);

	    //this section is for if a address is found or corrected.
	    try {
	    var address2 = xmlDoc.getElementsByTagName('Address2')[0];
	    var address2Child = address2.childNodes[0];

	    var city = xmlDoc.getElementsByTagName('City')[0];
	    var cityChild = city.childNodes[0];

	    var state = xmlDoc.getElementsByTagName('State')[0];
	    var stateChild = state.childNodes[0];

	    var zip5 = xmlDoc.getElementsByTagName('Zip5')[0];
	    var zip5Child = zip5.childNodes[0];
	    document.getElementById("Validation").innerHTML = address2Child.nodeValue + " " + cityChild.nodeValue + " " + stateChild.nodeValue + ", " + zip5Child.nodeValue;  }
	    catch(error){
	    	console.log('Address Not Found')
	    }

	    //this section is for if a address is not found. Uncomment to make this work. 
	    try {
	 	var errorDescription = xmlDoc.getElementsByTagName('Description')[0];
	    var errorDescriptionChild = errorDescription.childNodes[0];

	    var source = xmlDoc.getElementsByTagName('Source')[0]; 
	    var sourceChild = source.childNodes[0];

	    document.getElementById("Validation").innerHTML = errorDescriptionChild.nodeValue + " " + sourceChild.nodeValue; } 
	    catch(error){
	    	console.log('Address Found') 
	    }
	}
	return false; 
}