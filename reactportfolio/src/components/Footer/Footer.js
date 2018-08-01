import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h4 className="black-text">Dan Pedersen</h4>
                            <h5><a href="mailto:dpedersen84@gmail.com">dpedersen84@gmail.com</a></h5>
                                <p className="white-text text-lighten-4">I can help you build and grow your next project.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h4 className="black-text">Contact</h4>
                                <ul>
                                    <li><a className="white-text text-lighten-3" href="https://github.com/dpedersen84">GitHub</a></li>
                                    <li><a className="white-text text-lighten-3" href="https://stackoverflow.com/users/9231291/dan-pedersen?tab=profile">Stack Overflow</a></li>
                                    <li><a className="white-text text-lighten-3" href="https://www.linkedin.com/in/dpedersen84/">LinkedIn</a></li>
                                    <li><a className="white-text text-lighten-3" href="https://trello.com/danpedersen84">Trello</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright grey darken-3">
                    <div className="container white-text">
                        © 2018 Copyright Dan Pedersen
                        {/* <a className="black-text text-lighten-4 right" href="#!">More Links</a>  */}
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;