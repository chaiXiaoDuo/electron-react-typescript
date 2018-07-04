/****************************************
* Create the store object and add the promise logger middleware here later
* created by chaixiaoduo@126.com
* 2018-06-21 17:16:17
****************************************/
import { createStore, applyMiddleware } from 'redux'

import reducers from '../store/reducers'
import thunk from 'redux-thunk'


const store = createStore(
    reducers,applyMiddleware(thunk)
)


export default store;