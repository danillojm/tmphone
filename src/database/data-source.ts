import "reflect-metadata"
import { DataSource } from "typeorm"
import { Address } from "../model/Address"
import { Category } from "../model/Category"
import { Client } from "../model/Client"
import { PlatformPurchase } from "../model/PlatformPurchase"
import { Product } from "../model/Product"
import { Purchase } from "../model/Purchase"
import { Stock } from "../model/StockModel"
import { ProductService } from "../services/ProductService"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "tmphones-db.cjuv1udnppca.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "94527920",
  database: "bd_tmphones",
  synchronize: true,
  logging: false,
  entities: [Client, PlatformPurchase, Product, Stock, Category, Purchase, Address],
  migrations: [],
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })
