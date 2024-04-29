import Sold from "../entities/Sold";
import { AppDataSource } from "../database/data-source";

export type SoldRequest = {
  name: string;
  img: string;
  price: number;
  quantity: number;
  availability: boolean;
};

export class CreateSellerService {
  async execute({ name, img, price, quantity, availability }: SoldRequest): Promise<Sold> {
    const repository = AppDataSource.getRepository(Sold);

    const ProductSold = repository.create({ name, img, price, quantity, availability });

    await repository.save(ProductSold);

    return ProductSold;
  }
}