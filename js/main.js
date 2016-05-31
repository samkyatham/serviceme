// The root URL for the RESTful services
var rootURL = "http://serviceme.pcriot.com/serviceme/index.php";

$('#btnLogin').click(function() {
	if ($('#email').val() == ''){
		alert('Enter Email Id');
                return false;
        }
	if ($('#password').val() == ''){
		alert('Enter Password');
                return false;
        }
        login();
        return false;
});

function login() {
	console.log('login');  
	$.ajax({
		url: rootURL+"/login",
                method: "POST",
                type: "POST",
		contentType: "application/json",
                crossDomain: true,
		dataType: "json",
		data: credentialsJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Data received\n'+JSON.stringify(data));
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert(JSON.stringify(data));
		}
	});
}

function credentialsJSON() {
	
	return JSON.stringify({		
		"email": $('#email').val(), 
		"password": $('#password').val()
		});
}