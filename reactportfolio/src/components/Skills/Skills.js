import React from "react";

class Skills extends React.Component {

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="grey-text text-darken-3 lighten-3">
                                <h3>Skills</h3>
                                <h5>Here are a few things I consider myself good at.</h5>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="grey-text text-darken-3 lighten-3">
                                <h4>Project Management</h4>
                                <h6>I understand that there are steps inolved in a project and that 
                                you must have the ability stay clear and driven.</h6>
                                <h4>Communication</h4>
                                <h6>I use Slack daily to keep good communication.</h6>
                                <h4>Organization</h4>
                                <h6>I use Trello to keep my projects on-track and set with goals in mind.</h6>
                                <h4>Collaboration</h4>
                                <h6>I know when to ask for help and assist wherever I can.  Working well with others is an important
                                    part of solving problems.</h6>
                            </div>
                        </div>    
                    </div>
                    
                    
                </div>
        )
    }
}

export default Skills