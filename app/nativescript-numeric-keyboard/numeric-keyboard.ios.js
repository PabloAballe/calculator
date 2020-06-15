"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var text_field_1 = require("tns-core-modules/ui/text-field");
var numeric_keyboard_common_1 = require("./numeric-keyboard.common");
var _numkeyboard = [];
var NumericKeyboard = (function () {
    function NumericKeyboard() {
        this._decimalSep = "unset";
    }
    NumericKeyboard.prototype.getDecimalSeparator = function () {
        return this._decimalSep;
    };
    NumericKeyboard.prototype.getText = function () {
        return this._nativeTextField.text;
    };
    NumericKeyboard.prototype.getMaxLength = function () {
        return this._maxLength;
    };
    NumericKeyboard.prototype.getNativeTextField = function () {
        return this._nativeTextField;
    };
    NumericKeyboard.prototype.decorate = function (args) {
        var _this = this;
        _numkeyboard.push(this);
        return new Promise(function (resolve, reject) {
            if (!args || !args.textField) {
                reject("Setting the 'textField' property is mandatory.");
                return;
            }
            _this._maxLength = args.textField.maxLength;
            var nslocale = null;
            if (args.locale) {
                nslocale = NSLocale.localeWithLocaleIdentifier(args.locale);
            }
            else {
                nslocale = NSLocale.currentLocale;
            }
            _this._decimalSep = nslocale.decimalSeparator;
            _this._keyboard = MMNumberKeyboard.alloc().initWithFrameInputViewStyleLocale(CGRectZero, 1, nslocale);
            if (args.returnKeyTitle) {
                _this._keyboard.returnKeyTitle = args.returnKeyTitle;
            }
            _this._keyboard.allowsDecimalPoint = !args.noDecimals;
            _this._keyboardDelegate = MMNumberKeyboardDelegateImpl.initWithOwner(new WeakRef(_this), args.textField);
            _this._keyboard.delegate = _this._keyboardDelegate;
            if (args.onReturnKeyPressed) {
                _this._keyboardDelegate.setCallback(args.onReturnKeyPressed);
            }
            if (args.noReturnKey) {
                _this._keyboardDelegate.setCallback(function () { return false; });
                _this._keyboard.returnKeyTitle = " ";
                _this._keyboard.returnKeyButtonStyle = 1;
            }
            else if (!args.returnKeyTitle) {
                _this._keyboard.returnKeyTitle = " ";
            }
            if (args.returnKeyButtonBackgroundColor) {
                _this._keyboard.returnKeyButtonBackgroundColor = args.returnKeyButtonBackgroundColor.ios;
            }
            _this._nativeTextField = args.textField.ios ? args.textField.ios : args.textField;
            _this._nativeTextField.inputView = _this._keyboard;
            if (args.textField.ios !== undefined && !args.textField.backgroundColor) {
                args.textField.backgroundColor = new color_1.Color("transparent");
            }
            if (args.noIpadInputBar && _this._nativeTextField.inputAssistantItem) {
                _this._nativeTextField.inputAssistantItem.leadingBarButtonGroups = [];
                _this._nativeTextField.inputAssistantItem.trailingBarButtonGroups = [];
            }
            if (args.textField.on) {
                args.textField.on("unloaded", function () {
                    _numkeyboard.splice(_numkeyboard.indexOf(_this), 1);
                });
            }
            resolve();
        });
    };
    return NumericKeyboard;
}());
exports.NumericKeyboard = NumericKeyboard;
var NumericKeyboardView = (function (_super) {
    __extends(NumericKeyboardView, _super);
    function NumericKeyboardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keyboardDelegate = null;
        return _this;
    }
    NumericKeyboardView.prototype.createNativeView = function () {
        var v = _super.prototype.createNativeView.call(this);
        this.nativeView = v;
        this.applyProperties();
        return v;
    };
    NumericKeyboardView.prototype.applyProperties = function () {
        var nslocale;
        if (this.locale) {
            nslocale = NSLocale.localeWithLocaleIdentifier(this.locale);
        }
        else {
            nslocale = NSLocale.currentLocale;
        }
        this._decimalSep = nslocale.decimalSeparator;
        this._keyboard = MMNumberKeyboard.alloc().initWithFrameInputViewStyleLocale(CGRectZero, 0, nslocale);
        if (this.returnKeyTitle) {
            this._keyboard.returnKeyTitle = this.returnKeyTitle;
        }
        this._keyboard.allowsDecimalPoint = !this.noDecimals;
        this._keyboardDelegate = MMNumberKeyboardDelegateImpl.initWithOwner(new WeakRef(this));
        this._keyboard.delegate = this._keyboardDelegate;
        if (this.onReturnKeyPressed) {
            this._keyboardDelegate.setCallback(this.onReturnKeyPressed);
        }
        if (this.noReturnKey) {
            this._keyboardDelegate.setCallback(function () { return false; });
            this._keyboard.returnKeyTitle = " ";
            this._keyboard.returnKeyButtonStyle = 1;
        }
        else if (!this.returnKeyTitle) {
            this._keyboard.returnKeyTitle = " ";
        }
        if (this.returnKeyButtonBackgroundColor) {
            this._keyboard.returnKeyButtonBackgroundColor = this.returnKeyButtonBackgroundColor.ios;
        }
        this.nativeView.inputView = this._keyboard;
        if (this.noIpadInputBar && this.nativeView.inputAssistantItem) {
            this.nativeView.inputAssistantItem.leadingBarButtonGroups = [];
            this.nativeView.inputAssistantItem.trailingBarButtonGroups = [];
        }
        if (!this.backgroundColor) {
            this.backgroundColor = new color_1.Color("transparent");
        }
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.returnKeyTitleProperty.setNative] = function (value) {
        this.returnKeyTitle = value;
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.localeProperty.setNative] = function (value) {
        this.locale = value;
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.noDecimalsProperty.setNative] = function (value) {
        this.noDecimals = value;
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.noReturnKeyProperty.setNative] = function (value) {
        this.noReturnKey = value;
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.noIpadInputBarProperty.setNative] = function (value) {
        this.noIpadInputBar = value;
    };
    NumericKeyboardView.prototype[numeric_keyboard_common_1.returnKeyButtonBackgroundColorProperty.setNative] = function (value) {
        this.returnKeyButtonBackgroundColor = value;
    };
    return NumericKeyboardView;
}(numeric_keyboard_common_1.NumericKeyboardViewBase));
exports.NumericKeyboardView = NumericKeyboardView;
var MMNumberKeyboardDelegateImpl = (function (_super) {
    __extends(MMNumberKeyboardDelegateImpl, _super);
    function MMNumberKeyboardDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MMNumberKeyboardDelegateImpl.initWithOwner = function (owner, textFieldToNotify) {
        var delegate = MMNumberKeyboardDelegateImpl.new();
        delegate._owner = owner;
        delegate._textFieldToNotify = textFieldToNotify;
        return delegate;
    };
    MMNumberKeyboardDelegateImpl.prototype.setCallback = function (callback) {
        this._onReturnKeyPressedCallback = callback;
    };
    MMNumberKeyboardDelegateImpl.prototype.numberKeyboardShouldInsertText = function (keyboard, text) {
        var owner = this._owner.get();
        var nativeView = owner.getNativeTextField();
        var oldText = "" + this._owner.get().getText();
        var decimalSeparator = this._owner.get().getDecimalSeparator();
        if (text === decimalSeparator) {
            return oldText.indexOf(decimalSeparator) === -1;
        }
        var maxLength = this._owner.get().getMaxLength();
        var shouldInsert = !(maxLength && this._owner.get().getText() && this._owner.get().getText().length + text.length > maxLength);
        if (!shouldInsert) {
            return false;
        }
        var range = {
            location: 0,
            length: nativeView.text.length === 0 ? 0 : nativeView.text.length
        };
        if (nativeView.delegate && nativeView.delegate.textFieldShouldChangeCharactersInRangeReplacementString) {
            nativeView.delegate.textFieldShouldChangeCharactersInRangeReplacementString(nativeView, range, nativeView.text + text);
        }
        return true;
    };
    MMNumberKeyboardDelegateImpl.prototype.numberKeyboardShouldDeleteBackward = function (keyboard) {
        var owner = this._owner.get();
        var nativeView = owner.getNativeTextField();
        var range = {
            location: 0,
            length: nativeView.text.length === 0 ? 0 : nativeView.text.length
        };
        var current = nativeView.text;
        current = current.substring(0, current.length - 1);
        if (nativeView.delegate && nativeView.delegate.textFieldShouldChangeCharactersInRangeReplacementString) {
            nativeView.delegate.textFieldShouldChangeCharactersInRangeReplacementString(nativeView, range, current);
        }
        return true;
    };
    MMNumberKeyboardDelegateImpl.prototype.numberKeyboardShouldReturn = function (keyboard) {
        if (this._textFieldToNotify && this._textFieldToNotify.notify) {
            this._textFieldToNotify.notify({ eventName: text_field_1.TextField.returnPressEvent, object: this._textFieldToNotify });
        }
        else {
            var owner = this._owner.get();
            if (owner && owner.notify) {
                owner.notify({ eventName: text_field_1.TextField.returnPressEvent, object: owner });
            }
        }
        if (this._onReturnKeyPressedCallback) {
            return this._onReturnKeyPressedCallback();
        }
        else {
            return true;
        }
    };
    MMNumberKeyboardDelegateImpl.ObjCProtocols = [MMNumberKeyboardDelegate];
    return MMNumberKeyboardDelegateImpl;
}(NSObject));
//# sourceMappingURL=numeric-keyboard.ios.js.map