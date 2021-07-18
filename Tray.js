
import { app, Tray, Menu } from 'electron';


class TrayApp extends Tray {
    constructor(config) {
        super(config.icon);
        let me = this;
        this.trayMenu = Menu.buildFromTemplate(config.menu);
        this.setContextMenu(this.trayMenu);
        this.setHighlightMode('always');
    }
}

export default TrayApp;