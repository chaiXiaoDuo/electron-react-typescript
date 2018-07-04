/****************************************
* First screen page main file
* created by chaixiaoduo@126.com
* 2018-06-21 17:16:57
****************************************/
import * as React from 'react'
import BottomBar from './bottom/bottom'
import LeftBar from './left/left'
import CenterBar from './center/center'
import * as cf from '../config/config'
import Utils from '../lib/Utils'
const utils = new Utils()


export default class Home extends React.PureComponent <any,any> {
    componentWillMount (){
        utils.changeTitle()
    }
    constructor(props: any){
        super(props)
    }

    public render() {
        return (
            <div className="home" style={{width: utils.SCREEN_WIDTH, height: utils.SCREEN_HEIGHT}}>
                <LeftBar l={cf.APP_TITLE}></LeftBar>
                <BottomBar b={cf.APP_TITLE}></BottomBar>
                <CenterBar c={cf.APP_TITLE}></CenterBar>
            </div>
        )
    }
}
