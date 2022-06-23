import { AppDataSource } from "../database/data-source";
import { Category } from "../model/Category";
import { Service } from "./service";


type CategoryRequest = {
  name: string,
  description: string
}

type CategoryRequestUpdate = {

  id: number
  name: string,
  description: string
}

export class CategoryService implements Service {


  async insert({ name, description }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const categoryByName = await repo.findOne({
      where: {
        name: name
      }
    })
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
    const repo = AppDataSource.getRepository(Category);
    const categories = await repo.find(

    );
    return categories;
  }


  async delete(id: number) {
    const repo = AppDataSource.getRepository(Category);
    const category = await repo.findOne({
      where: {
        id: id,
      }
    })
    if (!category) {
      return new Error("Category does not exist");
    }

    await repo.delete(id)

  }

  async update({ id, name, description }: CategoryRequestUpdate) {

    const repo = AppDataSource.getRepository(Category);

    const category = await repo.findOne({
      where: {
        id: id,
      }
    })

    if (!category) {
      return new Error("Category does not exist");
    }

    category.name = name;
    category.description = description

    await repo.save(category)

    return category
  }
}
