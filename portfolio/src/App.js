import React, { Component } from 'react';

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
                <h1>Welcome to React!!</h1>
                <p>I'm Shiva, Software Developer!!</p>
                <p>Is it working fine ? </p>
                {this.state.displayBio ? (
                    <div><p> I love writing code and reading books</p>
                    <p>besides that , I love listening music too.</p>
                    <button onClick = {this.toggleDisplayBio}>Read less </button>
                    </div>
                    
                ): (
                    <div><button onClick = {this.toggleDisplayBio}>Read More </button></div>
                )
                }
            </div>
        )
    }
}

export default App;