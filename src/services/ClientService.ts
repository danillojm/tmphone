import { AppDataSource } from "../database/data-source";
import { Client } from "../model/Client";

type ClienteRequery = {

  name: string;
  phoneNumber: string;
  email: string;
  cpf: string;
  observation: string;

}


type ClienteUpdateRequery = {
  id: number
  name: string;
  phoneNumber: string;
  email: string;
  cpf: string;
  observation: string;

}

export class ClientService {


  async insert({ name, phoneNumber, email, cpf, observation }: ClienteRequery): Promise<Client> {

    const repo = AppDataSource.getRepository(Client)

    const client = repo.create({ name, phoneNumber, email, cpf, observation })

    repo.save(client)

    return client
  }

  async getAll() {

    const repo = AppDataSource.getRepository(Client);

    const client = await repo.find();

    return client

  }

  async getById(id: number) {
    const repo = AppDataSource.getRepository(Client);
    const client = await repo.findOne({
      where: {
        id: id
      }
    });
    return client;
  }

  async delete(id: number) {

    const repo = AppDataSource.getRepository(Client);
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

  async update({ id, name, phoneNumber, email, cpf, observation }: ClienteUpdateRequery) {

    const repo = AppDataSource.getRepository(Client);
    const client = await repo.findOne({
      where: {
        id: id
      }
    });
    if (!client) {
      return new Error("Client does not exist");
    }

    client.name = name
    client.phoneNumber = phoneNumber
    client.email = email
    client.cpf = cpf
    client.observation = observation
    client.updateDate = new Date()
    await repo.save(client);

  }
}
