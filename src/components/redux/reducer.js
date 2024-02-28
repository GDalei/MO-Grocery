import { combineReducers } from 'redux';
const initState = {
    item: 0,
    price: 0,
    address: "",
    orderConformation: false,

}
const loginPopUpShowHideState = {
    typeName: "login",
}
const userInfoState = {
    name: "",
    pin: "",
    addressList: [],
    currentAddress: "",
    isLogin: false,
}

const globalProductList = {
    allProduct: []
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
        case "ORDER_CONFORMATION_ALERT":
            return {
                ...state,
                orderConformation: action.payload
            }
        default:
            return state;
    }
}
const loginPopUpShowHide = (state = loginPopUpShowHideState, action) => {
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
                addressList: [...state.addressList, action.payload]
            }
            break;
        case "SELECTED_ADDRESS":
            return {
                ...state,
                currentAddress: action.payload,
            }
            break;
        case "USER_NAME":
            return {
                ...state,
                name: action.payload,
            }
            break;
        case "LOGGED_IN":
            return {
                ...state,
                name: "sample",
                pin: "3624",
                addressList: [],
                currentAddress: "",
                isLogin: true,
            }
            break;
        case "LOGGED_OUT":
            return {
                ...state,
                name: "",
                pin: "",
                addressList: [],
                currentAddress: "",
                isLogin: false,
            }
        default:
            return state;
    }
}
const getGlobalProduct = (state = globalProductList, action) => {
    switch (action.type) {
        case "FEATCH_ALL_PRODUCT":
            return {
                allProduct: [action.payload]
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    addCartReducer,
    loginPopUpShowHide,
    userInfo,
    getGlobalProduct
})
export default rootReducer