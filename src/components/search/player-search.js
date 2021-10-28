import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';

export default function PlayerSearch({setPlayers}) {

    const addPlayerToPool = (player) => {
        let url = `http://localhost:3000/price?playerId=${player.id}`;
        fetch(url)
            .then(resp => resp.json())
            .then(resp => player.price = resp.price)
            .then(() => setPlayers((players) => {
                player.state = 'PLAYERPOOL';
                return [...players, player];
            }));
    }

    const fetchPlayers = debounce(playerName => {
        let url = `http://localhost:3000/search?playerName=${playerName}`;
        return fetch(url)
            .then(resp => resp.json());
    }, 300);

    return (
        <div>
            <AsyncSelect defaultOptions loadOptions={fetchPlayers} onChange={addPlayerToPool}/>
        </div>
    );
}
