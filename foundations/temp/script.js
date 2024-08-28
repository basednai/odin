const container = document.querySelector("#container");

const redP = document.createElement("p")
redP.style.color = "red"
redP.textContent = "Hey I'm red!"

const blueH3 = document.createElement("h3")
blueH3.style.color = "blue"
blueH3.textContent = "I'm a blue h3!"

const div = document.createElement("div")
div.style.backgroundColor = "pink"
div.style.border = "black"

container.appendChild(redP)
container.appendChild(blueH3)
container.appendChild(div)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"

const p = document.createElement("p")
p.textContent = "ME TOO!"

div.appendChild(h1)
div.appendChild(p)