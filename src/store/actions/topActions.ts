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

/**
 * update main workstage
 * @param {boolean} b 
 */
export function updateStartWork(b:boolean):any {
    return (dispatch: any) => {
        dispatch({type: actionType.START_WORK_AND_SHOW_CANVAS,value: b})
    }
}


/**
 * 添加新的canvas组件
 */
export function createNewCanvasView(k:number):any{
    return (dispatch: any) => {
        dispatch({type: actionType.CREATE_NEW_CANVAS_VIEW, value: cf.NEW_ICON_ARRAY[k]})
    }
}

/**
 * 删除原有的canvas组件
 */
export function deleteCanvasView (k: number): any {
    return (dispatch: any) => {
        dispatch({type: actionType.DELETE_CANVAS_VIEW,value: k})
    }
}