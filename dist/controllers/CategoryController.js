"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryController = void 0;

var _CategoryService = require("../services/CategoryService");

class CategoryController {
  async insert(req, res) {
    const {
      name,
      description
    } = req.body;
    const service = new _CategoryService.CategoryService();
    const result = await service.insert({
      name,
      description
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async getAll(request, response) {
    const service = new _CategoryService.CategoryService();
    const categories = await service.getAll();
    return response.json(categories);
  }

  async delete(req, resp) {
    const id = Number(req.params.id);
    const service = new _CategoryService.CategoryService();
    const result = await service.delete(id);

    if (result instanceof Error) {
      resp.status(404).json(result.message);
    }

    return resp.status(204).end;
  }

  async update(req, resp) {
    const id = Number(req.params.id);
    const {
      name,
      description
    } = req.body;
    const service = new _CategoryService.CategoryService();
    const result = await service.update({
      id,
      name,
      description
    });

    if (result instanceof Error) {
      resp.status(404).json(result.message);
    }

    return resp.json(result);
  }

}

exports.CategoryController = CategoryController;