import React, { Component } from 'react';

class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <div className='projects'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>Projects</h2>
                            <div className='insideText'>
                                <span className='first'>My </span>
                                <span className='second'>Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;