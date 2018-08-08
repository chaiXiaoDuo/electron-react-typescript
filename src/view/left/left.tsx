/****************************************
* Left operating bar
* created by chaixiaoduo@126.com
* 2018-06-27 16:43:43
****************************************/

import * as React from 'react'
import * as cf from '../../config/config'
import LeftButton from './buttonComponent/leftButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as topActions from '../../store/actions/topActions'
import { ipcRenderer } from 'electron'
import { StoreState } from '../../lib/interface'
import * as api from '../../config/connect'

interface StoreActions {
    updateStartWork: () => void
}
interface Props {
    l: string,
    actions?: StoreActions | any
    state?: StoreState | any
}

interface State {
    
}



class LeftBar extends React.PureComponent<Props, State> {


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
        this.props.actions.updateStartWork(true)
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


export default connect(
    (state: any):object => {
        return {state: state.top}
    },
    (dispatch: any):object => {
        return {actions: bindActionCreators(topActions,dispatch)}
    }
)(LeftBar)