
import {INCREMENT, DECREMENT} from '../constant'

// 同步action：action的值为Object类型的一般对象
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })

// 异步action
export const incrementAsync = (data, wait) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, wait)
    }
}
