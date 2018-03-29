import React from "react";
import ReactDOM from "react-dom";
import App from "./components/NameComponent";

window.name = "Bob";
window.setName = (value) => {
	document.getElementById('react-example2-console').innerHTML += '<br/> name = '+value;
	window.name = value;
};

ReactDOM.render(<App/>, document.getElementById('react-example2'));
