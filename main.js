const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Initiate window
let win;


function createWindow(){
    // Create window
    win = new BrowserWindow({width:1000, height:1000});

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file: ',
        slashes: true
    }));

    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () =>{
        win = null;
    })
};

// Run createWindow function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})