import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'

class Count extends Component {

    state = {
        // UI组件私用的状态
    }

    increment = () => {
        const { value } = this.selectNode
        this.props.increment(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNode
        this.props.decrement(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNode
        if (this.props.count % 2 !== 1) {
            this.props.increment(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNode
        this.props.incrementAsync(value * 1, 500)
    }


    render() {
        const { userList, count } = this.props
        return (
            <div>
                <h2>求和组件；下方Person组件总人数为：{userList.length}</h2><br />
                <h3>当前求值为：{count}</h3>
                <select ref={c => this.selectNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &emsp;
                <button onClick={this.increment}>+</button> &emsp;
                <button onClick={this.decrement}>-</button> &emsp;
                <button onClick={this.incrementIfOdd}>求和为奇数时加</button> &emsp;
                <button onClick={this.incrementAsync}>异步加</button> &emsp;
            </div>
        )
    }
}

// Count的容器组件
// state是redux帮你保存的总状态，包含各个组件存储在redux中的state
export default connect(
    // 映射状态
    state => ({
        count: state.count, // 拿到count保存在redux中的state
        userList: state.persons // 拿到person保存redux中的state
    }),
    // 映射操作状态的方法
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)


