const initialData = {
    players: {
        "188567": {
            id: "188567",
            label: "Pierre-Emerick Aubameyang",
            rating: 85,
            position: "ST",
            image: "https://futhead.cursecdn.com/static/img/22/players/188567.png",
            version: "NIF"
        },
        "193301": {
            id: "193301",
            label: "Alexandre Lacazette",
            rating: 82,
            position: "ST",
            image: "https://futhead.cursecdn.com/static/img/22/players/193301.png",
            version: "NIF"
        }
    },
    columns: {
        "PLAYERPOOL": {
            id: "PLAYERPOOL",
            title: "Player pool",
            playerIds: []
        },
        "SELLING": {
            id: "SELLING",
            title: "Selling",
            playerIds: ["188567"]
        },
        "BUYING": {
            id: "BUYING",
            title: "Buying",
            playerIds: ["193301"]
        }
    },
    columnOrder: ["PLAYERPOOL", "SELLING", "BUYING"]
};
export default initialData;
