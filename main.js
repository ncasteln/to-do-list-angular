const { app, BrowserWindow } = require('electron');

function createWindow() {
  win = new BrowserWindow({width: 400, height: 400});
  win.loadFile('dist/to-do-list-angular/browser/index.html');
}

app.whenReady().then(() => createWindow());
