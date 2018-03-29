import React from "react";

const DisplayName = (props) => {
	return (<div><img src="avatar.png"/> Hello {props.name}</div>)
};


class NameComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	setName() {
		window.setName(this.input.value);
	}

	render() {
		return (<div>
			<DisplayName name={window.name}/>
			<input ref={(el) => this.input = el } type="text"/>
			<button type="button" onClick={() => this.setName()}>Change Name</button>
		</div>)
	}
}

export default NameComponent;


