import { homedir } from "os";
import { access, constants } from "fs";

export function isNightcallInstalled() {
  return new Promise((resolve, reject) => {
    access(`${homedir()}/.nightcall`, constants.F_OK, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
