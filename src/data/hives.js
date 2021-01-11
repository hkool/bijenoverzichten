// bijenkasten.js - data uit de kasten
// in de toekomst komen deze gegevens uit een database
const hivesData = {
    hives: [
        {
            id: 1,
            datumtijd: 1609753137,
            plaats: "Gorinchem",
            regen: 0.5,
            licht: 5,
            co2: 536,
            luchtdruk: 0.2,
            windsterkte: 4,
            windrichting: 92,
            img:"klaverweg.png",
            signal:-1
        },
        {
            id: 2,
            datumtijd: 1609753137,
            plaats: "Vianen",
            regen: 0.5,
            licht: 3,
            co2: 540,
            luchtdruk: 0.4,
            windsterkte: 4,
            windrichting: 105,
            img:"klaverweg2.png",
            signal:-1
        },
        {
            id: 3,
            datumtijd: 1609753137,
            plaats: "Enspijk",
            regen: 0,
            licht: 7,
            co2: 536,
            luchtdruk: 0,
            windsterkte: 3,
            windrichting: 90,
            img:"klaverweg3.png",
            signal:-1
        }
    ]
}
export default hivesData;