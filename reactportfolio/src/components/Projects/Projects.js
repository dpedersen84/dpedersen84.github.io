import React from "react";
import data from "../../projects.json"
import "./Projects.css"
class Projects extends React.Component {

    state = {
        data,
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    {/* <div className="col m10 s1"> */}
                        {/* <p className="grey-text text-darken-3 lighten-3"> */}
                            <h3 className="grey-text text-darken-3 lighten-3">Projects</h3>
                            
                                { this.state.data.map(app => (
                                    <div className="col s12 m4">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={app.image} className="responsive-img" id={app.name}></img>
                                                <span class="card-title">{app.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                )}
                            <p className="grey-text text-darken-3 lighten-3"><a href="dpedersen84.github.io/projects" style={{ marginLeft: 15 }}>All Projects</a></p>
                            
                            
                        {/* </p> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
};

export default Projects