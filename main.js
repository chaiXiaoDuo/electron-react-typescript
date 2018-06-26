/****************************************
* 项目主进程 入口文件
* created by chaixiaoduo@126.com
* 2018-06-13 14:19:31
****************************************/
const { app, BrowserWindow } = require('electron')


let mainWindow


function createWindow () {

	mainWindow = new BrowserWindow({width: 800, height: 600})

	mainWindow.loadURL('http://localhost:3333/');
	
	mainWindow.on('closed', function () {
		mainWindow = null
	})
	
}

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
