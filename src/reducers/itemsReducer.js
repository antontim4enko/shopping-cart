import { SUCCES } from "../constans/ActionTypes";

// const initialState = null;

const initialState = [
    {
        id: 122467654,
        price: 2500,
        text: 'iPhone 3',
        category: 'Phones'
    },
    {
        id: 14447799,
        price: 2000,
        text: 'Xiomi REDMI 4',
        category: 'Phones'
    },
    {
        id: 6784922254,
        price: 1000,
        text: 'Samsung Galaxy A5',
        category: 'TV'
    },
    {
        id: 77998845112,
        price: 5000,
        text: 'Meizu m9',
        category: 'Phones'
    },
    {
        id: 12345435111121,
        price: 900,
        text: 'Iphone X',
        category: 'Phones'
    },
    {
        id: 1111777,
        price: 7800,
        text: 'Xiomi MI Air',
        category: 'TV'
    }
]

export default function (state = initialState, action) {
    switch (action.type) {
        case SUCCES:
            return action.payload
        default:
            return state;
    }
}