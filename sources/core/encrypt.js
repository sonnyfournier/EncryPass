/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

// Comments are coming soon
function 	encryptPassword(form) {

    var 	res      = 0;
    var 	newPass  = "";
    var 	service  = form.serviceInput.value;
    var 	username = form.usernameInput.value;
    var 	password = form.passwordInput.value;

    if (service) {
        if (username) {
            service += username;
        }
        service = service.toLowerCase();
        for (var i = 0; i < service.length; i++) {
            res += service.charAt(i).charCodeAt(0);
        }
        if (password) {
            for (var i = 0; i < password.length; i++) {
                var tmp = ('!'.charCodeAt(0) + ((password.charAt(i).charCodeAt(0) - '!'.charCodeAt(0)) + res) % 94);
                newPass += String.fromCharCode(tmp)
            }
            form.newInput.value = newPass;
        }
    }
    return (false);
}
