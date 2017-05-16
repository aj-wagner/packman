function login() {

	// Get User Name
	var login_name=prompt("Enter Player Name: ","User Name");

	//Assign User Name to the PlayerID element
	document.getElementById("PlayerID").value = login_name;

}