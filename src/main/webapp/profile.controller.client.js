(()=> {
	init();

	var $username, $firstName, $lastName;

	function init() {

		$username = $('#username');
		$firstName = $('#firstName');
		$lastName = $('#lastName');

		findUserById(7).then(renderUser);
	}

	function renderUser(user) {
		$username.val(user.username);
		$firstName.val(user.firstName);
		$lastName.val(user.lastName);
	}

	function findUserById(userId) {
		return fetch('/api/user/' + userId).then((res) => {
			return res.json();
		})
	}

	// fetch('/checkLogin', {
	// 	'credentials':'include'
	// }).then(function(res){
	// 	console.log(res);
	// })
})()