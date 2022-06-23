"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientController = void 0;

var _ClientService = require("../services/ClientService");

class ClientController {
  async insert(request, response) {
    const {
      name,
      phoneNumber,
      email,
      cpf,
      observation
    } = request.body;
    const service = new _ClientService.ClientService();
    const result = await service.insert({
      name,
      phoneNumber,
      email,
      cpf,
      observation
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async getAll(request, response) {
    const service = new _ClientService.ClientService();
    const categories = await service.getAll();
    return response.json(categories);
  }

  async getById(request, response) {
    const id = Number(request.params.id);
    const service = new _ClientService.ClientService();
    const client = await service.getById(id);
    return response.json(client);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const service = new _ClientService.ClientService();
    const result = await service.delete(Number(id));

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.status(204).end();
  }

  async update(request, response) {
    const id = Number(request.params.id);
    const {
      name,
      phoneNumber,
      email,
      cpf,
      observation
    } = request.body;
    const service = new _ClientService.ClientService();
    const result = await service.update({
      id,
      name,
      phoneNumber,
      email,
      cpf,
      observation
    });

    if (result instanceof Error) {
      response.status(404).json(result.message);
    }

    return response.json(result);
  }

}

exports.ClientController = ClientController;