/****************************************
* Project master process entry file
* created by chaixiaoduo@126.com
* 2018-06-13 14:19:31
****************************************/
const { app, Menu, MenuItem	} = require('electron')

const { createWindow } = require('./src/base/create')

const menuTemplate = [
	{
		label: '测试菜单1',
		submenu: [{label: '子1'},{label: '子2'}]
	},
	{
		label: '测试菜单2',
		submenu: [{label: '子1'},{label: '子2'}]
	},
	{
		label: '测试菜单3',
		submenu: [{label: '子1'},{label: '子2'}]
	},
	{
		label: '测试菜单4',
		submenu: [{label: '子1'},{label: '子2'}]
	}
]

var menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu);


global.mainWindow = null

const isDevelopment = true;
if (isDevelopment) {
  /* eslint-disable */
  require('electron-reload')(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron'),
    ignored: /node_modules|[\/\\]\./
  });
}

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
