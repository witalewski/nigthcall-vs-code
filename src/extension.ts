"use strict";
import { commands, ExtensionContext, Disposable, window } from "vscode";
import { switchToDayTheme } from "./commands/switchToDayTheme";
import { switchToNightTheme } from "./commands/switchToNightTheme";
import { isNightcallInstalled } from "./serviceObjects/isNightcallInstalled";
import { watchForThemeChange } from "./serviceObjects/watchForThemeChange";
import {
  NIGHTCALL_SWITCH_TO_NIGHT_THEME,
  NIGHTCALL_SWITCH_TO_DAY_THEME
} from "./util/Constants";

export function activate(context: ExtensionContext) {
  isNightcallInstalled().then(nightcallInstalled => {
    if (nightcallInstalled) {
      let switchToNightThemeDisposable: Disposable = commands.registerCommand(
        NIGHTCALL_SWITCH_TO_NIGHT_THEME,
        switchToNightTheme
      );

      let switchToDayThemeDisposable: Disposable = commands.registerCommand(
        NIGHTCALL_SWITCH_TO_DAY_THEME,
        switchToDayTheme
      );

      context.subscriptions.push(
        switchToNightThemeDisposable,
        switchToDayThemeDisposable
      );

      watchForThemeChange();
    } else {
      const promptToInstallNightcall = () =>
        window.showInformationMessage(
          "Please install Nightcall first:\nyarn global add nightcall"
        );

      let switchToNightThemeDisposable: Disposable = commands.registerCommand(
        NIGHTCALL_SWITCH_TO_NIGHT_THEME,
        promptToInstallNightcall
      );

      let switchToDayThemeDisposable: Disposable = commands.registerCommand(
        NIGHTCALL_SWITCH_TO_DAY_THEME,
        promptToInstallNightcall
      );

      context.subscriptions.push(
        switchToNightThemeDisposable,
        switchToDayThemeDisposable
      );

      promptToInstallNightcall();
    }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
