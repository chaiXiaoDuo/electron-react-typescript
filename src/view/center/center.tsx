/****************************************
* Central work station
* created by chaixiaoduo@126.com
* 2018-06-29 11:10:54
****************************************/

import * as React from 'react'
import MainCanvas from './canvas/MainCanvas'
interface Props {
    c: string
}

export default class CenterBar extends React.PureComponent<Props,any> {
    constructor(props: Props){
        super(props)
    }

    public render (){
        return (
            <div className="center">
                <MainCanvas></MainCanvas>
            </div>
        )
    }
}
