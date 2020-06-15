"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeric_keyboard_common_1 = require("./numeric-keyboard.common");
var NumericKeyboard = (function () {
    function NumericKeyboard() {
    }
    NumericKeyboard.prototype.decorate = function (args) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return NumericKeyboard;
}());
exports.NumericKeyboard = NumericKeyboard;
var NumericKeyboardView = (function (_super) {
    __extends(NumericKeyboardView, _super);
    function NumericKeyboardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericKeyboardView.prototype.createNativeView = function () {
        var v = _super.prototype.createNativeView.call(this);
        this.keyboardType = "number";
        return v;
    };
    NumericKeyboardView.prototype._onReturnPress = function () {
    };
    return NumericKeyboardView;
}(numeric_keyboard_common_1.NumericKeyboardViewBase));
exports.NumericKeyboardView = NumericKeyboardView;
//# sourceMappingURL=numeric-keyboard.android.js.map