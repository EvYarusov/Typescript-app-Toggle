import React from 'react';
import { useState } from 'react';

function Toggle() {

    let [greetings, setGreetings] = useState("Hi");
    let toggle = true;

    function handleButtonClick(): void {
        if (toggle) {
            setGreetings("Bye");
            toggle = false;
        } else {
            setGreetings("Hi");
            toggle = true;
        }
    }

    return (
        <div className='mainBox'>
            <h1>HW "Toggle"</h1>
            <div>{greetings}</div>
            <button onClick={handleButtonClick}>Change</button>
        </div>
    );
}
export default Toggle;