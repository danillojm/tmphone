import { AppDataSource } from "../database/data-source";
import { SystemUser } from "../model/SystemUser";

type SystemUserRequery = {

  name: string
  login: string
  email: string
  password: string
  phoneNumber: string
  accessProfile: string
}

type SystemUserUpdateRequery = {

  id: number
  name: string
  login: string
  email: string
  password: string
  phoneNumber: string
  accessProfile: string
}

export class SystemUserService {

  async insert({ name, login, password, phoneNumber, accessProfile, email }: SystemUserRequery): Promise<SystemUser> {

    const repo = AppDataSource.getRepository(SystemUser)

    const systemUser = await repo.create({ name, login, password, phoneNumber, accessProfile, email })

    repo.save(systemUser)

    return systemUser
  }

  async getAll() {

    const repo = AppDataSource.getRepository(SystemUser);

    const systemUser = await repo.find();

    return systemUser

  }

  async getById(id: number) {
    const repo = AppDataSource.getRepository(SystemUser);
    const systemUser = await repo.findOne({
      where: {
        id: id
      }
    });
    return systemUser;
  }

  async delete(id: number) {

    const repo = AppDataSource.getRepository(SystemUser);
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

  async update({ id, name, login, password, phoneNumber, accessProfile, email }: SystemUserUpdateRequery) {

    const repo = AppDataSource.getRepository(SystemUser);
    const systemUser = await repo.findOne({
      where: {
        id: id
      }
    });
    if (!SystemUser) {
      return new Error("SystemUser does not exist");
    }

    systemUser.login = login
    systemUser.password = password
    systemUser.accessProfile = accessProfile
    systemUser.name = name
    systemUser.phoneNumber = phoneNumber
    systemUser.email = email
    systemUser.updateDate = new Date()
    await repo.save(systemUser);

  }
}
