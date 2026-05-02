// LIGHT / DARK MODE

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.textContent = "Dark Mode";
}
else{
toggle.textContent = "Light Mode";
}

});




// SIMPLE CONTACT FORM

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {

e.preventDefault();

const message = document.getElementById("form-message");

message.textContent = "Message sent successfully!";

form.reset();

});