const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function(){

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggleBtn.textContent = "Dark Mode";
}
else{
toggleBtn.textContent = "Light Mode";
}

});






const buttons = document.querySelectorAll(".more-btn");

buttons.forEach(function(button){

button.addEventListener("click", function(){

const info = button.nextElementSibling;

if(info.style.display === "block"){

info.style.display = "none";
button.textContent = "Show More";

}
else{

info.style.display = "block";
button.textContent = "Show Less";

}

});

});






const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const formMessage = document.getElementById("form-message");

if(name === "" || email === "" || message === ""){

formMessage.textContent = "Please fill in all fields.";

}
else{

formMessage.textContent = "Message sent successfully!";
form.reset();

}

});