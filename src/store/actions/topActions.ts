/****************************************
* topAction 顶层事件
* created by chaixiaoduo@126.com
* 2018-06-19 17:33:19
****************************************/

import * as actionType from './actionType'

export function getVersion(version: number):any {
    return (dispatch: any) => {
        if(typeof version != 'number')  
            throw "wrong type for version";
        version += 1
        dispatch({type: actionType.GET_VERSION, value: version})
    }
}