/****************************************
* 首屏页面主文件
* created by chaixiaoduo@126.com
* 2018-06-21 17:16:57
****************************************/
import * as React from 'react'

import Version from './version'

import TimeUtils from '../lib/TimeUtils'
import Utils from '../lib/Utils'
const utils = new Utils()
const timeUtils = new TimeUtils()


export default class Home extends React.PureComponent <any,any> {
    componentWillMount (){
        console.log(timeUtils.getTime())
        utils.changeTitle('老铁,没毛病')
    }
    constructor(props: any){
        super(props)
    }

    public render() {
        return (
            <div className="home" style={{width: utils.SCREEN_WIDTH, height: utils.SCREEN_HEIGHT}}>
                <Version isShow={true}/>
                {timeUtils.getTime()}
            </div>
        )
    }
}
