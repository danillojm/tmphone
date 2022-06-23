"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Address = require("../model/Address");

var _Category = require("../model/Category");

var _Client = require("../model/Client");

var _PlatformPurchase = require("../model/PlatformPurchase");

var _Product = require("../model/Product");

var _Purchase = require("../model/Purchase");

var _StockModel = require("../model/StockModel");

const AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "tmphones-db.cjuv1udnppca.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "94527920",
  database: "bd_tmphones",
  synchronize: true,
  logging: false,
  entities: [_Client.Client, _PlatformPurchase.PlatformPurchase, _Product.Product, _StockModel.Stock, _Category.Category, _Purchase.Purchase, _Address.Address],
  migrations: [],
  subscribers: []
});
exports.AppDataSource = AppDataSource;
AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
}).catch(err => {
  console.error("Error during Data Source initialization", err);
});