import React from 'react';
import { Player } from './Player';

export function PlayerList(props) {
    return (

        <div>
            {props.players.map((player) => (
                <Player key={player.id} id={player.id} name={player.name} score={player.score}/>
            ))}
        </div>
    );
}