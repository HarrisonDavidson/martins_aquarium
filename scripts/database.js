const database = {
    fish: [
        {
            name: "Gary",
            species: "Spotted Clownfish",
            food: "crustaceans",
            harvest: "Caribbean",
            size: 3
},
        {
            name: "Sherry",
            species: "Purple-headed Goldfish",
            food: "seaweed",
            harvest: "Atlantic",
            size: 4,
},
        {
            name: "Chester",
            species: "Zebra Puffer",
            food: "plankton",
            harvest: "Lake Imogen",
            size: 1
},
        {
            name: "Percy",
            species: "Pancake Grouch",
            food: "hatred, spite",
            harvest: "Tal'Dorei",
            size: 5
}
    ]
}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}