/****************************************
* The top event
* created by chaixiaoduo@126.com
* 2018-06-19 17:33:19
****************************************/

import * as actionType from './actionType'
import * as cf from '../../config/config'


/**
 * Get the version number
 */
export function getVersion():any {
    return (dispatch: any) => {
        dispatch({type: actionType.GET_VERSION, value: cf.version})
    }
}


/**
 * Update the main background table width
 * @param {number} w grid width
 */
export function upDateGrid(w:number):any {
    return (dispatch: any) => {
        dispatch({type: actionType.BACKGROUND_GRID, value: w})
    }
}