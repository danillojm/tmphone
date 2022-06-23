"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StockController = void 0;

var _StockService = require("../services/StockService");

class StockController {
  async insert(request, response) {
    const {
      product_id,
      quantity,
      unitPrice,
      totalPrice,
      color,
      brand,
      purchase_id
    } = request.body;
    const service = new _StockService.StockService();
    console.log("Passou aqui ");
    const result = await service.insert({
      product_id,
      quantity,
      unitPrice,
      totalPrice,
      color,
      brand,
      purchase_id
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async getAll(request, response) {
    const service = new _StockService.StockService();
    const stock = await service.getAll();
    response.json(stock);
  }

}

exports.StockController = StockController;