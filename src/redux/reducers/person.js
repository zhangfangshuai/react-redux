import { ADDPERSON } from '../constant'

// 初始化人员列表
const initState = []

// 创建并导出reducer
export default function PersonReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADDPERSON:
            // preState.unshift(data) return preState
            // 这种写法有问题，因为redux在底层做了浅比较判断，即数据未变更不更新store。
            // 如果preState是引用数据类型，则浅比较的是变量的地址，也就是说数组还是那个数组，只是里面的数据变了，那么redux也认为preState没变，因此不更新store
            // 也就是说不能先改preState再最终返回preState。
            // 不仅redux如此，react在某些地方也有类似逻辑，因此最好不要返回原引用类型变量
            // 【官方说法】：reducer必须时纯函数
            return [data, ...preState]
        default:
            return preState
    }
}
