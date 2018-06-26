/****************************************
* 创建store对象,以后在在此处添加 promise logger 中间件`
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