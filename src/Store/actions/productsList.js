import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const productSelected = (product, amount) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        product: product,
        amount: amount
    }
}

export const productDeleted = (productName, product) => {
    return {
        type : actionTypes.DELETE_PRODUCT,
        productName : productName,
        product : product
    }
}

export const productClicked = (product) => {
    return {
        type: actionTypes.CLICKED_PRODUCT,
        product: product
    }
}

export const changeItemAmount = (amount, product) => {
    return {
        type: actionTypes.CHANGE_AMOUNT,
        product,
        amount
    }
}

export const addProductStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_START
    }
}

export const addProductFail = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_FAIL,
        error
    }
}

export const addProductSuccess = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        product
    }
}

export const addProduct = (product) => {
    return dispatch => {
        dispatch(addProductStart())
        axios.post("/products.json", product)
            .then((res) => {
                dispatch(addProductSuccess(product));
                console.log(res)
            })
            .catch(error => dispatch(addProductFail(error)))
    }
}

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error
    }
}

export const fecthProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart())
        axios.get("/products.json")
            .then(response => {
                const fetchedProducts = []
                for (const key in response.data) {
                    fetchedProducts.push({
                        ...response.data[key]
                    })
                }
                dispatch(fecthProductsSuccess(fetchedProducts))
            })
            .catch(error => {
                dispatch(fetchProductsFail(error))
            })
    }
}

export const closeModal = () => {
    return {
        type:actionTypes.CLOSE_MODAL
    }
}

export const openModal = () => {
    return {
        type:actionTypes.OPEN_MODAL
    }
}

export const addRecipeName = (recipeName) => {
    return {
        type: actionTypes.ADD_RECIPE_NAME,
        recipeName: recipeName
    }
}