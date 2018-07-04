/****************************************
* Utility class
* created by chaixiaoduo@126.com
* 2018-06-26 14:58:19
****************************************/
import * as cf from '../config/config'


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
}