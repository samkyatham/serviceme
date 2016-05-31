// The root URL for the RESTful services
var rootURL = "http://serviceme.pcriot.com/serviceme/index.php";


$('#serviceMeRegistrationForm').submit(function() {
	if ($('#fName').val() == ''){
		alert('Enter Firt Name');
                return false;
        }
		if ($('#lName').val() == ''){
		alert('Enter Last Name');
                return false;
        }
		if ($('#street').val() == ''){
		alert('Enter Street Name');
                return false;
        }
		if ($('#city').val() == ''){
		alert('Enter City Name');
                return false;
        }
		if ($('#state').val() == ''){
		alert('Enter State Name');
                return false;
        }
		if ($('#zip').val() == ''){
		alert('Enter ZIP Code');
                return false;
        }
		if ($('#country').val() == ''){
		alert('Enter Country Name');
                return false;
        }
		if ($('#providerFlag').val() == ''){
		alert('Enter Provider Flage');
                return false;
        }
		if ($('#email').val() == ''){
		alert('Enter Email Id');
                return false;
        }
		if ($('#password').val() == ''){
		alert('Enter Your Password');
                return false;
        }
		if ($('#phoneNumber').val() == ''){
		alert('Enter Your Mobile Number');
                return false;
        }

        createAccount();
        return false;
});

function createAccount() {
	//alert('Here:'+registrationJSON());
	$.ajax({
		url: rootURL+"/account",
                method: "PUT",
                type: "PUT",
		contentType: "application/json",
                crossDomain: true,
		dataType: "json",
		data: registrationJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Data received\n'+JSON.stringify(data));
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert(JSON.stringify(errorThrown));
		}
	});
}

function registrationJSON() {

	return JSON.stringify({
		"firstName": $('#fName').val(),
		"lastName": $('#lName').val(),
			"street": $('#street').val(),
			"city": $('#city').val(),
			"state": $('#state').val(),
			"zip": $('#zip').val(),
			"country": $('#country').val(),
			"providerFlag": $('#providerFlag').val(),
			"email": $('#email').val(),
			"password":  $('#password').val(),
			"phoneNumber": $('#phoneNumber').val()
		});
}