import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import ProfileImage from '../src/assets/profile.png';
import Title from './Title';
// import Jokes from './Jokes';

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });

    }
    render() {
        return (
            <div>
                <img src={ProfileImage} alt='Profile' className='profile'/>
                <h1>Hello!!</h1>
                <p>I'm Shiva, Software Developer.</p>
                < Title />
                <p>I'm currently working in Tata Consultancy Services as  Systems Engineer.</p>
                {this.state.displayBio ? (
                    <div><p> I love writing code and reading books</p>
                        <p>besides that , I love listening music too.</p>
                        <button onClick={this.toggleDisplayBio}>Read less </button>
                    </div>

                ) : (
                    <div><button onClick={this.toggleDisplayBio}>Read More </button></div>
                )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                {/* <Jokes /> */}
            </div>

        )
    }
}

export default App;