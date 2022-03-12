import React from "react";
//import { Component } from "react";
import './robotphoto.css';

const card = ({id, name, email}) => {
    return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                    <img src={`https://robohash.org/${id}`} alt="RoboPic"/>
                        <div className='bg-light-green'>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
            </div>
        );
}

export default card;