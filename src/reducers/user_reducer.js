import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        
        case types.SIGN_IN_CHECK:

            return {...state, auth: action.payload.data.authenticated}
        case types.SIGN_OUT:
            // return {...state, auth:action.payload.data.false}
        default:
            return state
    }
}