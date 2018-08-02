(()=>{
	var registerBtn = $('#registerBtn');
	var usernameFld = $("#username");
	var passwordFld = $("#password");
	var password2Fld = $("#password2");

	registerBtn.click(()=>{
		var usernameStr = usernameFld.val();
		var passwordStr = passwordFld.val();
		var password2Str = password2Fld.val();

		var user = {
			username: usernameStr,
			password: passwordStr
		};
		
		var userStr = JSON.stringify(user);
		
		fetch('/register', {
			method: "post",
			body: userStr,
			headers: {
				'Content-Type': 'application/json'
			},
			'credentials': 'include'
		}).then(registrationSuccessful, registrationFailed);

		function registrationSuccessful() {
			window.location.href = '/profile.template.client.html';
		}

		function registrationFailed() {
			alert('oops');
		}
	});
})()