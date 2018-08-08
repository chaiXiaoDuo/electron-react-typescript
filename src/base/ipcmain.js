/****************************************
* The main process listens for the render process message
* created by chaixiaoduo@126.com
* 2018-07-02 10:43:03
****************************************/
const {ipcMain} = require('electron')
const createFile = require('./createFile')
const api = require('../config/connect')


var initIpc = {
    init: function (){
        
        ipcMain.on(api.EXPORT_FILE,function (e,m){
            // create file to local
            createFile(e)
        })
        
    }
}


module.exports = initIpc
