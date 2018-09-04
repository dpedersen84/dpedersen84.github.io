import React from "react";
import data from "../../projects.json"

class Projects extends React.Component {

    state = {
        data,
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col m10 s1">
                        <p className="grey-text text-darken-3 lighten-3">
                            <h3>Projects</h3>
                            
                                { this.state.data.map(app => (
                                    <div className="col s12 m6">
                                        {/* <h5>{app.name}</h5> */}
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={app.image} className="responsive-img"></img>
                                                <span class="card-title">{app.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                )}
                            
                            
                            
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Projects