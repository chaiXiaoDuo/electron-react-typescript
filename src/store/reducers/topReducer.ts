/****************************************
* 顶层处理器 topReducer
* created by chaixiaoduo@126.com
* 2018-06-21 16:14:04
****************************************/
import * as actionType from '../actions/actionType'
import * as Immutable from 'immutable'

interface Action {
    type: string;
    value: number;
}

const State = Immutable.fromJS({
    version: 1
})

const topReducer = ( state = State, action: Action ):any => {
    switch (action.type) {
        case actionType.GET_VERSION:
            return state.set('version', action.value)
        break;
    }
    return state
}

export default topReducer