import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak (){
    document.write("HI, I am ",this.name, " and I'm ", this.age, " years old! <br><br>");
  }
}

const animal1 = new Animal('Simba',3);
animal1.speak();
console.log(animal1);

const animal2 = new Animal('Mufasa', 22);
animal2.speak();