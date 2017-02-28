/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

function copyToClipboard() {

	// Get some fields into variables
    var 	copyTextarea = document.getElementById('newInput');
	var 	serviceInput = document.getElementById("serviceInput");
	var 	copiedMessage = document.getElementById("copiedPopUp");

	// Select value of the newPass field
    copyTextarea.select();

    try {
		// Exec the copy command and get the return
        document.execCommand('copy');

		// Empty the newPass field
		copyTextarea.value = ""

		// Set focus on the service field
	    serviceInput.focus();

		// Show the "Copied!" message
		copiedMessage.style.visibility = 'visible';

		// Wait 2 seconds and hide it
		setTimeout(function(){
			copiedMessage.style.visibility = 'hidden';
		}, 2000);

    } catch (err) {
		// If error, display an error message in logs
        console.log('Unable to copy');
    }
}
