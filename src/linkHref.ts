import {
  ExtensionContext,
  ViewColumn,
  WebviewPanel,
  window,
  commands,
} from "vscode";
import * as vscode from "vscode";
import linkHref from "./utils/linkHrefConfig";

const fs = require("fs-extra");
const path = require("path");

// 创建一个全局变量，类型为：WebviewPanel 或者 undefined
let webviewPanel: WebviewPanel | undefined;

export function createWebView(
  context: ExtensionContext,
  viewColumn: ViewColumn, // 窗口编辑器
  item: any
) {
  if (webviewPanel === undefined || item.title !== webviewPanel.title) {
    webviewPanel = window.createWebviewPanel(
      "webView",
      item.title,
      viewColumn,
      {
        retainContextWhenHidden: true, // 控制是否保持webview面板的内容（iframe），即使面板不再可见。
        enableScripts: true, // 下面的 html 页可以使用 Scripts
      }
    );

    let content = "";

    if (item.type == "href") {
      content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            html,
            #iframe {
              width: 100%;
              min-height: 1000px;
              border:none;
              background:#fff;
            }
          </style>
        </head>

        <body>
          <div>
            <iframe
              id="iframe"
              src="${item.url}"
              scrolling="auto"
            ></iframe>
          </div>
        </body>
      </html>
      `;
    } else {
      content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
          html{
            min-height:1000px;
            background:#fff;
          }
          #id{
            width:100%;
          }
          </style>
        </head>

        <body>
          <div>
            <img id="img-box" src="./images/${item.url}.png" alt="" />
          </div>
        </body>
      </html>
      `;
      const resourcePath = path.join(
        context.extensionPath,
        "src",
        "linkHref.ts"
      );
      const dirPath = path.dirname(resourcePath);
      content = content.replace(
        /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
        (m: any, $1: any, $2: any) => {
          return (
            $1 +
            vscode.Uri.file(path.resolve(dirPath, $2))
              .with({ scheme: "vscode-resource" })
              .toString() +
            '"'
          );
        }
      );
    }

    webviewPanel.webview.html = content;
  } else {
    // 面板存在，重新设置标题
    webviewPanel.title = item.title;
    webviewPanel.reveal();
  }

  // 关闭面板
  webviewPanel.onDidDispose(() => {
    webviewPanel = undefined;
  });

  return webviewPanel;
}

module.exports = function (context: vscode.ExtensionContext) {
  linkHref.forEach((item: any) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(item.command, () => {
        const webView = createWebView(context, vscode.ViewColumn.One, item);
        context.subscriptions.push(webView);
      })
    );
  });
};
