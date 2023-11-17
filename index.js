"use strict";
const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });

ScrollReveal().reveal(".hero-textbox", {
	delay: 110,
	origin: "left",
	// interval: 500,
	duration: 2200,
	distance: "50px",
});

ScrollReveal().reveal(".hero img", {
	delay: 110,
	origin: "right",
	interval: 500,
	duration: 2200,
	distance: "250px",
});

ScrollReveal().reveal(".about-textbox, .about, .service, .why, .testimony", {
	delay: 110,
	origin: "right",
	interval: 500,
	duration: 1500,
	distance: "250px",
});

ScrollReveal().reveal(".money", {
	delay: 110,
	origin: "left",
	interval: 500,
	duration: 1500,
	distance: "250px",
});

ScrollReveal().reveal(".why-para", {
	delay: 110,
	origin: "right",
	interval: 500,
	duration: 1500,
	distance: "250px",
});

ScrollReveal().reveal(".work-textbox", {
	delay: 110,
	origin: "right",
	interval: 500,
	duration: 1500,
	distance: "250px",
});

ScrollReveal().reveal(".work-img", {
	delay: 110,
	origin: "left",
	interval: 500,
	duration: 1500,
	distance: "250px",
});
