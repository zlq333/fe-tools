import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("插件启动-----------");

  const disposable = vscode.commands.registerCommand(
    "extension.openWebView",
    () => {}
  );

  context.subscriptions.push(disposable);

  require("./regExp")(context);

  require("./linkHref")(context);

  require("./cloneTemplate")(context);
}
