import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

    state = {
        // UI组件私用的状态
    }

    addPerson = () => {
        const { value: name } = this.nameNode
        const { value: age } = this.ageNode
        if (!name || !age) return
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
        // UI更新
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        const { userList, count } = this.props
        return (
            <div>
                <h2>Person组件；上方Count组件求和为：{count}</h2><br/>
                <input ref={c => this.nameNode = c} type="text" placeholder='请输入姓名' />&nbsp;
                <input ref={c => this.ageNode = c} type="text" placeholder='请输入年龄' />&emsp;

                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <header>人员列表：</header>
                    {
                        userList.length === 0 ?
                        <small>暂无数据</small> :
                            userList.map(user => {
                            return <li key={user.id}>{user.name}--{user.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


// 创建Person的容器组件
// state: redux帮你保存的总状态
// 第二个配置项是一种简写，全写和第一个一样，入参为dispatch，用于分发action，但这些react-redux插件都自动完成了
export default connect(
    // 映射状态
    state => ({
        count: state.count, // 拿到count保存在redux中的state
        userList: state.persons // 拿到person保存redux中的state
    }),
    // 映射操作状态的方法
    {
        addPerson
    }
)(Person)

