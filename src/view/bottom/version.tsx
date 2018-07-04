/****************************************
* Version number component
* created by chaixiaoduo@126.com
* 2018-06-26 13:53:15
****************************************/
import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as topActinos from '../../store/actions/topActions'



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

interface State {
    isActive: boolean
}


class Version extends React.PureComponent <Props,State> {
    constructor (props: Props) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    componentWillMount(){
        this.props.actions.getVersion()
    }

    private mouseOver() {
        this.setState({
            isActive: true
        })
    }

    private mouseLeave() {
        this.setState({
            isActive: false
        })
    }

    public render (){
        const state = this.props.state.toJS()
        if(this.props.isShow)
            return (
                <div 
                    className={`version${this.state.isActive ? ' active' : ''}`} 
                    onMouseOver={() => this.mouseOver()}
                    onMouseLeave={() => this.mouseLeave()}
                >
                    {`V_${state.version}`}
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