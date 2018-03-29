import itemCard from "./itemCard";
import itemListContainer from "./itemListContainer";

const items = [];

const itemFormElement = document.getElementById("formItem");

itemFormElement.onsubmit = function(event) {
    event.preventDefault();

    const itemName = this.elements["itemName"].value;
    items.push(itemName);

    itemCard.innerHTML = `Nombre d'items : ${items.length}`;
    itemListContainer.innerHTML = items.map(item => `<p>${item}</p>`).join('');

    this.reset();
}

export default itemFormElement;