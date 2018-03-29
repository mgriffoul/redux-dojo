import store from "../store";

const itemListContainer = document.getElementById("itemListContainer");

store.subscribe(() => {
    const items = store.getState().items;
    
    itemListContainer.innerHTML = 
        items.map(item => `<p>${item}</p>`).join('');
});