const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navItems = document.querySelectorAll("a");

navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

/*
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
*/

const newLink = document.createElement("a");
newLink.textContent = "Search";
const navSection = document.querySelector("nav");
navSection.append(newLink);


const newerLink = document.createElement("a");
newerLink.textContent = "Self-Destruct";
navSection.prepend(newerLink);


newLink.style.color = "green";
newerLink.style.color = "green";

/*
node.appendChild(linkText);
node.title = "Search";
node.href = "google.com";
document.nav.appendChild(node);
*/

let theH1 = document.getElementsByTagName("h1")[0];
theH1.textContent = siteContent["cta"]["h1"];

let theButton = document.querySelector('button');
theButton.textContent = siteContent["cta"]["button"];

let mainContentHeaders = document.querySelectorAll("h4");

mainContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

let allPs = document.querySelectorAll("p");

allPs[0].textContent = siteContent["main-content"]["features-content"];
allPs[1].textContent = siteContent["main-content"]["about-content"];
allPs[2].textContent = siteContent["main-content"]["services-content"];
allPs[3].textContent = siteContent["main-content"]["product-content"];
allPs[4].textContent = siteContent["main-content"]["vision-content"];
allPs[5].textContent = siteContent["contact"]["address"];
allPs[6].textContent = siteContent["contact"]["phone"];
allPs[7].textContent = siteContent["contact"]["email"];
allPs[8].textContent = siteContent["footer"]["copyright"];

/*
‘.setAttribute()’ is a method that takes two arguments, the attribute to set, and the value to set to that attribute.
eg: element.setAttribute('src', 'http://www.imagsource.com/image.jpg')
Can also use the pattern: element.'attrName' = ‘value’.
eg: element.src = 'http://www.imagsource.com/image.jpg'
*/
