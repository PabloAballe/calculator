import { TextField } from "tns-core-modules/ui/text-field";
import { Property } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";
export interface NumericKeyboardOptions {
    textField: TextField;
    noDecimals?: boolean;
    noReturnKey?: boolean;
    returnKeyButtonBackgroundColor?: Color;
    returnKeyTitle?: string;
    locale?: string;
    noIpadInputBar?: boolean;
    onReturnKeyPressed?: () => boolean;
}
export interface NumericKeyboardApi {
    decorate(args: NumericKeyboardOptions): Promise<any>;
}
export interface TextAndDecimalSeparatorHolder {
    getDecimalSeparator(): string;
    getText(): string;
    getMaxLength(): number;
    getNativeTextField(): any;
}
export declare abstract class NumericKeyboardViewBase extends TextField implements TextAndDecimalSeparatorHolder {
    _decimalSep: string;
    ios: any;
    getDecimalSeparator(): string;
    getText(): string;
    getMaxLength(): number;
    getNativeTextField(): number;
}
export declare const returnKeyTitleProperty: Property<NumericKeyboardViewBase, string>;
export declare const localeProperty: Property<NumericKeyboardViewBase, string>;
export declare const noDecimalsProperty: Property<NumericKeyboardViewBase, boolean>;
export declare const noReturnKeyProperty: Property<NumericKeyboardViewBase, boolean>;
export declare const returnKeyButtonBackgroundColorProperty: Property<NumericKeyboardViewBase, Color>;
export declare const noIpadInputBarProperty: Property<NumericKeyboardViewBase, boolean>;
