export function AddNewTeam(props) {
    return (
        <div>
            <input type="text" value={props.newTeamName} onChange={props.onNewTeamNameChange} />
            <button onClick={props.onAddNewTeam}>Add Team</button>
        </div>
    );
}