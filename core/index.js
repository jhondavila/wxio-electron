import Core from "../../node/core";
import util from "../../node/util";

import eLog from "./log";

export default {
  ...Core,
  util,
  log(...params) {
    return eLog.log(...params);
  },
  debug(...params) {
    return eLog.debug(...params);
  },
  warn(...params) {
    return eLog.warn(...params);
  },
  error(...params) {
    return eLog.error(...params);
  }
};
