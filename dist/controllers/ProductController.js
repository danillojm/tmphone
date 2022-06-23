"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductController = void 0;

var _ProductService = require("../services/ProductService");

class ProductController {
  async insert(req, res) {
    const {
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    } = req.body;
    const service = new _ProductService.ProductService();
    const result = service.insert({
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    });
    return res.json(result);
  }

  async getAll(req, res) {
    const service = new _ProductService.ProductService();
    const products = await service.getAll();
    return res.json(products);
  }

  async getById(request, response) {
    const id = Number(request.params.id);
    const service = new _ProductService.ProductService();
    const product = await service.getById(id);
    return response.json(product);
  }

  async delete(req, resp) {
    const id = Number(req.params.id);
    const service = new _ProductService.ProductService();
    const result = await service.delete(id);

    if (result instanceof Error) {
      resp.status(404).json(result.message);
    }

    return resp.status(204).end;
  }

  async update(request, response) {
    const id = Number(request.params.id);
    const {
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    } = request.body;
    const service = new _ProductService.ProductService();
    const result = await service.update({
      id,
      code,
      category_id,
      brand,
      observation,
      description,
      salePrice
    });

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.json(result);
  }

}

exports.ProductController = ProductController;