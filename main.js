/*
**  ██████╗  ██████╗       ██╗ ██████╗   ██████╗ ████████╗ ██████╗  ██████╗
**  ██╔══██╗ ╚════██╗      ██║ ╚════██╗ ██╔════╝ ╚══██╔══╝ ╚════██╗ ██╔══██╗
**  ██████╔╝  █████╔╝      ██║  █████╔╝ ██║         ██║     █████╔╝ ██║  ██║
**  ██╔══██╗  ╚═══██╗ ██   ██║  ╚═══██╗ ██║         ██║     ╚═══██╗ ██║  ██║
**  ██║  ██║ ██████╔╝ ╚█████╔╝ ██████╔╝ ╚██████╗    ██║    ██████╔╝ ██████╔╝
**  ╚═╝  ╚═╝ ╚═════╝   ╚════╝  ╚═════╝   ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝
*/

const electron = require('electron');
const {
  app,
  BrowserWindow
} = electron

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 440,
    height: 775,
    movable: true,
    toolbar: false,
    'minHeight': 775,
    'minWidth': 440,
    icon: path.join(__dirname, 'images/icon.png')
  })

  mainWindow.setMenu(null);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
