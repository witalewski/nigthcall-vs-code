import * as assert from "assert";
import { workspace } from "vscode";
import {
  NIGHTCALL,
  WORKBENCH,
  DAY_THEME,
  NIGHT_THEME,
  COLOR_THEME,
  SOLARIZED_LIGHT,
  SOLARIZED_DARK
} from "../../util/Constants";
import { changeTheme } from "../../serviceObjects/changeTheme";

suite("changeTheme", () => {
  test("Switches to day theme", done => {
    const dayTheme: string =
      workspace.getConfiguration(NIGHTCALL).get<string>(DAY_THEME) ||
      SOLARIZED_LIGHT;
    changeTheme(DAY_THEME);
    setTimeout(() => {
      assert.equal(
        dayTheme,
        workspace.getConfiguration(WORKBENCH).get<string>(COLOR_THEME)
      );
      done();
    }, 2000);
  });

  test("Switches to night theme", done => {
    const nightTheme: string =
      workspace.getConfiguration(NIGHTCALL).get<string>(NIGHT_THEME) ||
      SOLARIZED_DARK;
    setTimeout(() => {
      changeTheme(NIGHT_THEME);
      setTimeout(() => {
        assert.equal(
          nightTheme,
          workspace.getConfiguration(WORKBENCH).get<string>(COLOR_THEME)
        );
        done();
      }, 2000);
    }, 5000);
  });
});
