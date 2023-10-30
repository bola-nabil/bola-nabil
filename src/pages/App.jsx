import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/resume' element={<Resume/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
            </React.Fragment>
        );
    }
}

export default App;