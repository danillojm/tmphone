"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptReport = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ReceiptReport {
  constructor() {
    _defineProperty(this, "clientName", void 0);

    _defineProperty(this, "cpf", void 0);

    _defineProperty(this, "brandName", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "imei", void 0);

    _defineProperty(this, "salePrice", void 0);

    _defineProperty(this, "observation", void 0);
  }

}

exports.ReceiptReport = ReceiptReport;