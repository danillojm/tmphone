"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryService = void 0;

var _dataSource = require("../database/data-source");

var _Category = require("../model/Category");

class CategoryService {
  async insert(_ref) {
    let {
      name,
      description
    } = _ref;

    const repo = _dataSource.AppDataSource.getRepository(_Category.Category);

    const categoryByName = await repo.findOne({
      where: {
        name: name
      }
    });

    if (categoryByName) {
      return new Error("Category already exists");
    }

    const category = repo.create({
      name,
      description
    });
    await repo.save(category);
    return category;
  }

  async getAll() {
    const repo = _dataSource.AppDataSource.getRepository(_Category.Category);

    const categories = await repo.find();
    return categories;
  }

  async delete(id) {
    const repo = _dataSource.AppDataSource.getRepository(_Category.Category);

    const category = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!category) {
      return new Error("Category does not exist");
    }

    await repo.delete(id);
  }

  async update(_ref2) {
    let {
      id,
      name,
      description
    } = _ref2;

    const repo = _dataSource.AppDataSource.getRepository(_Category.Category);

    const category = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!category) {
      return new Error("Category does not exist");
    }

    category.name = name;
    category.description = description;
    await repo.save(category);
    return category;
  }

}

exports.CategoryService = CategoryService;