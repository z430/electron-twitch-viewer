// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL('https://www.twitch.tv/directory/game/Dota%202')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    app.quit()
  })

  // create new menu
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert new menu
  Menu.setApplicationMenu(mainMenu);
}

// handle create new window
function createNewWindow(){
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL('https://www.twitch.tv/directory/game/Dota%202')

}

// Create main menu from template
const mainMenuTemplate = [
  {
    label: ''
  },
  {
    label:'File',
    submenu:[
      {
        label: "New Window",
        click(){
          createNewWindow();
        }
      },
      {
        label: "Quit",
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  },
];

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.