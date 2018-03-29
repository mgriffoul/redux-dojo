import React from "react";
import ReactDOM from 'react-dom';
import store from "../store";
import { addItem } from "../actions";
import { Provider, connect } from 'react-redux';

class ItemForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const itemName = event.target.itemName.value;
        this.props.addItem(itemName);
        
        event.target.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <input type="text" 
                            name="itemName" 
                            className="form-control" 
                            placeholder="ajouter un item" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                            Ok
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

const ItemFormConnected = connect(undefined, { addItem })(ItemForm);

ReactDOM.render(
    <Provider store={store}>
        <ItemFormConnected />
    </Provider>,
    document.getElementById('form-container')
);
