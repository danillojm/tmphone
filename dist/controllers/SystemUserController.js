"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemUserController = void 0;

var _SystemUserService = require("../services/SystemUserService");

class SystemUserController {
  async insert(request, response) {
    const {
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    } = request.body;
    const service = new _SystemUserService.SystemUserService();
    const result = await service.insert({
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    });
    response.json(result);
  }

  async getAll(request, response) {
    const service = new _SystemUserService.SystemUserService();
    const systemUsers = await service.getAll();
    response.json(systemUsers);
  }

  async getById(request, response) {
    const id = Number(request.params.id);
    const service = new _SystemUserService.SystemUserService();
    const purchase = await service.getById(id);
    return response.json(purchase);
  }

  async delete(request, response) {
    const id = Number(request.params.id);
    const service = new _SystemUserService.SystemUserService();
    const result = await service.delete(id);
    console.log(result);

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.status(204).end();
  }

  async update(request, response) {
    const id = Number(request.params.id);
    const {
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    } = request.body;
    const service = new _SystemUserService.SystemUserService();
    const result = await service.update({
      id,
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    });

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.json(result);
  }

}

exports.SystemUserController = SystemUserController;