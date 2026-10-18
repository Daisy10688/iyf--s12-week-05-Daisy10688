const heading = document.querySelector("h1");
console.log(heading);

const content = document.querySelectorAll(".content");
console.log(content);

const contactForm = document.getElementById("contact-form");
console.log(contactForm);

const emailInput = contactForm.querySelector("input[type='email']");
console.log(emailInput);

const navListItems = document.querySelectorAll(".nav-list li");
console.log(navListItems);

const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

const lastArticleParagraph = document.querySelector("article p:last-of-type");
console.log(lastArticleParagraph);

const submitButton = document.querySelector("#contact-form button[type='submit']");
console.log(submitButton);

const allH2sInMain = document.querySelectorAll("main h2");
console.log(allH2sInMain);

const footer = document.querySelector("footer");
console.log(footer);

const missingElement = document.querySelector(".does-not-exist");
console.log(missingElement);

console.log([...navListItems].map((item) => item.textContent.trim()));
