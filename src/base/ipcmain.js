/****************************************
* The main process listens for the render process message
* created by chaixiaoduo@126.com
* 2018-07-02 10:43:03
****************************************/
const {ipcMain, shell, dialog} = require('electron')


const baseCf = require('./baseConfig')
const api = require('../config/connect')
const fs = require('fs')


var initIpc = {
    init: function (){
        
        ipcMain.on(api.EXPORT_FILE,function (e,m){
            dialog.showOpenDialog(global.mainWindow,{
                title: baseCf.OPEN_FLODER_TITLE,
                defaultPath: baseCf.DEFAULT_PATH,
                properties: ['openDirectory']
            },function (filenames){
                fs.writeFile(filenames[0], "This is a owner project, electron + react + typescript", function (err) {
                    if (!err)
                        console.log("写入成功！")
                    else 
                        console.log(err)
                  })
                global.mainWindow.webContents.send(api.SHOW_MAIN_MESSAGE,filenames)
            })
        })
        
    }
}


module.exports = initIpc
