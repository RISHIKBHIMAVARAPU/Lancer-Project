import { createStore } from "redux";

const initialstate = {validauth1 : false, validauth2 : false};

const reducer = (state = initialstate,action) => {
    if (action.type === "setTrue1") {
        return {
            ...state,
            validauth1 : true
        }
    }
    if (action.type === "setTrue2") {
        return {
            ...state,
            validauth2 : true
        }
    }
    if(action.type === "setFalse1") {
        return {
            ...state,
            validauth1 : false
        }
    }
    if(action.type === "setFalse2") {
        return {
            ...state,
            validauth2 : false
        }
    }
    return state
}

const store = createStore(reducer)
export default store