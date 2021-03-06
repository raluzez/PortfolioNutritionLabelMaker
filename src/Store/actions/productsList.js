import * as actionTypes from "./actionTypes";

export const productSelected = (product) => ({
  type: actionTypes.SELECT_PRODUCT,
  product
});

export const changeItemAmount = (amount, product) => ({
  type: actionTypes.CHANGE_AMOUNT,
  product,
  amount
});

export const fecthProductsSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products
});

export const fetchProductsFail = error => ({
  type: actionTypes.FETCH_PRODUCTS_FAIL,
  error
});

export const deleteProductSuccess = productKey => ({
  type: actionTypes.DELETE_PRODUCT_SUCCESS,
  productKey
});

export const deleteProductFail = err => ({
  type: actionTypes.DELETE_PRODUCT_FAIL,
  err
});

export const editProductSuccess = product => ({
  type: actionTypes.EDIT_PRODUCT_SUCCESS,
  product
});

export const editProductFail = err => ({
  type: actionTypes.EDIT_PRODUCT_FAIL,
  err
});

export const saveProductSuccess = product => ({
  type: actionTypes.SAVE_PRODUCT_SUCCESS,
  product
});

export const saveProductFail = err => ({
  type: actionTypes.SAVE_PRODUCT_FAIL,
  err
});

export const removeSelectedItem = productKey => ({
  type: actionTypes.REMOVE_SELECTED_ITEM,
  productKey
})

export const resetCreateRecipe = () => ({
  type: actionTypes.RESET_CREATE_RECIPE
})
