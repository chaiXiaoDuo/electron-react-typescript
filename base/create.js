const { BrowserWindow } = require('electron')

const createWindow = function () {

	mainWindow = new BrowserWindow({
		width: 800, 
		height: 600,
		show: false,
		backgroundColor: '#282828',
		fullscreen: false,
		darkTheme: true,
		fullscreenWindowTitle: true
	})

	mainWindow.loadURL('http://localhost:3333/');
	
	mainWindow.on('closed', function () {
		mainWindow = null
	})
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})
	
}

module.exports = {
    createWindow
}