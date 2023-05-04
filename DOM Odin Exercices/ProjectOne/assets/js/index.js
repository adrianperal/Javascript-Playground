const container = document.querySelector("#container");

const redPara = document.createElement("p");

const blueH3 = document.createElement("h3");

const newDiv = document.createElement("div");
const newDivH1 = document.createElement("h1");
const newDivP = document.createElement("p");

redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";

blueH3.textContent = "I'm a blue h3!";
blueH3.style.cssText = "color: blue;";

newDiv.style.cssText = "border: 1px solid black; background-color: pink;";
newDivH1.textContent = "I'm in a div";
newDivP.textContent = "ME TOO!";

newDiv.appendChild(newDivH1);
newDiv.appendChild(newDivP);
container.appendChild(newDiv);
container.appendChild(blueH3);
container.appendChild(redPara);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World(2)");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
  alert("Hello World(3)");
  e.target.style.background = "blue";
});
