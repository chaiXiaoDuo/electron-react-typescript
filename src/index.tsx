/****************************************
* Project master file entry file
* created by chaixiaoduo@126.com
* 2018-06-21 17:17:22
****************************************/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from './view/home'
import 'antd/dist/antd.css'
import './scss/style.scss'
import * as api from './config/connect'
import './scss/font-awesome.min.css'
import { ipcRenderer } from "electron";

class App extends React.Component {

	componentWillMount(){
		console.log(process.env.NODE_ENV)
		// Listen for messages sent by the main process
		ipcRenderer.on(api.SHOW_MAIN_MESSAGE,(e:any, msg: any):void => {
			console.log(msg)
		})
	}

	public render() {
		return (
			<Provider store={store}>
                <Home/>
			</Provider>
		);
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
