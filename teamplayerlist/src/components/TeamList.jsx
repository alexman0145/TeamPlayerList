// Render de TeamList

import React from 'react';
import { Team } from './Team';



// Affiche la liste des équipes 


export function TeamList(props) {
    return (
        <div>
            {props.teams.map((team) => (
                <Team key={team.id} id={team.id} name={team.name} motto={team.motto} onSelect={() => props.onSelect(team.id)} />
            ))}

        </div>
        
    );
}