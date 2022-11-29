import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <h2>React-Redux实现多组件数据共享</h2>
                <Count />
                <div className="split"></div>
                <Person />
            </div>
        )
    }
}
