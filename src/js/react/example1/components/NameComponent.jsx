import React from "react";

const DisplayName = (props) => {
	return (<div><img src="avatar.png"/> Hello {props.name}</div>)
};


class NameComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: "John Doe"}
	}

	setName() {
		this.setState({
			name: this.inputRef.value
		});
	}

	render() {
		return (<div>
			<DisplayName name={this.state.name}/>
			<input ref={(el) => this.inputRef = el } type="text"/>
			<button type="button" onClick={() => this.setName()}>Change Name</button>
		</div>)
	}
}

export default NameComponent;


