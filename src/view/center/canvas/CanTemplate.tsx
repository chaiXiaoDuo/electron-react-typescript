/****************************************
* The canvas template component
* created by chaixiaoduo@126.com
* 2018-06-29 17:16:34
****************************************/
import * as React from "react";
import Utils from '../../../lib/Utils'
import { STRETCH_POINT } from "../../../config/config";
const utils = new Utils()

interface Props {
    type: string
    index: number
}

interface State {
    left: number
    top: number
    width: number
    height: number
    backgroundColor: string
    cursor: string
    isMove: boolean
    isStretch: boolean
    border: string
    opacity: number
}

export default class CanTemplate extends React.PureComponent<Props,State> {

    // 鼠标与元素相对位置差值
    // The position difference between the mouse and the element
    protected x: number = 0
    protected y: number = 0

    // 拖拽情况下鼠标初始位置的记录
    // Record the initial position of the mouse when dragging and dropping
    protected _x: number = 0
    protected _y: number = 0


    constructor(props: Props){
        super(props)
        this.state = {
            left: 100,
            top: 100,
            width: 100,
            height: 100,
            backgroundColor: 'red',
            cursor: 'move',
            isMove: false,
            isStretch: false,
            border: 'none',
            opacity: 1
        }
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    componentWillMount(){
        // this.setState({left: 100 * this.props.index})
    }


    /**
     * 拖拽方法
     */
    private onMouseDown(event:any) {
        if(this.state.isStretch) return;
        this.x = event.clientX - this.state.left
        this.y = event.clientY - this.state.top
        this.setState({isMove: true})

        document.onmousemove = (event: any) => {
            this.setState({
                left: event.pageX - this.x,
                top: event.pageY - this.y
            })
        }

        document.onmouseup = () => {
            document.onmouseup = () => { return false }
            document.onmousemove = () => { return false }
            this.setState({isMove: false})
        }
        
    }

    /**
     * 鼠标拖拽缩放,
     */
    private stretchMouseDown(event:any,d:string) {
        // Record the initial mouse position
        this._x = event.pageX
        this._y = event.pageY
        console.log(event.pageX,event.pageY)
        console.log(`move to ${d}`)
 
        document.onmousemove = (e: any) => {
            let {x,y,_x,_y} = utils.getStretch(e.pageX,e.pageY,this._x,this._y,d)
            console.log(e.pageX,e.pageY,this._x,this._y,d)
            console.log(utils.getStretch(e.pageX,e.pageY,this._x,this._y,d))
            this._x = _x,this._y = _y
            this.setState({
                width: this.state.width + x,
                height: this.state.height + y
            })
        }    

        document.onmouseup = () => {
            document.onmouseup = () => { return false }
            document.onmousemove = () => { return false }
            this.setState({isStretch: false})
        }
    }

    /**
     * 鼠标移入
     */
    private onMouseEnter({ target }: any) {
        if(this.state.isMove) return
        document.onmousemove = (e) => {
            this.setState({border: '1px dashed green', opacity: 0.6})
            if(utils.checkMoveOrTensile(target,e,5)){
                this.setState({isStretch: true})
            }else {
                this.setState({isStretch: false})
            }
        }
    }

    /**
     * 鼠标移出`
     */
    private onMouseLeave() {
        if(this.state.isMove) return
        this.setState({isStretch: false,backgroundColor: 'red', border: 'none', opacity: 1})
        document.onmousemove = () => { return }
    }


    public render(){
        return(
            <div 
                onMouseDown={this.onMouseDown}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                style={{
                    position:'absolute',
                    boxSizing: 'border-box',
                    opacity: this.state.opacity,
                    cursor: `${this.state.cursor}`,
                    left: `${this.state.left}px`,
                    top: `${this.state.top}px`,
                    width: `${this.state.width}px`,
                    height: `${this.state.height}px`,
                    backgroundColor: this.state.backgroundColor,
                    border: `${this.state.border}`
                }}
            >
            {
                !this.state.isStretch ? null :
                <div 
                    className="stretch" 
                    style={{
                        width: `${this.state.width}px`, 
                        height: `${this.state.height}px`
                    }}
                >
                    {
                        STRETCH_POINT.map((v,k) => {
                            return <span 
                                        className={`stretch-span ${v}`} 
                                        key={k}
                                        onMouseDown={(e:any) => {this.stretchMouseDown(e,v)}}
                                    ></span>
                        })
                    }
                </div>
            }
                {this.props.type}
            </div>
        )
    }

}
