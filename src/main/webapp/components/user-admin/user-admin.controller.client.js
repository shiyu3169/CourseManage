(()=>{

	var userServiceClient = new UserServiceClient();

	init();

	function init() {
		userServiceClient.getAllUsers().then(renderUsers);
	}

	// function findAllUsers() {
	// 	return fetch('/api/user').then(
	// 		(res)=> {
	// 			return res.json();
	// 		}
	// 	);
	// }

	function renderUsers(users) {
		console.log(users);
		var tbody = $('tbody');
		tbody.empty();
		for(let user of users) {
			var tr = $("<tr>");
			var td = $("<td>");
			td.append(user.username);
			tr.append(td);

			var td = $("<td>");
			td.append("******");
			tr.append(td);

			var td = $("<td>");
			td.append(user.firstName);
			tr.append(td);

			var td = $("<td>");
			td.append(user.lastName);
			tr.append(td);

			var td = $("<td>");
			td.append("hello@world.com");
			tr.append(td);

			var td = $("<td>");
			td.append("Student");
			tr.append(td);

			
			var td = $("<td>");
			var deleteBtn = $('<button>Delete</button>')
			deleteBtn.click(deleteUser);
			deleteBtn.attr('id', user.id);
			td.append(deleteBtn);
			tr.append(td)
			tr.appendTo(tbody);
		}
	}

	function deleteUser(event) {
		var $button = $(event.currentTarget);
		var id = $button.attr('id');

		userServiceClient.deleteUser(id).then(()=>{
			userServiceClient.getAllUsers().then(renderUsers);
		});
	}
})()