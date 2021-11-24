import { CounteAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state:CounterState, action:CounteAction): CounterState=>{
    switch (action.type) {
        case 'reset':
            return {
                ...state,
                counter :0,
                previous:0,
                changes :0
            }    
        case 'increseBy':
            return{
                ...state,
                changes: state.changes +1,
                counter: state.counter + action.payload.value,
                previous: state.counter                
            }
        default:
            return state;
    }
}