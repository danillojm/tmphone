"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformPurchaseController = void 0;

var _PlatformPurchaseService = require("../services/PlatformPurchaseService");

class PlatformPurchaseController {
  async insert(req, res) {
    const {
      name,
      url,
      logoImg,
      totalValue
    } = req.body;
    const service = new _PlatformPurchaseService.PlatformPurchaseService();
    const result = service.insert({
      name,
      url,
      logoImg,
      totalValue
    });
    return res.json(result);
  }

  async getAll(req, res) {
    const service = new _PlatformPurchaseService.PlatformPurchaseService();
    const platformPurchases = await service.getAll();
    return res.json(platformPurchases);
  }

  async getById(request, response) {
    const id = Number(request.params.id);
    const service = new _PlatformPurchaseService.PlatformPurchaseService();
    const platformPurchase = await service.getById(id);
    return response.json(platformPurchase);
  }

  async delete(req, resp) {
    const id = Number(req.params);
    const service = new _PlatformPurchaseService.PlatformPurchaseService();
    const result = await service.delete(id);

    if (result instanceof Error) {
      resp.status(404).json(result.message);
    }

    return resp.status(204).end;
  }

  async update(request, response) {
    const id = Number(request.params.id);
    const {
      name,
      url,
      logoImg,
      totalValue
    } = request.body;
    const service = new _PlatformPurchaseService.PlatformPurchaseService();
    const result = await service.update({
      id,
      name,
      url,
      logoImg,
      totalValue
    });

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.json(result);
  }

}

exports.PlatformPurchaseController = PlatformPurchaseController;