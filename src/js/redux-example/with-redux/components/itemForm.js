import store from "../store";
import { addItem } from "../actions";

const itemFormElement = document.getElementById("formItem");

itemFormElement.onsubmit = function(event) {
    event.preventDefault();

    const itemName = this.elements["itemName"].value;

    store.dispatch(addItem(itemName));

    this.reset();
};

export default itemFormElement;