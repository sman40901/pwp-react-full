
const ADD_BIRD = 'ADD_BIRD';



export function addBird(bird) {
    return {
        type: 'ADD_BIRD',
        bird,
    }
}


const defaultBirds = [
    {
        name: 'robin',
        views: 1,
    }
];

function birds(state = defaultBirds, action) {
    // depending upon the action type
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state, // takes previous state
                {
                    name: action.bird, // adds new item to previous state
                    views: 1
                }
            ];
        default:
            return state; // returns state as is, if there is no specified action found
    }

}