const { app, BrowserWindow } = require('electron');
function win() {
  const w = new BrowserWindow({
    width: 440, height: 800, minWidth: 380, minHeight: 600,
    backgroundColor: '#0e0f11', title: 'Pitwall',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    autoHideMenuBar: true
  });
  w.loadFile('index.html');
}
app.whenReady().then(win);
app.on('window-all-closed', () => app.quit());
