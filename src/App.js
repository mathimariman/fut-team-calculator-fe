import './App.css';
import PlayerSearch from "./components/players/player-search";
import {Fragment, useState} from "react";
import PlayerOverview from "./components/players/player-overview";
import PriceOverview from "./components/bank/price-overview";

function App() {
    const [players, setPlayers] = useState([]);
    const [bank, setBank] = useState(0);

    return (
        <Fragment>
            <PriceOverview players={players} bank={bank} setBank={setBank}/>
            <PlayerSearch setPlayers={setPlayers}/>
            <PlayerOverview players={players} setPlayers={setPlayers}/>
        </Fragment>
    );
}

export default App;
