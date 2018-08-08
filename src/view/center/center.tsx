/****************************************
* Central work station
* created by chaixiaoduo@126.com
* 2018-06-29 11:10:54
****************************************/

import * as React from 'react'
import MainCanvas from './canvas/MainCanvas'
import EmptyCenter from './emptyCenter'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as topActions from '../../store/actions/topActions'
interface StoreState {
    toJS: any
}

interface Props {
    c: string
    state?: StoreState | any
}

class CenterBar extends React.PureComponent<Props> {
    constructor(props: Props){
        super(props)
    }

    public render (){
        const state = this.props.state.toJS()
        return (
            <div className="center">
                {
                    state.startWork ?
                    <MainCanvas></MainCanvas> :
                    <EmptyCenter></EmptyCenter>
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
)(CenterBar)