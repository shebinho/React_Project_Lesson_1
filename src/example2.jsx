import React from 'react';
import ReactDOM from 'react-dom'

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element
        }

        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
    }

    componentWillMount() {
        this.focusTextInput();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef} />
                <input type="button" value="focus the text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: "100" }} onMouseMove={this.handleMouseMove}>
                <h1>Mouse move around the screen</h1>
                <p>Current mouse position is {this.state.x}, {this.state.y}</p>
            </div>
        )
    }




}

ReactDOM.render(<CustomTextInput />, document.getElementById("app"));
