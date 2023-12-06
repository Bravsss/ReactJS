import React, {useState} from 'react';
import PropTypes from 'prop-types';
import profilePic from './assets/spongebob.jpg'; //intentionally using 1 pic for all students
import './index.css';

function Card ({id, name, birthday, quote}) {
    const [isSelected, setIsSelected] = useState(false);
  
    const toggleColor = () => {
      setIsSelected(!isSelected);
    };

    return (
        <div className={`card ${isSelected ? 'selected' : ''}`} onClick={toggleColor}>
            <img className="card-image" src={profilePic} alt="https://via.placeholder.com/150" />
            <h2 className="card-name">{name}</h2>
            <p>ID: {id}</p>
            <p>Birthday: {birthday}</p>
            <p>Quote: {quote}</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    birthday: PropTypes.string,
};

export default Card;