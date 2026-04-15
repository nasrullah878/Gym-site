
// Simple login alert

function loginUser(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

if(username === "admin" && password === "1234"){
alert("Login Successful")
window.location.href = "index.html"
}

else{
alert("Invalid Login")
}

}


// Smooth scroll animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});


// Navbar background change on scroll

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar")

if(window.scrollY > 50){
navbar.style.background = "#000"
}

else{
navbar.style.background = "transparent"
}

})
