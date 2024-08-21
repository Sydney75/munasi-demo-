function press() {

var firstName = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("consult").value;

if (firstName === "" || email === "" || message ==="") {
    alert("Please fill in all fields.");

} else {

    alert("Thank you for your message " + firstName +  ". We will be in touch soon.");

    setTimeout(function() {

        window.location.href = "index.html";
    }, 3000);
};
};