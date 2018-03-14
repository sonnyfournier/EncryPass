/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

document.getElementById("remove-length-button").addEventListener("click", function() {

  var length = parseInt(document.getElementById("password-length").value);

  if (length > 1) {
    length -= 1;
    var lengthString = '' + length;
    document.getElementById("password-length").value = lengthString;
  } else {
    const swal = require('sweetalert2');

    swal({
      type: 'error',
      title: 'Oops...',
      allowOutsideClick: false,
      text: 'Minimum password length is 1.',
    })
  }
}, false);

document.getElementById("add-length-button").addEventListener("click", function() {

  var length = parseInt(document.getElementById("password-length").value);

  if (length < 40) {
    length += 1;
    var lengthString = '' + length;
    document.getElementById("password-length").value = lengthString;
  } else {
    const swal = require('sweetalert2');

    swal({
      type: 'error',
      title: 'Oops...',
      allowOutsideClick: false,
      text: 'Maximum password length is 40.',
    })
  }
}, false);

function checkValidPasswordLength() {

  var length = parseInt(document.getElementById("password-length").value);

  if (length < 1) {
    const swal = require('sweetalert2');
    swal({
      type: 'error',
      title: 'Oops...',
      allowOutsideClick: false,
      text: 'Minimum password length is 1.',
    })
    document.getElementById("password-length").value = 1;
  }
  if (length > 40) {
    const swal = require('sweetalert2');
    swal({
      type: 'error',
      title: 'Oops...',
      allowOutsideClick: false,
      text: 'Maximum password length is 40.',
    })
    document.getElementById("password-length").value = 40;
  }
  if (isNaN(length)) {
    const swal = require('sweetalert2');
    swal({
      type: 'error',
      title: 'Oops...',
      allowOutsideClick: false,
      text: 'Password length must be a number.',
    })
    document.getElementById("password-length").value = 16;
  }
}
