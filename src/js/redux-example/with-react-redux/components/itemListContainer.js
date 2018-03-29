import React from "react";
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'

import store from "../store";

const ItemList = ({items}) => {
    const itemsToRender = 
        items.map((item, index) => <p key={index}>{item}</p>);

    return [...itemsToRender];
};

const mapStateToProps = state => ({
    items: state.items
});

const ItemListConnected = connect(mapStateToProps)(ItemList);

ReactDOM.render(
    <Provider store={store}>
        <ItemListConnected />
    </Provider>,
    document.getElementById('list-container')
);
