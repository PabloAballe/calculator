import { Color } from "tns-core-modules/color";
import { NumericKeyboardApi, NumericKeyboardOptions, NumericKeyboardViewBase, TextAndDecimalSeparatorHolder } from "./numeric-keyboard.common";
export declare class NumericKeyboard implements NumericKeyboardApi, TextAndDecimalSeparatorHolder {
    private _keyboardDelegate;
    private _keyboard;
    private _nativeTextField;
    private _decimalSep;
    private _maxLength;
    getDecimalSeparator(): string;
    getText(): string;
    getMaxLength(): number;
    getNativeTextField(): any;
    decorate(args?: NumericKeyboardOptions): Promise<any>;
}
export declare class NumericKeyboardView extends NumericKeyboardViewBase {
    returnKeyTitle: string;
    locale: string;
    noDecimals: boolean;
    noReturnKey: boolean;
    noIpadInputBar: boolean;
    returnKeyButtonBackgroundColor: Color;
    onReturnKeyPressed?: () => boolean;
    private _keyboardDelegate;
    private _keyboard;
    createNativeView(): Object;
    private applyProperties;
}
export declare class MMNumberKeyboardDelegateImpl extends NSObject implements MMNumberKeyboardDelegate {
    static ObjCProtocols: {
        prototype: MMNumberKeyboardDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<TextAndDecimalSeparatorHolder>): MMNumberKeyboardDelegateImpl;
    private _onReturnKeyPressedCallback;
    setCallback(callback: () => boolean): void;
    numberKeyboardShouldInsertText(keyboard: any, text: any): boolean;
    numberKeyboardShouldDeleteBackward(keyboard: any): boolean;
    numberKeyboardShouldReturn(keyboard: MMNumberKeyboard): boolean;
}
