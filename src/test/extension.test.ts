import * as assert from "assert";
import { commands } from "vscode";

suite("Extension Tests", () => {
  test("Commands are registered", done => {
    commands.getCommands().then(commands => {
      assert(commands.indexOf("nightcall.switchToNightTheme") > 0);
      assert(commands.indexOf("nightcall.switchToDayTheme") > 0);
      done();
    });
  });
});
