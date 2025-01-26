import logo from './logo.svg';
import "./App.css";
import React from "react";
import { TeamList } from './components/TeamList';
import { PlayerList } from './components/PlayerList';
import { TitleApp } from './components/TitleApp';
import { AddNewTeam } from './components/AddNewTeam';




// fonction App permet d'afficher les composant de l'application

// Title 

// TeamList

// Teams doit contenir Usetate
// InitData

function App() {

  const [teams, setTeams] = React.useState(initData);

  const [players, setPlayers] = React.useState([]);

  const [newTeamName, setNewTeamName] = React.useState("");


  function initData() {
    let teams = [
      {
        id: 1,
        name: "PSG",
        motto: "Ici c'est Paris",
        players: [
          { id: 1, name: "Neymar" },
          { id: 2, name: "Mbappe" },
          { id: 3, name: "Messi" },
        ],
      },
      {
        id: 2,
        name: "OM",
        motto: "Droit au but",
        players: [
          { id: 10, name: "Payet" },
          { id: 20, name: "Milik" },
          { id: 30, name: "Gerson" },
        ],
      },
      {
        id: 3,
        name: "OL",
        motto: "Un club, une ville, un stade",
        players: [
          { id: 1, name: "Depay" },
          { id: 2, name: "Aouar" },
          { id: 3, name: "Slimani" },
        ],
      },
      {
        id: 4,
        name: "DFCO",
        motto: "On ne lache rien",
        players: [
          { id: 100, name: "Konaté" },
          { id: 200, name: "Ecuele Manga" },
          { id: 300, name: "Lautoa" },
        ],
      },
      {
        id: 5,
        name: "Genlis",
        motto: "Tous ensemble",
        players: [
          { id: 1000, name: "Royer" },
          { id: 2000, name: "Turrel" },
          { id: 3000, name: "Girard" },
        ],
      },
    ];
    teams.forEach((team) => {
      team.players.forEach((player) => {
        player.team = team;
      });
    });

    return teams;
  }

  function selectPlayers(id) {
    const selectedTeam = teams.find(team => team.id === id);
    if (selectedTeam) {
      setPlayers(selectedTeam.players);
    }
  }

function addNewTeam() {
  if (newTeamName.trim() === "") {
    alert("Veuillez saisir un nom d'équipe");
    return;
  }

  const newTeam = {
    id: teams.length + 1,
    name: newTeamName,
    motto: "Nouvelle équipe",
    players: [],
  };

  setTeams([...teams, newTeam]);
  setNewTeamName("");
}






  return (
    <div className="App">
      <TitleApp />
      <AddNewTeam

      // Passe la valeur de newTeamName à AddNewTeam
      newTeamName = {newTeamName}
      onNewTeamNameChange={(e) => setNewTeamName(e.target.value)} 

      // Passe la fonction addNewTeam à AddNewTeam
      onAddNewTeam={addNewTeam}
      
      />
      <div className="TeamContainer">
      <TeamList 
      
      // Attribut du composant teams
      teams = {teams} onSelect = {selectPlayers} />
      
      </div>
      

      <div className="PlayerContainer">
        <PlayerList 

        players = {players}

        />
      </div>

    </div>
  );
}



export default App;
