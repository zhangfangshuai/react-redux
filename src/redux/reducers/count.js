

import { INCREMENT, DECREMENT } from "../constant"

const initState = 0

export default function CountReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        // 计算
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        // 未传入动作对象，则初始化数据
        default:
            return preState
    }
}
