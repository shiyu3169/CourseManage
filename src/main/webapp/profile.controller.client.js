(()=> {
	init();

	function init() {
		findUserById(7).then((user) => {
			console.log(user);
		});
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