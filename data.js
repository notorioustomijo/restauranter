import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozarella"],
        id: 0,
        price: 14,
        image: "./images/ivan-torres-MQUqbmszGGM-unsplash.jpg",
        altText: 'Pizza mozarella on a wooden plate',
        uuid: uuidv4(),
        amount: 0
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        image: "./images/quentin-lagache-5PFQXDxOHBU-unsplash.jpg",
        altText: 'Hamburgers on a plate on a wooden table',
        id: 1,
        uuid: uuidv4(),
        amount: 0
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        image: "./images/timothy-hales-bennett-EoC_IuYmtug-unsplash.jpg",
        altText: 'Beer glasses full of a beer on a wooden plate',
        id: 2,
        uuid: uuidv4(),
        amount: 0
    }
]