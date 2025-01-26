// prop name de la team

import React from 'react';
import styles from './Title.module.css';



export function Team(props){
    return (
        
            <>
            <div onClick={props.onSelect}>
            <h1>{props.name}</h1>
            <h3>{props.motto}</h3>
            </div>

            </>

    );
}