/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

// This function isn't mine
// All credits go to inter-code : https://gist.github.com/inter-coder/d674758f727fa866f9e9
HTMLElement.prototype.changeValueDetection = function() {
    var element = this;
    var oldVal = element.value;
    var GUID = function() {
        var S4 = function() {
            return (Math.floor(Math.random() * 0x10000).toString(16));
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };
    var uiq = "GUID-" + GUID();
    if (window.changeValueDetectionEvents == undefined) window.changeValueDetectionEvents = new Event('changeValueDetection');
    element.setAttribute("data-uiq", uiq);
    window[uiq] = setInterval(function() {
        if (element.value != oldVal) {
            oldVal = element.value;
            element.setAttribute("value", oldVal);
            element.dispatchEvent(window.changeValueDetectionEvents);
        }
        if (document.querySelectorAll("[data-uiq='" + uiq + "']").length == 0) {
            clearInterval(window[uiq]);
        };
    }, 100);
};

// Set an inital observer
document.getElementById("newInput").changeValueDetection();

document.getElementById("newInput").addEventListener("changeValueDetection", function() {

	// Get the new password button
	var newButton = document.querySelectorAll(".input-group.prev-input-group .form-control+span #newButton")

	// Change background image of password button with a clipboard image
	newButton[0].style.backgroundImage = "url('../../ressources/images/glyphicons/copy.png')";
});
