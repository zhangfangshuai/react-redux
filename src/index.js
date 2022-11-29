import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        {/* 自动给app所有后代组件注入store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
