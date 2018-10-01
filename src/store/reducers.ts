import { ADD_TODO, REMOVE_TODO } from "./actions";

export const initialState = {
    loaded: false,
    loading: false,
    data: [{
        label: 'Eat pizza', complete: false
    }]
};

export function reducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
        case ADD_TODO: {
            const todo = action.payload;
            const data = [...state.data, todo];
            return {
                ...state,
                data
            }
        }
        case REMOVE_TODO: {
            const todo = action.payload;
            const data = state.data.filter(item => item.label !== todo.label);
            console.log('REMOVE_TODO:::', todo, data);
            return {
                ...state,
                data
            }
        }
    }
    return state;
}