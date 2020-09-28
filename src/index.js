import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import App from './components/app/App'
import './assets/scss/normalize.scss'
import './assets/scss/main.scss'

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
