import './App.css';
import PlayerSearch from "./components/search/player-search";
import {Fragment, useState} from "react";
import PlayerOverview from "./components/players/overview/player-overview";
import initialData from "./data";

function App() {
    const [state, setState] = useState(initialData);

    return (
        <Fragment>
            <PlayerSearch setState={setState}/>
            <PlayerOverview state={state} setState={setState}/>
        </Fragment>
    );
}

export default App;
