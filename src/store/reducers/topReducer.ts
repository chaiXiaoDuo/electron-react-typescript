/****************************************
* Top processor 
* created by chaixiaoduo@126.com
* 2018-06-21 16:14:04
****************************************/
import * as actionType from '../actions/actionType'
import * as Immutable from 'immutable'

interface Action {
    type: string;
    value: any;
}

const State = Immutable.fromJS({
    version: '0.0.1',
    mainCanvasWidth: 1920,
    mainCanvasHeight: 1080,
    backgroundGird: 10,
    startWork: true,
    canvasTemplate: ['fa-square-o']
})

const topReducer = ( state = State, action: Action ):any => {
    switch (action.type) {
        case actionType.GET_VERSION:
            return state.set('version', action.value)
        case actionType.MAIN_CANVAS_HEIGHT:
            return state.set('mainCanvasHeight', action.value)
        case actionType.MAIN_CANVAS_WIDTH:
            return state.set('mainCanvasWidth', action.value)
        case actionType.BACKGROUND_GRID: 
            return state.set('backgroundGird',action.value)
        case actionType.START_WORK_AND_SHOW_CANVAS:
            return state.set('startWork',action.value)
        case actionType.CREATE_NEW_CANVAS_VIEW:
            return state.set('canvasTemplate',state.get('canvasTemplate').push(action.value))
        case actionType.DELETE_CANVAS_VIEW:
            return state.set('canvasTemplate',state.get('canvasTemplate').replace(action.value,1))
    }
    return state
}

export default topReducer