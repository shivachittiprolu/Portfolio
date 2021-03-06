import React, { Component } from 'react';

const Joke = ({ joke }) => {
    const { setup, punchline } = joke;

    return <p>{setup} <em>{punchline}</em></p>
}
class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke/')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }));
    }

    fetchjokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten/')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }));
    }



    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <button onClick={this.fetchjokes}> Click Me</button>
                {this.state.jokes.map(joke =>{return <Joke key={joke.id} joke={joke} />  })
                }
            </div>
        )
    }
}

export default Jokes;