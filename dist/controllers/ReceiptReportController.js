"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptReportController = void 0;

require("core-js/modules/es6.regexp.to-string.js");

var _ejs = _interopRequireDefault(require("ejs"));

var _htmlPdf = _interopRequireDefault(require("html-pdf"));

var _path = _interopRequireDefault(require("path"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _ReceiptReport = require("../model/ReceiptReport");

var _ReceiptReportService = require("../services/ReceiptReportService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let receiptReport;

class ReceiptReportController {
  async generateReport(request, response) {
    const {
      clientName,
      cpf,
      brandName,
      description,
      imei,
      salePrice,
      observation
    } = request.body;
    const service = new _ReceiptReportService.ReceiptReportService(); //    const receiptReport = await service.getReceiptReport({ clientName, cpf, brandName, description, imei, salePrice, observation, });

    const filePath = _path.default.join(__dirname, "../report/receiptReport.ejs");

    console.log(receiptReport);
    console.log(receiptReport);

    _ejs.default.renderFile(filePath, {
      receiptReport
    }, (err, data) => {
      if (err) {
        return response.send("Erro na leitura do arquivo");
      }

      _htmlPdf.default.create(data).toFile("recibo.pdf", (err, data) => {
        if (err) {
          return response.send("Erro ao gerar o pdf");
        }
      });

      return response.send(data);
    });
  }

  async generateReceiptReport(request, response) {
    const {
      clientName,
      cpf,
      brandName,
      description,
      imei,
      salePrice,
      observation
    } = request.query; // console.log('query - '+ request.query['clientName'])

    receiptReport = new _ReceiptReport.ReceiptReport();
    receiptReport.clientName = request.query["clientName"].toString();
    receiptReport.cpf = request.query["cpf"].toString();
    receiptReport.brandName = request.query["brandName"].toString();
    receiptReport.description = request.query["description"].toString();
    receiptReport.imei = request.query["imei"].toString();
    receiptReport.salePrice = request.query["salePrice"].toString();
    receiptReport.observation = request.query["observation"].toString();
    console.log(clientName, cpf, brandName, description, imei, salePrice, observation);
    const browser = await _puppeteer.default.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/generateReport", {
      waitUntil: "networkidle0"
    });
    const pdf = await page.pdf({
      path: "hn.pdf",
      format: "a4"
    });
    await browser.close();
    response.contentType("application/pdf");
    return response.send(pdf);
  }

}

exports.ReceiptReportController = ReceiptReportController;