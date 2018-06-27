/****************************************
* topAction 顶层事件
* created by chaixiaoduo@126.com
* 2018-06-19 17:33:19
****************************************/

import * as actionType from './actionType'
import * as cf from '../../config/config'


export function getVersion():any {
    return (dispatch: any) => {
        dispatch({type: actionType.GET_VERSION, value: cf.version})
    }
}