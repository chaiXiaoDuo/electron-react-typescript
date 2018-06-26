/****************************************
* 首屏页面主文件
* created by chaixiaoduo@126.com
* 2018-06-21 17:16:57
****************************************/
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as topActions from '../store/actions/topActions'

import logo from '../logo.svg'


class Home extends React.Component <any,any> {
    componentWillMount (){}
    constructor(props: any){
        super(props)
        this.state = {
            a: 1
        }
    }

    private test2() {
        alert(2)
    }

    private addState (a: number){
        if(typeof a != 'number') throw "wrong type of state a";
        a += 1
        this.setState({
            a: a
        })
    }

    public render() {
        const {actions} = this.props
        const store = this.props.state.toJS()
        return (
            <div>
                <div onClick={
                    () => 
                    {
                        actions.getVersion(store.version)
                        this.addState(this.state.a)
                    }
                } style={{width: '100px',height: '100px',backgroundColor: 'red'}}>{this.state.a}</div>
                {store.version}
                <img src={logo} alt="" onClick={this.test2}/>
            </div>
        )
    }
}


export default connect(
    (state:any):object => {
		return {state: state.top}
	},
	(dispath:any):object => {
        return {actions: bindActionCreators(topActions,dispath)}
	}
)(Home)