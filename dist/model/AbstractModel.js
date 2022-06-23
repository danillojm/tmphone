"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractModel = void 0;

var _typeorm = require("typeorm");

var _typeormSequence = require("typeorm-sequence");

var _dec, _dec2, _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let AbstractModel = (_dec = (0, _typeorm.CreateDateColumn)({
  name: "insertion_date"
}), _dec2 = (0, _typeorm.CreateDateColumn)({
  name: "update_date",
  nullable: true
}), (_class = class AbstractModel extends _typeormSequence.EntityWithSequence {
  constructor() {
    super(...arguments);

    _initializerDefineProperty(this, "insertionDate", _descriptor, this);

    _initializerDefineProperty(this, "updateDate", _descriptor2, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "insertionDate", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "updateDate", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.AbstractModel = AbstractModel;