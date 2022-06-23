"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientService = void 0;

var _dataSource = require("../database/data-source");

var _Client = require("../model/Client");

class ClientService {
  async insert(_ref) {
    let {
      name,
      phoneNumber,
      email,
      cpf,
      observation
    } = _ref;

    const repo = _dataSource.AppDataSource.getRepository(_Client.Client);

    const client = repo.create({
      name,
      phoneNumber,
      email,
      cpf,
      observation
    });
    repo.save(client);
    return client;
  }

  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_Client.Client);

    const client = await repo.find();
    return client;
  }

  async getById(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Client.Client);

    const client = await repo.findOne({
      where: {
        id: id
      }
    });
    return client;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Client.Client);

    const client = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!client) {
      return new Error("Client does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      name,
      phoneNumber,
      email,
      cpf,
      observation
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_Client.Client);

    const client = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!client) {
      return new Error("Client does not exist");
    }

    client.name = name;
    client.phoneNumber = phoneNumber;
    client.email = email;
    client.cpf = cpf;
    client.observation = observation;
    client.updateDate = new Date();
    await repo.save(client);
  }

}

exports.ClientService = ClientService;