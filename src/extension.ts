import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];
    disposables.push(
        vscode.commands.registerCommand('vscode-join-uri.test', () => {
            const uri = vscode.Uri.file('foo');
            const path = vscode.Uri.joinPath(uri, 'bar');
            vscode.window.showInformationMessage(`uri: ${path}`);
        })
    );
    context.subscriptions.push(...disposables);
}

export function deactivate() { }
