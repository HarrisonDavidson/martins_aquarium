const database = {
    fish: [
        {
            name: "Gary",
            species: "Spotted Clownfish",
            food: "crustaceans",
            harvest: "Caribbean",
            size: 3,
            image: 'https://i.ibb.co/5LKqHD8/fish3.png'
},
        {
            name: "Sherry",
            species: "Purple-headed Goldfish",
            food: "seaweed",
            harvest: "Atlantic",
            size: 4,
            image: 'https://i.ibb.co/n11B9K1/fish5.jpg'
},
        {
            name: "Chester",
            species: "Zebra Puffer",
            food: "plankton",
            harvest: "Lake Imogen",
            size: 1,
            image: 'https://i.ibb.co/cLXV1x9/fish.jpg'
},
        {
            name: "Percy",
            species: "Pancake Grouch",
            food: "hatred and spite",
            harvest: "Tal'Dorei",
            size: 5,
            image: 'https://i.ibb.co/gdqmB28/fish4.jpg'
}
    ]
}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}