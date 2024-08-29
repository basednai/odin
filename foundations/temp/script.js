const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const itemText = input.value;
    input.value = '';

    const item = document.createElement("li")
    const span = document.createElement("span")
    const btn2 = document.createElement("button");

    item.appendChild(span);
    item.appendChild(btn2);

    span.textContent = itemText;
    btn2.textContent = "delete";

    if (itemText != '')
        list.append(item);

    btn2.addEventListener("click", () => {
        list.removeChild(item);
    });

    document.querySelector("input").focus()
})