import * as os from "os";
import * as fs from "fs";

export function isNightcallInstalled():Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(`${os.homedir()}/.nightcall`, fs.constants.F_OK, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
