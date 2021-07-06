import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <Link to='/'>
            <button className='btn'>{props.phone}</button>
        </Link>
    )
}

export default Button;