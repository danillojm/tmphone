"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stock = void 0;

var _typeorm = require("typeorm");

var _typeormSequence = require("typeorm-sequence");

var _AbstractModel = require("./AbstractModel");

var _Product = require("./Product");

var _Purchase = require("./Purchase");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Stock = (_dec = (0, _typeorm.Entity)('stock'), _dec2 = (0, _typeormSequence.NextVal)("seq_purchase"), _dec3 = (0, _typeorm.PrimaryColumn)(), _dec4 = (0, _typeorm.Column)({
  name: "product_id"
}), _dec5 = (0, _typeorm.ManyToOne)(type => _Product.Product), _dec6 = (0, _typeorm.JoinColumn)({
  name: 'product_id'
}), _dec7 = (0, _typeorm.Column)(), _dec8 = (0, _typeorm.Column)({
  name: 'unit_price'
}), _dec9 = (0, _typeorm.Column)({
  name: 'total_price'
}), _dec10 = (0, _typeorm.Column)(), _dec11 = (0, _typeorm.Column)(), _dec12 = (0, _typeorm.Column)({
  name: "purchase_id"
}), _dec13 = (0, _typeorm.ManyToOne)(type => _Purchase.Purchase), _dec14 = (0, _typeorm.JoinColumn)({
  name: 'purchase_id'
}), _dec(_class = (_class2 = class Stock extends _AbstractModel.AbstractModel {
  constructor() {
    super(...arguments);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "productId", _descriptor2, this);

    _initializerDefineProperty(this, "product", _descriptor3, this);

    _initializerDefineProperty(this, "quantity", _descriptor4, this);

    _initializerDefineProperty(this, "unitPrice", _descriptor5, this);

    _initializerDefineProperty(this, "totalPrice", _descriptor6, this);

    _initializerDefineProperty(this, "color", _descriptor7, this);

    _initializerDefineProperty(this, "brand", _descriptor8, this);

    _initializerDefineProperty(this, "purchaseId", _descriptor9, this);

    _initializerDefineProperty(this, "purchase", _descriptor10, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "productId", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "quantity", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "unitPrice", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "totalPrice", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "brand", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "purchaseId", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "purchase", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Stock = Stock;