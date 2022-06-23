"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Purchase = void 0;

var _typeorm = require("typeorm");

var _typeormSequence = require("typeorm-sequence");

var _AbstractModel = require("./AbstractModel");

var _PlatformPurchase = require("./PlatformPurchase");

var _Product = require("./Product");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Purchase = (_dec = (0, _typeorm.Entity)("purchase"), _dec2 = (0, _typeormSequence.NextVal)("seq_purchase"), _dec3 = (0, _typeorm.PrimaryColumn)(), _dec4 = (0, _typeorm.CreateDateColumn)({
  name: 'purchase_date'
}), _dec5 = (0, _typeorm.Column)({
  name: "platformpurchase_id"
}), _dec6 = (0, _typeorm.ManyToOne)(type => _PlatformPurchase.PlatformPurchase), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'platformpurchase_id'
}), _dec8 = (0, _typeorm.Column)({
  name: "store_name"
}), _dec9 = (0, _typeorm.Column)({
  name: "order_id"
}), _dec10 = (0, _typeorm.Column)({
  name: "product_id"
}), _dec11 = (0, _typeorm.ManyToOne)(type => _Product.Product), _dec12 = (0, _typeorm.JoinColumn)({
  name: 'product_id'
}), _dec13 = (0, _typeorm.Column)(), _dec14 = (0, _typeorm.Column)({
  name: "unit_price"
}), _dec15 = (0, _typeorm.Column)({
  name: "total_price"
}), _dec16 = (0, _typeorm.Column)({
  name: "tracking_code"
}), _dec17 = (0, _typeorm.Column)(), _dec18 = (0, _typeorm.Column)(), _dec19 = (0, _typeorm.Column)({
  name: "product_arrived"
}), _dec20 = (0, _typeorm.Column)(), _dec(_class = (_class2 = class Purchase extends _AbstractModel.AbstractModel {
  constructor() {
    super(...arguments);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "purchaseDate", _descriptor2, this);

    _initializerDefineProperty(this, "platformpurchaseId", _descriptor3, this);

    _initializerDefineProperty(this, "platformPurchase", _descriptor4, this);

    _initializerDefineProperty(this, "storeName", _descriptor5, this);

    _initializerDefineProperty(this, "orderId", _descriptor6, this);

    _initializerDefineProperty(this, "productId", _descriptor7, this);

    _initializerDefineProperty(this, "product", _descriptor8, this);

    _initializerDefineProperty(this, "quantity", _descriptor9, this);

    _initializerDefineProperty(this, "unitPrice", _descriptor10, this);

    _initializerDefineProperty(this, "totalPrice", _descriptor11, this);

    _initializerDefineProperty(this, "trackingCode", _descriptor12, this);

    _initializerDefineProperty(this, "observation", _descriptor13, this);

    _initializerDefineProperty(this, "status", _descriptor14, this);

    _initializerDefineProperty(this, "productArrived", _descriptor15, this);

    _initializerDefineProperty(this, "color", _descriptor16, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "purchaseDate", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "platformpurchaseId", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "platformPurchase", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "storeName", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "orderId", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "productId", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "quantity", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "unitPrice", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "totalPrice", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "trackingCode", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "observation", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "productArrived", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Purchase = Purchase;