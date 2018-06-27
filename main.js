/****************************************
* 项目主进程 入口文件
* created by chaixiaoduo@126.com
* 2018-06-13 14:19:31
****************************************/
const { app } = require('electron')

const { createWindow } = require('./base/create')

let mainWindow

app.on('ready', createWindow)
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})
