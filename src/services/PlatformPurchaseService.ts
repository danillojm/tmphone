import { AppDataSource } from '../database/data-source';
import { PlatformPurchase } from './../model/PlatformPurchase';



type PlatformPurchaseRequest = {
  name: string;
  url: string;
  logoImg: string;
  totalValue: number;
}
type PlatformPurchaseUpdateRequest = {
  id: number
  name: string;
  url: string;
  logoImg: string;
  totalValue: number;
}


export class PlatformPurchaseService {


  async getAll(): Promise<any> {

    const repo = AppDataSource.getRepository(PlatformPurchase);
    const platformPurchases = await repo.find();
    return platformPurchases
  }

  async getById(id: number) {
    const repo = AppDataSource.getRepository(PlatformPurchase);
    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });
    return platformPurchase;
  }


  async insert({ name, url, logoImg, totalValue }: PlatformPurchaseRequest): Promise<PlatformPurchase> {

    const repository = AppDataSource.getRepository(PlatformPurchase);
    const platformPurchase = repository.create({
      name, url, logoImg, totalValue
    })

    await repository.save(platformPurchase)
    return platformPurchase
  }

  async delete(id: number) {
    const repo = AppDataSource.getRepository(PlatformPurchase);
    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });
    if (!platformPurchase) {
      return new Error("platformPurchase does not exist");
    }

    await repo.delete(id)

  }

  async update({ id, name, url, logoImg, totalValue }: PlatformPurchaseUpdateRequest) {

    const repo = AppDataSource.getRepository(PlatformPurchase);

    const platformPurchase = await repo.findOne({
      where: {
        id: id
      }
    });

    if (!platformPurchase) {
      return new Error("platformPurchase does not exist");
    }

    platformPurchase.name = name
    platformPurchase.url = url;
    platformPurchase.logoImg = logoImg;
    platformPurchase.totalValue = totalValue;

    await repo.save(platformPurchase)

    return platformPurchase
  }

}
