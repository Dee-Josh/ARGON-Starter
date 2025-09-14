import { useState } from "react"

const today = new Date().toDateString();

const habitArray = [
    {
        title: "Do this Once",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 0,
        idd: "hfffhh",
    },
    {
        title: "Do this Twice",
        description: "Drink 25 million gallons of water.",
        streak_count: 1,
        frequency: "Daily",
        // date_completed: "",
        date_completed: today,
        id: 1,
        idd: "hfhfhfh",
    },
    {
        title: "Do this Thrice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 2,
        idd: "hfhfhfffh",
    },
    {
        title: "Do this Four-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 3,
        idd: "hfhfhfjfjh",
    },
    {
        title: "Do this Five-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 4,
        idd: "hfhfhjkkffh",
    },
    {
        title: "Do this Six-ice",
        description: "Drink 25 million gallons of water.",
        streak_count: 0,
        frequency: "Daily",
        date_completed: "",
        id: 5,
        idd: "kfkf",
    },
];


const HabitComp = (props: any)=> {

    const habitArray = useState([
        {
            title: "Do this Once",
            description: "Drink 25 million gallons of water.",
            streak_count: 0,
            frequency: "Daily",
            date_completed: "",
            id: 0,
            idd: "hfffhh",
        },
        {
            title: "Do this Twice",
            description: "Drink 25 million gallons of water.",
            streak_count: 1,
            frequency: "Daily",
            // date_completed: "",
            date_completed: today,
            id: 1,
            idd: "hfhfhfh",
        },
        {
            title: "Do this Thrice",
            description: "Drink 25 million gallons of water.",
            streak_count: 0,
            frequency: "Daily",
            date_completed: "",
            id: 2,
            idd: "hfhfhfffh",
        },
        {
            title: "Do this Four-ice",
            description: "Drink 25 million gallons of water.",
            streak_count: 0,
            frequency: "Daily",
            date_completed: "",
            id: 3,
            idd: "hfhfhfjfjh",
        },
        {
            title: "Do this Five-ice",
            description: "Drink 25 million gallons of water.",
            streak_count: 0,
            frequency: "Daily",
            date_completed: "",
            id: 4,
            idd: "hfhfhjkkffh",
        },
        {
            title: "Do this Six-ice",
            description: "Drink 25 million gallons of water.",
            streak_count: 0,
            frequency: "Daily",
            date_completed: "",
            id: 5,
            idd: "kfkf",
        },
    ]);


    return(
        {habitArray}
    )
}


export default habitArray; HabitComp;