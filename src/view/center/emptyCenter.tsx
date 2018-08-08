/****************************************
* Empty page of central workbench
* created by chaixiaoduo@126.com
* 2018-07-06 11:04:28
****************************************/

import * as React from 'react'



export default class EmptyCenter extends React.PureComponent<any, any> {
    constructor(props:any){
        super(props)
    }

    public render (){
        return (
            <div style={{width: `100%`, height: `100%`, backgroundColor: '#1e1e1e'}}>
            
            </div>
        )
    }
}