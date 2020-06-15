"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_field_1 = require("tns-core-modules/ui/text-field");
var view_1 = require("tns-core-modules/ui/core/view");
var color_1 = require("tns-core-modules/color");
var NumericKeyboardViewBase = (function (_super) {
    __extends(NumericKeyboardViewBase, _super);
    function NumericKeyboardViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._decimalSep = "unset";
        return _this;
    }
    Object.defineProperty(NumericKeyboardViewBase.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        set: function (value) {
            this.nativeView = value;
        },
        enumerable: true,
        configurable: true
    });
    NumericKeyboardViewBase.prototype.getDecimalSeparator = function () {
        return this._decimalSep;
    };
    NumericKeyboardViewBase.prototype.getText = function () {
        return this.text;
    };
    NumericKeyboardViewBase.prototype.getMaxLength = function () {
        return this.maxLength;
    };
    NumericKeyboardViewBase.prototype.getNativeTextField = function () {
        return this.nativeView;
    };
    return NumericKeyboardViewBase;
}(text_field_1.TextField));
exports.NumericKeyboardViewBase = NumericKeyboardViewBase;
exports.returnKeyTitleProperty = new view_1.Property({
    name: "returnKeyTitle",
    defaultValue: "Done"
});
exports.returnKeyTitleProperty.register(NumericKeyboardViewBase);
exports.localeProperty = new view_1.Property({ name: "locale" });
exports.localeProperty.register(NumericKeyboardViewBase);
exports.noDecimalsProperty = new view_1.Property({
    name: "noDecimals",
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.noDecimalsProperty.register(NumericKeyboardViewBase);
exports.noReturnKeyProperty = new view_1.Property({
    name: "noReturnKey",
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.noReturnKeyProperty.register(NumericKeyboardViewBase);
exports.returnKeyButtonBackgroundColorProperty = new view_1.Property({
    name: "returnKeyButtonBackgroundColor",
    defaultValue: null,
    valueConverter: function (c) { return new color_1.Color(c); }
});
exports.returnKeyButtonBackgroundColorProperty.register(NumericKeyboardViewBase);
exports.noIpadInputBarProperty = new view_1.Property({
    name: "noIpadInputBar",
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.noIpadInputBarProperty.register(NumericKeyboardViewBase);
//# sourceMappingURL=numeric-keyboard.common.js.map