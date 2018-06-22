import {
    DELETE_CLIENT_ERROR,
    DELETE_CLIENT_REQUEST,
    DELETE_CLIENT_SUCCESS,
    TOGGLE_CLIENT_VIEW
} from '../actions/clients';

const initialState = {
    clients: [],
    error: null,
    loading: null,
    toggle: false
}

export default function clientsReducer(state=initialState, action) {
    if (action.type === DELETE_CLIENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === DELETE_CLIENT_SUCCESS) {
        return Object.assign({}, state, {
            clients: action.clients,
            loading: false,
            error: null
        });
    }
    else if (action.type === DELETE_CLIENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === TOGGLE_CLIENT_VIEW) {
        return Object.assign({}, state, {
            toggle: action.boolean
        });
    }
    return state;
} 