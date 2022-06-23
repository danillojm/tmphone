"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StockService = void 0;

var _dataSource = require("../database/data-source");

var _StockModel = require("../model/StockModel");

class StockService {
  async insert(_ref) {
    let {
      product_id,
      quantity,
      unitPrice,
      totalPrice,
      color,
      brand,
      purchase_id
    } = _ref;

    const repo = _dataSource.AppDataSource.getRepository(_StockModel.Stock);

    const stock = new _StockModel.Stock();
    console.log("stock");
    stock.productId = product_id;
    stock.quantity = quantity;
    stock.unitPrice = unitPrice;
    stock.totalPrice = totalPrice;
    stock.color = color;
    stock.brand = brand;
    stock.purchaseId = purchase_id;
    repo.insert(stock);
    console.log(stock);
    return stock;
  }

  async getById() {}

  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_StockModel.Stock);

    const stocks = await repo.find({
      relations: ['purchase', 'product']
    });
    return stocks;
  }

  delete() {
    const repo = _dataSource.AppDataSource.getRepository(_StockModel.Stock);
  }

}

exports.StockService = StockService;