import React from "react";
import "./Jumbotron.css";

class Jumbotron extends React.Component {
    render() {
        return (
                <div 
                    className="jumbotron" 
                    style={{ backgroundImage: `url(${this.props.backgroundImage})` }} >
                </div>
        )
    }
};

export default Jumbotron;