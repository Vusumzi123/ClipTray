
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, Menu, Tray} = electron;
let trayIcon = path.join(__dirname, "tray-icon.png");

let tray = null;

app.on('ready', () => {
tray = new Tray(trayIcon);
const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Quit', click(){ app.quit() } }
])
tray.setToolTip('This is my application.');
tray.setContextMenu(contextMenu);
})