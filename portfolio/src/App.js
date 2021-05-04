import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio});
        
    }
    render() {
        return (
            <div>
                <h1>Hello!!</h1>
                <p>I'm <b>Shiva</b>, Software Developer!!</p>
                <p>I'm currently working in <b>Tata Co0nsultancy Services</b> as  <b>Systems Engineer</b>.</p>
                {this.state.displayBio ? (
                    <div><p> I love writing code and reading books</p>
                    <p>besides that , I love listening music too.</p>
                    <button onClick = {this.toggleDisplayBio}>Read less </button>
                    </div>
                    
                ): (
                    <div><button onClick = {this.toggleDisplayBio}>Read More </button></div>
                )
                }
                <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
            
        )
    }
}

export default App;