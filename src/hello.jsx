import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (name) =>{
    return(
        <div>Hello {name} how are you</div>
    )
}

const view = Hello("Borche");

const element = document.getElementById("app");

ReactDOM.render(view,element);