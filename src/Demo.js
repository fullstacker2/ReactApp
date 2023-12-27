import React from "react";

class Demo extends React.Component {
    // every component must have a render method
    render() {
        const name = 'mike';
        // every render must return something always
        // every render should return only one html element
        return (
            <div>
                <h1> Demo Component </h1>
                <p>Some more content</p>
                <p>{name}</p>
                <p>{name.toUpperCase()}</p>
                <p>{9+8}</p>
            </div>
        );
    }
}
export default Demo;