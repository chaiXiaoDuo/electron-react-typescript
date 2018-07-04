/****************************************
* Bottom operating bar
* created by chaixiaoduo@126.com
* 2018-06-27 16:30:26
****************************************/
import * as React from 'react'  
import Version from './version'
import { Row, Col } from 'antd'

export interface Props {
    b: string
}

export default class BottomBar extends React.PureComponent<Props, any>{

    constructor (props: Props){
        super(props)
    }

    public render() {
        return (
            <div className="bottomBar">
                <Row>
                    <Col className="version">
                        <Version isShow={true}></Version>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }

}