import React, { Component } from 'react';
const TITLE  = [
    'a Software Developer',
    'Tech enthusiast',
    'Music Lover'
];

class Title extends Component {
    state = { titleIndex: 0 };
    
    componentDidMount(){
        console.log('Component did mount');

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('Component will be unmounted');

        clearInterval(this.titleInterval);
    }

    animateTitles = () =>{
        this.titleInterval = setInterval(() => {
            
            const titleIndex = ( this.state.titleIndex + 1 ) % TITLE.length;

            this.setState({ titleIndex });
            
        },4000)
    }

    render() {
        console.log('this.state', this.state);
        const title = TITLE[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;