import { homedir } from "os";
import { watch, readFile } from "fs";
import { changeTheme } from "./changeTheme";
import {
  DAY_THEME,
  NIGHT_THEME,
  WATCHFILE_CONTENTS_DAY,
  WATCHFILE_CONTENTS_NIGHT
} from "../util/Constants";

export function watchForThemeChange() {
  const path = `${homedir()}/.nightcall`;
  watch(path, { persistent: false }, (event, filename) => {
    readFile(path, "utf8", (err: NodeJS.ErrnoException, contents: string) => {
      if (err === null && contents.length > 0) {
        switch (contents) {
          case WATCHFILE_CONTENTS_DAY:
            changeTheme(DAY_THEME);
            break;
          case WATCHFILE_CONTENTS_NIGHT:
            changeTheme(NIGHT_THEME);
            break;
        }
      }
    });
  });
}
