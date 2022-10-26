"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_likes, _isSelected) {
        this._likes = _likes;
        this._isSelected = _isSelected;
    }
    Like.prototype.onClick = function () {
        this._likes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
