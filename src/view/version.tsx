/****************************************
* 版本号组件
* created by chaixiaoduo@126.com
* 2018-06-26 13:53:15
****************************************/
import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as topActinos from '../store/actions/topActions'



interface StoreAction {
    getVersion: () => void
}

interface StoreState {
    toJS: any
}

interface Props {
    isShow: boolean
    actions?: StoreAction | any
    state?: StoreState | any
}

class Version extends React.PureComponent <Props,any> {
    constructor (props: Props) {
        super(props)
    }

    componentWillMount(){
        this.props.actions.getVersion()
    }

    public render (){
        const state = this.props.state.toJS()
        if(this.props.isShow)
            return (
                <div>
                    {`v_${state.version}`}
                </div>
            )
        else 
            return null
    }

}

export default connect (
    (state: any): object => {
        return {state: state.top}
    },
    (dispath: any): object => {
        return {actions: bindActionCreators(topActinos,dispath)}
    }
)(Version)