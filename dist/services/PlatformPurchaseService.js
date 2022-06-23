"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformPurchaseService = void 0;

var _dataSource = require("../database/data-source");

var _PlatformPurchase = require("./../model/PlatformPurchase");

class PlatformPurchaseService {
  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_PlatformPurchase.PlatformPurchase);

    const platformPurchases = await repo.find();
    return platformPurchases;
  }

  async getById(id) {
    const repo = _dataSource.AppDataSource.getRepository(_PlatformPurchase.PlatformPurchase);

    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });
    return platformPurchase;
  }

  async insert(_ref) {
    let {
      name,
      url,
      logoImg,
      totalValue
    } = _ref;

    const repository = _dataSource.AppDataSource.getRepository(_PlatformPurchase.PlatformPurchase);

    const platformPurchase = repository.create({
      name,
      url,
      logoImg,
      totalValue
    });
    await repository.save(platformPurchase);
    return platformPurchase;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_PlatformPurchase.PlatformPurchase);

    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!platformPurchase) {
      return new Error("platformPurchase does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      name,
      url,
      logoImg,
      totalValue
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_PlatformPurchase.PlatformPurchase);

    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!platformPurchase) {
      return new Error("platformPurchase does not exist");
    }

    platformPurchase.name = name;
    platformPurchase.url = url;
    platformPurchase.logoImg = logoImg;
    platformPurchase.totalValue = totalValue;
    await repo.save(platformPurchase);
    return platformPurchase;
  }

}

exports.PlatformPurchaseService = PlatformPurchaseService;