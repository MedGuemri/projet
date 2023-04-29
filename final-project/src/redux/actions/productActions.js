import {SET_PRODUCTS , SELECTED_PRODUCTS } from "./actionsTypes"


export const setProducts = (products) =>{
    return {
        type : SET_PRODUCTS,
        payload : products
    }
};

export const selectedProduct = (products) =>{
    return {
        type : SELECTED_PRODUCTS , 
        payload : products
    }
};