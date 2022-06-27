const { app, BrowserWindow } = require("electron");
const isDev = require('electron-is-dev');
const { screen } = require("electron")

const createWindow = () => {

    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize

    const win = new BrowserWindow({
        width: width,
        height: height,
        minHeight: 750,
        minWidth: 1250,
        webPreferences: {
            nodeIntegration: true,
        },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: "rgb(74,74,74)",
            symbolColor: "rgb(255, 255, 255)",
        },
        title: "Owl Music",
        icon: __dirname + "./owl.png",
    })

    win.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, './index.html')}`
    );
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})