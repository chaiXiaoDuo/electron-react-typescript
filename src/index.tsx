/****************************************
* 项目主文件 入口文件
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
class App extends React.Component {

	componentWillMount(){
		console.log(process.env.NODE_ENV)
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
