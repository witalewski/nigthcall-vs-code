"use scrict";
import { exec } from "child_process";

export function switchToNightTheme(): Thenable<void> {
  return new Promise((resolve, reject) => {
    exec("nightcall night", {}, (error, stdout, stderr) => {
      if (error || stderr) {
        reject({ error, stderr });
      } else {
        resolve();
      }
    });
  });
}
