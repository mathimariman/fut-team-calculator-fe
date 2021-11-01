import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';

export default function PlayerSearch({setPlayers}) {

    let selectedValue = null;

    const addPlayerToPool = (player) => {
        if (player && player.id) {
            let url = `http://localhost:3000/price?playerId=${player.id}`;
            fetch(url)
                .then(resp => resp.json())
                .then(resp => player.price = resp.price)
                .then(() => setPlayers((players) => {
                    if (!players.find(p => p.id === player.id)) {
                        player.state = 'PLAYERPOOL';
                        return [...players, player];
                    } else {
                        return players;
                    }
                }));
        }
    }

    const clearSelectedValue = () => {
        selectedValue = null;
    }


    const fetchPlayers = debounce(playerName => {
        if (playerName) {
            let url = `http://localhost:3000/search?playerName=${playerName}`;
            return fetch(url)
                .then(resp => resp.json());
        }
    }, 300);

    return (
        <div>
            <AsyncSelect onMenuClose={clearSelectedValue} loadOptions={fetchPlayers} onChange={addPlayerToPool}
                         value={selectedValue}/>
        </div>
    );
}
