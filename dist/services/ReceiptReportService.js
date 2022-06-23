"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptReportService = void 0;

var _ReceiptReport = require("../model/ReceiptReport");

class ReceiptReportService {
  async getReceiptReport(_ref) {
    let {
      clientName,
      cpf,
      brandName,
      description,
      imei,
      salePrice,
      observation
    } = _ref;
    const receiptReport = new _ReceiptReport.ReceiptReport();
    receiptReport.clientName = clientName;
    receiptReport.cpf = cpf;
    receiptReport.brandName = brandName;
    receiptReport.description = description;
    receiptReport.imei = imei;
    receiptReport.salePrice = salePrice;
    receiptReport.observation = observation;
    return receiptReport;
  }

}

exports.ReceiptReportService = ReceiptReportService;