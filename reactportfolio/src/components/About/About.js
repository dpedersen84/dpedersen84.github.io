import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="container white">
                <div className="row">
                    <div className="col m12 s1">
                    <div className="grey-text text-darken-3 lighten-3">
                            {/* <h3>Hi, I'm a programmer from St. Paul, Minnesota.
                            I can help you create your next project.</h3>
                            <h4>I design, build, and operate full-stack web applications.
                            Contact me @ <a href="mailto:dpedersen84@gmail.com" id="contact">dpedersen84@gmail.com</a></h4> */}
                            <h3>Hi, I'm a programmer from St. Paul, Minnesota.</h3>
                            <h3>I can help you create your next project.</h3>
                            <h4>I design, build, and operate full-stack web applications.</h4>
                            <h4>I have experience with JavaScript, Node, React, Express, MongoDB, SQL and Git.</h4>
                            <h4>Contact me @ <a href="mailto:dpedersen84@gmail.com" id="contact">dpedersen84@gmail.com</a></h4>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;