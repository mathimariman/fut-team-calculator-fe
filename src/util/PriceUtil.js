export const calculate = (bank, players) => {
    let buying = calculateByPlayerState(players, 'BUYING');
    let selling = calculateByPlayerState(players, 'SELLING');
    return bank - buying + (selling * 0.95);
};

const calculateByPlayerState = (players, playerState) => {
    return players
        .filter(player => player.state === playerState)
        .map(player => player.price)
        .reduce((a, b) => a + b, 0);
}
