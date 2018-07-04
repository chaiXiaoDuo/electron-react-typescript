/****************************************
* Project master process entry file
* created by chaixiaoduo@126.com
* 2018-06-13 14:19:31
****************************************/
const { app } = require('electron')

const { createWindow } = require('./src/base/create')

global.mainWindow = null

app.on('ready', function (){
	createWindow()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (global.mainWindow === null) {
		createWindow()
	}
})
