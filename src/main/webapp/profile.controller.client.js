(()=> {
	init();

	var $username, $firstName, $lastName, $updateBtn;

	var currentUser = null;

	function init() {

		$username = $('#username');
		$firstName = $('#firstName');
		$lastName = $('#lastName');
		$updateBtn = $("#updateBtn");

		$updateBtn.click(updateUser);
		// findUserById(7).then(renderUser);
		profile().then(renderUser);
	}

	function renderUser(user) {
		currentUser = user;
		$username.val(user.username);
		$firstName.val(user.firstName);
		$lastName.val(user.lastName);
	}

	function updateUser() {
		console.log("updated");
	    var user = {
	      firstName: $firstName.val(),
	      lastName: $lastName.val()
	    };

	    fetch("/api/user/" + currentUser.id, {
	      method: 'put',
	      body: JSON.stringify(user),
	      'credentials': 'include',
	      headers: {
	        'content-type': 'application/json'
	      }
	    });
  }

	// function findUserById(userId) {
	// 	return fetch('/api/user/' + userId).then(
	// 		function(res){
	// 		return res.json();
	// 	})
	// }

	function profile() {
		return fetch('/profile', {
      'credentials': 'include'
    })
    .then(function (response) {
      return response.json();
    });
	}

	// fetch('/checkLogin', {
	// 	'credentials':'include'
	// }).then(function(res){
	// 	console.log(res.json());
	// })
})()