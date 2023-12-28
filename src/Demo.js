import React from "react";

class Demo extends React.Component {
    state = {location: "A", count:1};
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);
        console.log(nextProps, nextState);
        return this.state.location !== nextState.location || nextState.count == 6;
    }

    // every component must have a render method
    render() {
        console.log("RENDER CALLED", this.state);
        const name = 'mike';
        // every render must return something always
        // every render should return only one html element
        return (
            <div>
                <h1> Demo Component </h1>
                <p>Some more content</p>
                {this.state.count > 5 ? <p>{name}</p>: null}
                <p>{name.toUpperCase()}</p>
                <p>{9+8}</p>
                <button onClick={() => this.setState({count: this.state.count+1})}>
                    Increment
                </button>
                <button onClick={() => this.setState({location:"A"})}>A</button>
                <button onClick={() => this.setState({location:"B"})}>B</button>
            </div>
        );
    }
}
export default Demo;