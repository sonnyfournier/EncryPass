/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

document.getElementById("passwordButton").addEventListener("click", function(e) {

	// Get the password field
	var 	passwordInput = document.getElementById("passwordInput");

	// Set focus on it (because we lose focus on click on the "eye" button)
    passwordInput.focus();

	// If the type of the field is "password" set it to "text"
    if (passwordInput.getAttribute("type") == "password") {
        passwordInput.setAttribute("type", "text");
    }
	// And if type is "text" set it to "password"
	else {
        passwordInput.setAttribute("type", "password");
    }
});
