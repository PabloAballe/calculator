import { NumericKeyboardApi, NumericKeyboardOptions, NumericKeyboardViewBase } from "./numeric-keyboard.common";
export declare class NumericKeyboard implements NumericKeyboardApi {
    decorate(args?: NumericKeyboardOptions): Promise<any>;
}
export declare class NumericKeyboardView extends NumericKeyboardViewBase {
    createNativeView(): Object;
    _onReturnPress(): void;
}
