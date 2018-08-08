/****************************************
* Generate template file
* created by chaixiaoduo@126.com
* 2018-07-05 10:54:51
****************************************/
const fs = require('fs')
const baseCf = require('./baseConfig')
const { dialog } = require('electron')
const api = require('../config/connect')

/**
 * mkdir for project directory
 * @param {array} filenames The target path
 */
function mkdir (path,cal){
    fs.mkdir(`${path}`,(err) => {
        if(err)
            console.log('fail to create directory')
        else 
            if(cal)
                cal()        
    })
}


function mkfile (path,html){
    fs.writeFile(`${path}`, html, (err) => {
        if (err)
            console.log('fail to create directory')
        else 
            console.log('success to create file!')
    })
}


function createFile (e){
    
    dialog.showOpenDialog(global.mainWindow,{
        title: baseCf.OPEN_FLODER_TITLE,
        defaultPath: baseCf.DEFAULT_PATH,
        properties: ['openDirectory']
    },function (filenames){
        if(filenames == null){
            console.log('fail to choose directory')
            return
        }
        mkdir(`${filenames[0]}\\html`,() => {
            mkdir(`${filenames[0]}\\html\\css`, () => {
                mkfile(`${filenames[0]}\\html\\css\\base.css`,"*{margin: 0;padding: 0;}")
                mkfile(`${filenames[0]}\\html\\css\\index.css`,".all{width: 100%;height: 100%;}")
            })
            mkdir(`${filenames[0]}\\html\\js`, () => {
                mkfile(`${filenames[0]}\\html\\js\\index.js`,"// javascript for index.html\nwindow.onload = function(){\n    // write javascript code to here\n}")
            })
            mkdir(`${filenames[0]}\\html\\image`)
            mkfile(`${filenames[0]}\\html\\index.html`,"<h1>我是柴小铎</h1>")
        })
        global.mainWindow.webContents.send(api.SHOW_MAIN_MESSAGE,filenames)
    })
}

module.exports = createFile