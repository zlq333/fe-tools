const downloadGitRepo = require("download-git-repo");
const fs = require("fs-extra");
import * as vscode from "vscode";
import cloneTemplate from "./utils/cloneTemplateConfig";

module.exports = function (context: vscode.ExtensionContext) {
  cloneTemplate.forEach((item: any) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(item.command, (uri) => {
        const path = uri.path;
        const arr = path.split(":/");
        const space = arr[0].split("/")[1].toUpperCase();
        const filePath = `${space}:/${arr[1]}`;

        fs.stat(filePath, (err: any, data: any) => {
          if (err) {
            vscode.window.showErrorMessage("文件类型判断失败", err);
            return;
          }
          if (data.isFile()) {
            vscode.window.showInformationMessage("请在文件夹中下载模板！");
          } else {
            if (data.isDirectory()) {
              downloadGitRepo(item.url, filePath, (err: any) => {
                if (err) {
                  vscode.window.showErrorMessage(err);
                } else {
                  vscode.window.showInformationMessage("下载成功");
                }
              });
            }
          }
        });
      })
    );
  });
};
