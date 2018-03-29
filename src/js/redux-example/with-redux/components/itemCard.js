import store from "../store";

const itemCardElement = document.getElementById("itemCard");

store.subscribe(() => {
    const items = store.getState().items;
    itemCardElement.innerHTML = `Nombre d'items : ${items.length}`;
});