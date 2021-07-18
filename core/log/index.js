import electronLog from 'electron-log';
import fs from 'fs';

electronLog.transports.file.level = 'debug';
electronLog.transports.file.format = '{d}/{m}/{y} {h}:{i}:{s}:{ms} {text}';

electronLog.transports.file.maxSize = 5 * 1024 * 1024;

electronLog.transports.file.stream = fs.createWriteStream("log.txt", { flags: 'a' });

export default electronLog;
