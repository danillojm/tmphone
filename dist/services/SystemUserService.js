"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemUserService = void 0;

var _dataSource = require("../database/data-source");

var _SystemUser = require("../model/SystemUser");

class SystemUserService {
  async insert(_ref) {
    let {
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    } = _ref;

    const repo = _dataSource.AppDataSource.getRepository(_SystemUser.SystemUser);

    const systemUser = await repo.create({
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    });
    repo.save(systemUser);
    return systemUser;
  }

  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_SystemUser.SystemUser);

    const systemUser = await repo.find();
    return systemUser;
  }

  async getById(id) {
    const repo = _dataSource.AppDataSource.getRepository(_SystemUser.SystemUser);

    const systemUser = await repo.findOne({
      where: {
        id: id
      }
    });
    return systemUser;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_SystemUser.SystemUser);

    const systemUser = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!systemUser) {
      return new Error("Client does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      name,
      login,
      password,
      phoneNumber,
      accessProfile,
      email
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_SystemUser.SystemUser);

    const systemUser = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!_SystemUser.SystemUser) {
      return new Error("SystemUser does not exist");
    }

    systemUser.login = login;
    systemUser.password = password;
    systemUser.accessProfile = accessProfile;
    systemUser.name = name;
    systemUser.phoneNumber = phoneNumber;
    systemUser.email = email;
    systemUser.updateDate = new Date();
    await repo.save(systemUser);
  }

}

exports.SystemUserService = SystemUserService;