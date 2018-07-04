/****************************************
* Right side button module
* created by chaixiaoduo@126.com
* 2018-06-29 13:27:33
****************************************/
import * as React from 'react'

import { Icon, Row, Col } from 'antd'

interface Props {
    isActive: boolean
    icon: string
    callback: any
}
interface State {
    isActive: boolean
}

export default class LeftButton extends React.PureComponent<Props,State> {

    componentWillMount(){
        if(this.props.isActive) this.setState({isActive: true})
    }

    constructor(props: Props){
        super(props)
        this.state = {
            isActive: false
        }
    }

    private mouseOver() {
        this.setState({
            isActive: true
        })
    }

    private mouseLeave() {
        if(!this.props.isActive){
            this.setState({
                isActive: false
            })
        }
    }

    public render (){
        return (
            <Row>
                <Col 
                    className="col_li" 
                    onClick={() => this.props.callback()}
                    onMouseOver={() => this.mouseOver()}
                    onMouseLeave={() => this.mouseLeave()}
                >
                    <Icon 
                        type={this.props.icon} 
                        className={`${this.state.isActive ? 'active' : ''}`}
                    />
                </Col>
            </Row>
        )
    }

}
