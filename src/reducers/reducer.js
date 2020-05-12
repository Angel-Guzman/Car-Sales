import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions.js';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            console.log('adding feature', action.payload)
            if (state.car.features.includes(action.payload)) {
                alert(`${action.payload.name} has already been added`)
                return {
                    ...state
                }
            }
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            }
        case REMOVE_FEATURE:
            console.log('removing feature', action.payload)
            const desiredFeatures = state.car.features.filter(feature => feature !== action.payload) 
                return {
                    ...state,
                    car: {
                        ...state.car,
                        features: desiredFeatures
                    }
                }
        
        default:
        return state
    }
}