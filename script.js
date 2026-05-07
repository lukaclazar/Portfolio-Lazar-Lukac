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

const futureContainer = document.getElementById("future-container");
function updateCountdown(){
const tripDate = new Date("September 9, 2026 12:00:00").getTime();
const now = new Date().getTime();
const distance = tripDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
futureContainer.innerHTML = `
<div class="project">
<div>
<h3>Semester at Sea</h3>

<p>
Voyage during which I will be conducting research projects in international management, working on global business case studies, participating in an exclusive NVIDIA cohort, and studying global economic systems.
</p>

<p>
<strong>
${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until departure.
</strong>
</p>

<img src="./images/sas-map.png" alt="Semester at Sea Map">

</div>

</div>
`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
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