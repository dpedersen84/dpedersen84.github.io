import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="nav-wrapper white">
                    <div className="container">
                        <a href="About" className="brand-logo black-text">Dan Pedersen</a>
                            <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {/* <li><a className="black-text text-lighten-3" href="/About">About</a></li> */}
                                <li><a className="black-text text-lighten-3" href="/Projects">Projects</a></li>
                                <li><a className="blue-text text-lighten-3" href="mailto:dpedersen84@gmail.com">dpedersen84@gmail.com</a></li>
                            </ul>
                    </div>    
                </div>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="#">About</a></li>
                    <li><a href="portfolio.html">Projects</a></li>
                </ul>
            </nav>
        )
    }
};

export default Navbar;