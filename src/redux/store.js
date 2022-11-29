/**
 * @func 创建store
 * @desc 整个应用只有一个store
 * @desc 多个reducer使用combineReducers进行合并
 */

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import { configureStore } from '@reduxjs/toolkit'
import count from './reducers/count'
import persons from './reducers/person'

// const rootReducer = combineReducers({
//     count: CountReducer,
//     person: PersonReducer
// })
// export default createStore(rootReducer, applyMiddleware(thunk))

/**
 * @func 使用redusjs/toolkit简化以上步骤
 */
export default configureStore({
    reducer: {
        count,
        persons
    }
})
