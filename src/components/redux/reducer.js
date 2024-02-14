import { combineReducers } from 'redux';
const initState = {
    item: 0,
    price: 0,
    address: "",

}
const loginState = {
    typeName: "login",
}
const userInfoState = {
    name: "",
    pin: "",
    addressList: [],
    currentAddress: "",
    role: "",
}
const addCartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_CART":
            const cartPrice = state.price += action.payload
            return {
                ...state,
                price: cartPrice,
            }
            break;
        case "ADD_ITEM":
            return {
                ...state,
                item: state.item += 1
            }
            break;
        case "REMOVE_CART":
            return {
                ...state,
                price: state.price -= action.payload,
                item: state.item -= 1,
            }
        default:
            return state;
    }
}
const loginDetails = (state = loginState, action) => {
    switch (action.type) {
        case "USER_LOGIN":

            return {
                ...state,
                typeName: "login"
            }
            break;
        case "USER_REGISTOR":
            return {
                ...state,
                typeName: "registor",
            }
        default:
            return state;
    }
}

const userInfo = (state = userInfoState, action) => {
    switch (action.type) {
        case "CURRENT_ADDRESS":
            return {
                ...state,
                //currentAddress: action.payload,
                addressList: [...state.addressList, action.payload]
            }
            break;
        case "SELECTED_ADDRESS":
            return {
                ...state,
                currentAddress: action.payload,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    addCartReducer,
    loginDetails,
    userInfo
})
export default rootReducer