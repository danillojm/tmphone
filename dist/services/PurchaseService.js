"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurchaseService = void 0;

var _dataSource = require("../database/data-source");

var _Purchase = require("../model/Purchase");

class PurchaseService {
  async insert(_ref) {
    let {
      purchaseDate,
      platformpurchase_id,
      storeName,
      orderId,
      product_id,
      quantity,
      unitPrice,
      totalPrice,
      trackingCode,
      observation,
      status,
      color
    } = _ref;

    const repo = _dataSource.AppDataSource.getRepository(_Purchase.Purchase);

    const purchase = new _Purchase.Purchase();
    const dataInput = new Date(purchaseDate);
    const dataFormatada = dataInput.toLocaleDateString('pt-br', {
      timeZone: 'UTC'
    });
    console.log(dataFormatada);
    purchase.purchaseDate = new Date(purchaseDate);
    purchase.platformpurchaseId = platformpurchase_id;
    purchase.storeName = storeName;
    purchase.orderId = orderId;
    purchase.productId = product_id;
    purchase.quantity = quantity;
    purchase.unitPrice = unitPrice;
    purchase.totalPrice = totalPrice;
    purchase.trackingCode = trackingCode;
    purchase.observation = observation;
    purchase.status = status;
    purchase.productArrived = false;
    purchase.color = color;
    repo.insert(purchase);
    return purchase;
  }

  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_Purchase.Purchase);

    const purchase = await repo.find({
      relations: ['platformPurchase', 'product']
    });
    return purchase;
  }

  async getById(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Purchase.Purchase);

    const purchase = await repo.findOne({
      where: {
        id: id
      },
      relations: {
        platformPurchase: true,
        product: true
      }
    });
    return purchase;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Purchase.Purchase);

    const purchase = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!purchase) {
      return new Error("purchase does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      productArrived,
      trackingCode,
      status,
      color,
      observation
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_Purchase.Purchase);

    const purchase = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!purchase) {
      return new Error("Client does not exist");
    } //console.log(id,orderId, platformpurchaseId, productArrived, productId, purchaseDate, quantity, status, storeName, totalPrice, trackingCode, unitPrice, updateDate, observation )


    purchase.trackingCode = trackingCode;
    purchase.observation = observation;
    purchase.status = status;
    purchase.productArrived = productArrived;
    purchase.updateDate = new Date();
    console.log(purchase);
    purchase.color = color;
    /**  orderId
      platformpurchaseId
      productArrived
      productId
      purchaseDate
      quantity
      status
      storeName
      totalPrice
      trackingCode
      unitPrice
      updateDate
      observation
    */

    await repo.save(purchase);
  }

}

exports.PurchaseService = PurchaseService;