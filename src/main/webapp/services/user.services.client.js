function UserServiceClient() {

	this.getAllUsers = findAllUsers;
	this.deleteUser = deleteUser;
	function deleteUser(id) {
		var url = '/api/user/' + id;
		return fetch(url, {
			method: 'delete'
		});
	}

	function findAllUsers() {
		return fetch('/api/user').then(
			(res)=> {
				return res.json();
			}
		);
	}
}