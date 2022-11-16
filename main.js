const {app, BrowserWindow} = require('electron');
const path = require('path');
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'STaaS Application',
        width:500,
        height:500
    });

    mainWindow.loadFile(path.join(__dirname,'./renderer/index.html'));

}

app.whenReady().then(()=>{
    createMainWindow();
});