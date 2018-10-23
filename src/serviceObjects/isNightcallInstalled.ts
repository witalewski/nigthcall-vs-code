import { homedir } from "os";
import { access, constants } from "fs";

export function isNightcallInstalled():Promise<boolean> {
  return new Promise((resolve) => {
    access(`${homedir()}/.nightcall`, constants.F_OK, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
