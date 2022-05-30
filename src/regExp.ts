import * as vscode from "vscode";
import regExpData from "./utils/regExpConfig";

module.exports = function (context: vscode.ExtensionContext) {
  regExpData.forEach((item: any) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(
        item.command,
        (document: vscode.TextDocument) => {
          const editor = vscode.window.activeTextEditor;

          if (editor) {
            const pos = editor.selection.active;
            editor.edit((editBuilder) => {
              editBuilder.insert(pos, item.rule);
            });
          }
        }
      )
    );
  });
};
