import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';

export default function PlayerSearch({setState}) {

    const addPlayerToPool = (player) => {
        let url = `http://localhost:3000/price?playerId=${player.id}`;
        fetch(url)
            .then(resp => resp.json())
            .then(resp => player.price = resp.price)
            .then(() => setState((state) => {

                const playerPoolColumn = state.columns['PLAYERPOOL'];

                const newPlayerPoolColumn = {
                    ...playerPoolColumn,
                    playerIds: [...playerPoolColumn.playerIds, player.id]
                };

                const newState = {
                    ...state,
                    players: {
                        ...state.players,
                        [player.id]: player
                    },
                    columns: {
                        ...state.columns,
                        ['PLAYERPOOL']: newPlayerPoolColumn
                    }
                };
                console.log(newState);
                return newState;
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
