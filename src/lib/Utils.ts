/****************************************
* Utility class
* created by chaixiaoduo@126.com
* 2018-06-26 14:58:19
****************************************/
import * as cf from '../config/config'

export interface getStretch {
    x: number
    y: number
    _x: number
    _y: number
}


export default class utils {

    // Wide screen high
    public SCREEN_WIDTH: string
    public SCREEN_HEIGHT: string

    constructor() {
        this.SCREEN_WIDTH = window.innerWidth + 'px'
        this.SCREEN_HEIGHT = window.innerHeight + 'px'
    }
    
    public changeTitle (v: string = cf.APP_TITLE): void {
        document.title = v
    }

    /**
     * Global common log
     */
    public log (e: string = 'nothing to log!'):void {
        if(typeof e == 'string')
            if(e.length < 10){
                let str = ''
                for(let i = 0; i < (10 - e.length); i ++){
                    str += '='
                }
                console.log(str + e + str)
            }else {
                console.log(e)
            }
        else
            console.warn('Error type of parameter received by the log method in the tool class')
    }

    /**
     * 检测当前鼠标位置显示拖动还是拉伸
     * Detect the current mouse position to show drag or stretch
     */
    public checkMoveOrTensile(t: any,e: any, d: number):boolean {
        let x = Number(t.style.left.substring(0,t.style.left.length - 2))
        let ox = x + t.offsetWidth
        let _x = e.pageX - 60
        let y = Number(t.style.top.substring(0,t.style.top.length - 2))
        let _y = e.pageY
        let oy = y + t.offsetHeight
        if(
            (_x < x + d && _x > x) ||
            (_x < ox && _x > ox - d) ||
            (_y > y && _y < y + d ) ||
            (_y < oy && _y > oy - d)
        ){
            return true
        }else {
            return false
        }
    }


    /**
     * 元素拉伸缩小放大的方法
     * stretch the view
     * @param {number} x 当前鼠标的真实位置x
     * @param {number} y 当前鼠标的真实位置y
     * @param {number} _x 记录在上一次的可移动点的坐标 x
     * @param {number} _y 记录在上一次的可移动点的坐标 y
     * @param {string} d 拖拽方向 与 配置文件中的 STRETCH_POINT 进行匹配
     */
    public getStretch(x:number, y:number ,_x:number, _y:number, d:string):getStretch {
        let $x:number = 0,
            $y:number = 0,
            $_y: number = 0,
            $_x: number = 0

        switch (d) {
            case cf.STRETCH_POINT[0]:
                $x = x - _x
                $y = y - _y
                break;
            case cf.STRETCH_POINT[4]:
                $x = x - _x
                $y = y - _y
                $_x = _x + $x
                $_y = _y + $y
            case cf.STRETCH_POINT[5]:
                $x = x
                $y = y - _y
                $_x = _x
                $_y = _y + $y
        }
        return {x: $x, y: $y, _x: $_x, _y: $_y}
    }
}