"use scrict";
import { workspace, WorkspaceConfiguration } from "vscode";
import {
  NIGHTCALL,
  WORKBENCH,
  DAY_THEME,
  COLOR_THEME,
  SOLARIZED_LIGHT,
  SOLARIZED_DARK
} from "../util/Constants";

export function changeTheme(theme: string): Thenable<void> {
  const nighcallConfiguration: WorkspaceConfiguration = workspace.getConfiguration(
    NIGHTCALL
  );
  const workbenchConfiguration: WorkspaceConfiguration = workspace.getConfiguration(
    WORKBENCH
  );
  const targetColorTheme: string =
    nighcallConfiguration.get<string>(theme) ||
    (theme === DAY_THEME ? SOLARIZED_LIGHT : SOLARIZED_DARK);
  return workbenchConfiguration.update(COLOR_THEME, targetColorTheme, true);
}
