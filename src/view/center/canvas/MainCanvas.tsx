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
import { Modal, Col, Row } from 'antd';
import * as cf from '../../../config/config'
import Utils from '../../../lib/Utils'
import CanTemplate from '../canvas/CanTemplate'
const utils = new Utils()
const can = new CanvasUtils()

interface StoreAction {
    upDateGrid: () => void
    createNewCanvasView: () => void
    deleteCanvasView: () => void
}

interface StoreState {
    toJS: any
}

interface Props {
    state?: StoreState | any
    actions?: StoreAction | any
}

interface State {
    newEleViewShow: boolean
}

class Can extends React.PureComponent<Props,State> {
    
    private mainCanvas:any

    constructor(props: Props){
        super(props)
        this.state = {
            newEleViewShow: false
        }
        // Change 'this' direction
        this.keyDown = this.keyDown.bind(this)
        this.newEleButtonClick = this.newEleButtonClick.bind(this)
    }

    /**
     * 渲染画布
     * @param {any} $e 传入标签
     */
    private startDraw($e:any) {
        const el = $e.getContext('2d')
        can.drawGrid(el)
    }       


    /**
     * 键盘点击事件
     * @param {any} e 键盘对象
     */
    private keyDown(e:any) {
        if(e.ctrlKey && (e.keyCode == 78)){
            this.setState({newEleViewShow: true})
        }else if(e.keyCode == 27){
            this.setState({newEleViewShow: false})
        }
    }

    /**
     * 选择新建的元素类型
     */
    private newEleButtonClick(k: number) {
        this.setState({newEleViewShow: false})
        utils.log(`create ${cf.NEW_ICON_ARRAY[k]} to workView`)
        this.props.actions.createNewCanvasView(k)
    }


    /**
     * 鼠标滑轮事件
     * @param {any} event 元素对象
     * @param {number} w redux中存放的当前网格边距
     */
    private handleWheel(event:any,w:number):void {
        if(event.deltaY < 0){   
            this.props.actions.upDateGrid(w + 1)
        }else {
            if(w < 10){
                return 
            }
            this.props.actions.upDateGrid(w - 1)
        }
    }

    componentDidUpdate() {
        utils.log('主背景重新渲染')
        this.startDraw(this.mainCanvas)
    }

    componentDidMount(){
        this.startDraw(this.mainCanvas)
        window.onkeydown = this.keyDown
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
                {
                    state.canvasTemplate.map((v:string,k:number) => {
                        return (
                            <CanTemplate index={k} key={k} type={v}></CanTemplate>
                        )
                    })
                }
                <Modal
                    visible={this.state.newEleViewShow}
                    destroyOnClose={true}
                    title={`选择元素组件`}
                    footer={null}>
                    <Row>   
                        {
                            cf.NEW_ICON_ARRAY.map((v:any,k:number) => {
                                return (
                                    <Col span={3} key={k} className="new-ele-icon">
                                        <i className={`fa ${v}`} onClick={() => {this.newEleButtonClick(k)}}></i>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Modal>
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