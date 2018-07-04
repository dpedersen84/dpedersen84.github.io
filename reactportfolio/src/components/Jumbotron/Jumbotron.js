import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
                <div 
                    className="jumbotron" 
                    style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
                    <h1>Test</h1>
                </div>
        )
    }
};

export default Jumbotron;