import Card from './Card.jsx';
import React from 'react';
import './index.css';
  
function App () {
    return (
        <>
            <h1>Student Cards</h1>
            <Card name="Christian Bravo" id={1} birthday="April 1, 2001" quote="It\'s the season of giving, so I\'m giving up." />
            <Card name="Bravito Axle" id={2} birthday="December 2, 2000" quote="Time is a waste of life, and life is a waste of time. Get wasted all the time, and you\'ll have the time of your life!" />
        </>
    );
};

export default App;