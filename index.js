const electron = require('electron')
  // Module to control application life.
const app = electron.app
  // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const fs = require('fs')
const tray = require('./tray')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let isQuitting = false

/*process.on('uncaughtException', (err) => {
  console.log('application almost crashed!', err);
});*/

const isAlreadyRunning = app.makeSingleInstance(() => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }

    // Prevent flash on startup when in dark-mode
    mainWindow.webContents.on('did-finish-load', function() {
      setTimeout(function() {
        mainWindow.show()
      }, 60)
    })
  }
})

if (isAlreadyRunning) {
  app.quit()
}

function createWindow() {

  /*if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }*/
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('close', e => {
    if (!isQuitting) {
      e.preventDefault()

      if (process.platform === 'darwin') {
        app.hide()
      } else {
        mainWindow.hide()
      }
    }
  })

  mainWindow.on('page-title-updated', e => {
    e.preventDefault()
    tray.create(mainWindow)
  })

  return mainWindow


}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  /*setTimeout(() => {
    nonExistentFunc();
    console.log('more important stuff'); // won't ever get called
  }, 2000);*/

  createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/*app.on('before-quit', (evt) => {
    if (hasUnsavedChanges()) {
        evt.preventDefault();
    }
});

app.on('quit', (evt, exitCode) => {
    console.log(‘application quit with exit code:’, exitCode)
});*/

//Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers
