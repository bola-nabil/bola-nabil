import React, { Component } from 'react';

class Resume extends Component {
    state = {  } 
    render() { 
        return (
            <div className='resume'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>Resume</h2>
                            <div className='insideText'>
                                <span className='first'>My </span>
                                <span className='second'>Resume</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;