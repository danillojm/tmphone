"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _ReceiptReportController = require("./controllers/ReceiptReportController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)(); //report

exports.router = router;
router.get('/generateReport', new _ReceiptReportController.ReceiptReportController().generateReport);
router.get('/generateReceiptReport', new _ReceiptReportController.ReceiptReportController().generateReceiptReport);