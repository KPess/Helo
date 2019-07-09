//initial state
const initialState = {
    username: '',
    user: [],
    posts: [],
}

//constants
const SET_USERNAME = "SET_USERNAME";
const SET_BALANCE = "SET_BALANCE";
const SET_USER = "SET_USER"
const GET_POSTS = "GET_POSTS"
const GET_SENT_TRANSACTIONS = "GET_SENT_TRANSACTIONS"
const GET_RCVD_TRANSACTIONS = "GET_RCVD_TRANSACTIONS"
const SET_INITIALSTATE = "SET_INITIALSTATE"


//action creators
export function resetReduxState() {
    return {
        type: SET_INITIALSTATE,
        payload: initialState

    }
}
export function setUsername(username) {
    return {
        type: SET_USERNAME,
        payload: username
    }
}
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        payload: posts
    }
}
export function getSentTransactions(sentTransactions) {
    return {
        type: GET_SENT_TRANSACTIONS,
        payload: sentTransactions
    }
}
export function getRcvdTransactions(rcvdTransactions) {
    return {
        type: GET_RCVD_TRANSACTIONS,
        payload: rcvdTransactions
    }
}
export function setBalance(balance) {
    return {
        type: SET_BALANCE,
        payload: balance
    }
}

//reducer
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_INITIALSTATE:
            return {
                username: '',
                user: [],
                posts: [],
            }

        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_SENT_TRANSACTIONS:
            return {
                ...state,
                sentTransactions: action.payload
            }
        case GET_RCVD_TRANSACTIONS:
            return {
                ...state,
                rcvdTransactions: action.payload
            }
        default: return state;
    }
}