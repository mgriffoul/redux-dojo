import React from "react";
import ReactDOM from 'react-dom';

import store from '../store';

const ItemCard = ({itemLength}) => (
    <div className="card">
        <div className="card-body">
            Nombre d'items : {itemLength}
        </div>
    </div>
);

function render() {
    ReactDOM.render(
        <ItemCard itemLength={store.getState().items.length} />,
        document.getElementById('card-container')
    );
}

store.subscribe(render);

render();
