// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement('p');
p.style.color = "red";
p.textContent = "Hey I'm red!";
document.body.appendChild(p);

const newHeader = document.createElement("h3");
newHeader.textContent = "I'm a blue h3";
newHeader.style.color = "blue";
document.body.appendChild(newHeader);

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.borderColor = "black";

const newHeader2 = document.createElement("h3");
newHeader2.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO";

newDiv.appendChild(newHeader2);
newDiv.appendChild(p2);

document.body.appendChild(newDiv);
