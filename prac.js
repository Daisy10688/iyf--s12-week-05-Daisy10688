const heading = document.querySelector("h1");
console.log(heading);
const contents = document.querySelectorAll(".content");
console.log(contents);
const form = document.getElementById("contact-form");
console.log(form);
const emailInput = document.querySelector("#contact-form input[type='email']");
console.log(emailInput);
const navItems = document.querySelectorAll("nav li");
console.log(navItems);
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);
const lastParagraph = document.querySelector("p:last-of-type");
console.log(lastParagraph);
const submitButton = document.querySelector("button[type='submit']");
console.log(submitButton);
const mainHeading = document.querySelectorAll("main h2");
console.log(mainHeading);
const footer = document.querySelector("footer");
console.log(footer);
const missingElement = document.querySelector(".does-not-exist");
console.log(missingElement);
const navTexts = [...navItems].map(item => item.textContent);
console.log(navTexts);
const headerNav = document.querySelector("header").querySelector("nav");
console.log(headerNav);
const navlinkParent = document.querySelector(".nav-link").parentElement;
console.log(navlinkParent);
const articleSibling = document.querySelector("article").nextElementSibling;
console.log(articleSibling);
const listChildren = document.querySelector("ul").children;
console.log(listChildren);
const footerBody = document.querySelector("footer").parentElement;
console.log(footerBody);
const linkHeader = document.querySelector(".nav-link").closest("header");
console.log(linkHeader);
document.querySelector("h1").textContent = "Welcome to Daisy's page!";
const firstLink = document.querySelector(".nav-link");
firstLink.href = "https://developer.mozilla.org";
firstLink.target = "_blank";
firstLink.rel = "noopener noreferrer";
const article = document.querySelector("article");
console.log(article.dataset.id);
console.log(article.dataset.category);
article.dataset.status ="reviewed";
const contentParagraphs = document.querySelectorAll("p.content");
contentParagraphs[0].classList.add("highlight");
contentParagraphs[1].classList.toggle("accent");
const userInput = `<img src="x" onerror="alert('hacked!')">`;
//document.getElementById("unsafe").innerHTML = userInput;
document.getElementById("safe").textContent = userInput;
// I would use textContent for a user's comment because it displays input as text instead of interpreting it as HTML.
function addNavItem(text, href) {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.classList.add("nav-link");
    link.href = href;
    link.textContent = text;
    li.append(link);
    const navList = document.querySelector(".nav-list");
    console.log(navList);
    navList.append(li);
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added using JavaScript.";
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);
const navItem = document.querySelector(".nav-list li");
const clonedItem = navItem.cloneNode(true);
clonedItem.querySelector("a").textContent = "Cloned";
navItem.parentElement.prepend(clonedItem);
footer.remove();





