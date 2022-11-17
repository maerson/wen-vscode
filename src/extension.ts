// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { activate_indent_one } from './indent_one';
import { activate_indent_rainbow } from './indent_rainbow';

// this method is called when vs code is activated
export function activate(context: vscode.ExtensionContext) {


  activate_indent_one(context);
  activate_indent_rainbow(context);

}
