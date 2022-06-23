"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductService = void 0;

var _dataSource = require("../database/data-source");

var _Product = require("../model/Product");

class ProductService {
  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_Product.Product);

    const products = await repo.find({
      relations: ['category']
    });
    return products;
  }

  async getById(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Product.Product);

    const product = await repo.findOne({
      where: {
        id: id
      },
      relations: {
        category: true
      }
    });
    return product;
  }

  async insert(_ref) {
    let {
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    } = _ref;

    const repository = _dataSource.AppDataSource.getRepository(_Product.Product);

    const product = repository.create({
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    });
    await repository.save(product);
    return product;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Product.Product);

    const product = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!product) {
      return new Error("Produto does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_Product.Product);

    const product = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!product) {
      return new Error("Product does not exist");
    }

    product.code = code;
    product.category_id = category_id;
    product.brand = brand;
    product.observation = observation;
    product.description = description;
    product.salePrice = salePrice;
    await repo.save(product);
    return product;
  }

}

exports.ProductService = ProductService;