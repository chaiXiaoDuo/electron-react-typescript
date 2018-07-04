/****************************************
* Left operating bar
* created by chaixiaoduo@126.com
* 2018-06-27 16:43:43
****************************************/

import * as React from 'react'
import * as cf from '../../config/config'
import LeftButton from './buttonComponent/leftButton'
import { ipcRenderer } from 'electron'
import * as api from '../../config/connect'

interface Props {
    l: string
}

interface State {
    
}



export default class LeftBar extends React.PureComponent<Props, State> {


    componentWillMount (){
        
    }

    constructor (props: Props){
        super(props)
    }


    private buttonCallback(v:string): any {
        switch (v) {
            case cf.LEFT_ICON[0]:
                this.plusSquare()
                break;
            case cf.LEFT_ICON[1]:
                this.exportFile()
                break;
        }
    }

    private exportFile() {
        ipcRenderer.send(api.EXPORT_FILE,'1')
    }

    private plusSquare() {
        console.log('plusSquare')
    }

    public render (){
        return (
            <div className="leftBar">
                {
                    cf.LEFT_ICON.map((v,k) => {
                        return (
                            <LeftButton
                                key={k}
                                isActive={false} 
                                icon={v} 
                                callback={() => this.buttonCallback(v)}
                            ></LeftButton>
                        )
                    })
                }
                
            </div>
        )
    }

}