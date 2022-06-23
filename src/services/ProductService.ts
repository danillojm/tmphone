
import { AppDataSource } from '../database/data-source';
import { Product } from '../model/Product';
import { Service } from './service';

type ProductRequest = {

  code: string;
  category_id: string;
  brand: string;
  observation: string;
  description: string;
  salePrice: number
}

type ProductRequestUpdate = {
  id: number;
  code: string;
  category_id: string;
  brand: string;
  observation: string;
  description: string;
  salePrice: number;
}


export class ProductService implements Service {

  async getAll() {
    const repo = AppDataSource.getRepository(Product);
    const products = await repo.find({
      relations: ['category']
    });
    return products
  }

  async getById(id: number) {
    const repo = AppDataSource.getRepository(Product);
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

  async insert({ code, category_id, brand, observation, description, salePrice }: ProductRequest): Promise<Product> {

    const repository = AppDataSource.getRepository(Product);
    const product = repository.create({
      code, category_id, brand, observation, description, salePrice
    })

    await repository.save(product)
    return product
  }

  async delete(id: number) {
    const repo = AppDataSource.getRepository(Product);
    const product = await repo.findOne({
      where: {
        id: id
      }
    })
    if (!product) {
      return new Error("Produto does not exist");
    }

    await repo.delete(id)

  }

  async update({ id, code, category_id, brand, observation, description, salePrice }: ProductRequestUpdate) {

    const repo = AppDataSource.getRepository(Product);

    const product = await repo.findOne({
      where: {
        id: id
      }
    })

    if (!product) {
      return new Error("Product does not exist");
    }

    product.code = code;
    product.category_id = category_id;
    product.brand = brand;
    product.observation = observation
    product.description = description
    product.salePrice = salePrice
    await repo.save(product)

    return product
  }
}
