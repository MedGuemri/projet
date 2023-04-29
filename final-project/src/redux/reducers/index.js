import {combineReducers} from "redux"
import {productReducer, selectedProductReducer} from "./productReducer"

  const rootreducer = combineReducers({

    allProducts : productReducer,
    product : selectedProductReducer
  }
  )

  
  export default rootreducer