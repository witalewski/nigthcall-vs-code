"use scrict";
import { exec } from "child_process";

export function switchToDayTheme(): Thenable<void> {
  return new Promise((resolve, reject) => {
    exec("nightcall day", {}, (error, stdout, stderr) => {
      if (error || stderr) {
        reject({ error, stderr });
      } else {
        resolve();
      }
    });
  });
}
