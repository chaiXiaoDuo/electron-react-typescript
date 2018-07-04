/****************************************
* Start the initialization application method triggered by the application
* created by chaixiaoduo@126.com
* 2018-07-03 15:44:24
****************************************/

const { BrowserWindow } = require('electron')
const initIpc = require('./ipcmain')

const createWindow = function () {
	// Initializes the window object
	global.mainWindow = new BrowserWindow({
		width: 1920, 
		height: 1080,
		show: false,
		backgroundColor: '#282828',
		devTools: true, // Start debugging mode
		fullscreen: false,
		darkTheme: true,
		fullscreenWindowTitle: true
	})

	// Development mode load http address
	global.mainWindow.loadURL('http://localhost:3333/');

	// Load the file
	// global.mainWindow.loadFile('./build/index.html')

	// The debug tool opens by default
	global.mainWindow.webContents.openDevTools()

	// Listen for window closing events
	global.mainWindow.on('closed', function () {
		global.mainWindow = null
	})

	// Listen for window loading status
	global.mainWindow.once('ready-to-show', () => {
		global.mainWindow.show()
	})

	// Listen for messages sent by the render process
	initIpc.init()
	
}

module.exports = {
    createWindow
}