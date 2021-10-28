import './App.css';
import PlayerSearch from "./components/players/player-search";
import {Fragment, useState} from "react";
import PlayerOverview from "./components/players/player-overview";
import initialData from "./data";

function App() {
    const [players, setPlayers] = useState(initialData);

    return (
        <Fragment>
            <PlayerSearch setPlayers={setPlayers}/>
            <PlayerOverview players={players} setPlayers={setPlayers}/>
        </Fragment>
    );
}

export default App;
