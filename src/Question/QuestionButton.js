import React, { Component } from 'react';
//import './Question.css';
//import axios from 'axios';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
        Click me
        </a>
    );
}
