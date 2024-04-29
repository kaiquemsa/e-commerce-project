import Gadgets from "../entities/Gadgets";
import { AppDataSource } from "../database/data-source";

export type GadgetsRequest = {
  name: string;
  img: string;
  price: number;
  quantity: number;
  availability: boolean;
};

export class CreateGadgetsService {
  async execute({ name, img, price, quantity, availability }: GadgetsRequest): Promise<Gadgets> {
    const repository = AppDataSource.getRepository(Gadgets);

    if (await repository.findOneBy({ name })) {
      throw new Error("gadget already exists");
    }

    const Gadget = repository.create({ name, img, price, quantity, availability });

    await repository.save(Gadget);

    return Gadget;
  }
}