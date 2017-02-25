/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

// This feature is not implemented yet

function copyToClipboard() {
	// Get the newInput text
    var copyTextarea = document.getElementById('newInput');

	// Select value
    copyTextarea.select();

    try {
		// Exec the copy command and get the return
        var successful = document.execCommand('copy');

		// Unselect the newInput text
        window.getSelection().removeAllRanges();

		// Displays the result of the copy command in logs
		var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
		// If error, display an error message in logs
        console.log('Unable to copy');
    }
}
