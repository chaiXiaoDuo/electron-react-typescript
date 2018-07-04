/****************************************
* Workbench background
* created by chaixiaoduo@126.com
* 2018-06-29 17:16:34
****************************************/
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as topActions from "../../../store/actions/topActions";
import CanvasUtils from '../../../lib/CanvasUtils'
const can = new CanvasUtils()

interface StoreAction {
    upDateGrid: () => void
}

interface StoreState {
    toJS: any
}

interface Props {
    state?: StoreState | any
    actions?: StoreAction | any
}

interface State {
    
}

class Can extends React.PureComponent<Props,State> {
    
    private mainCanvas:any

    constructor(props: Props){
        super(props)
    }

    private startDraw($e:any) {
        const el = $e.getContext('2d')
        can.drawGrid(el)
    }       

    private handleWheel(event:any,w:number):void {
        if(event.deltaY < 0){   
            this.props.actions.upDateGrid(w + 1)
        }else {
            if(w < 5){
                return 
            }
            this.props.actions.upDateGrid(w - 1)
        }
    }

    componentDidUpdate() {
        console.log('主背景重新渲染')
        this.startDraw(this.mainCanvas)
    }

    componentDidMount(){
        console.log('主背景开始创建')
        this.startDraw(this.mainCanvas)
    }

    public render(){
        const state = this.props.state.toJS()
        return (
            <div className="mainCan" onWheel={(e) => this.handleWheel(e,state.backgroundGird)}>
                <canvas 
                    width={state.mainCanvasWidth}
                    height={state.mainCanvasHeight}
                    className="mainCanvas" 
                    ref={ref => this.mainCanvas = ref}
                ></canvas>
            </div>
        )
    }

}


export default connect (
    (state:any):object => {
        return {state: state.top}
    },
    (dispatch: any): object => {
        return {actions: bindActionCreators(topActions, dispatch)}
    }
)(Can)