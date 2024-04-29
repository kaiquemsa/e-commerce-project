import { AppDataSource } from "../database/data-source";
import Gadgets from "../entities/Gadgets";
import { GadgetsRequest } from "./CreateGadgetService";

type GadgetUpdateRequest = GadgetsRequest & {
  id: string;
};

export default class UpdateGadgetService {
  async execute({
    id,
    name,
    img,
    price,
    quantity,
    availability
  }: GadgetUpdateRequest): Promise<Gadgets> {
    const repository = AppDataSource.getRepository(Gadgets);

    const gadget = await repository.findOneBy({ id });

    if (!gadget) {
      throw new Error("gadget does not exist");
    }

    gadget.name = name || gadget.name;
    gadget.img = img || gadget.img;
    gadget.price = price || gadget.price;
    gadget.quantity = quantity || gadget.quantity;
    gadget.availability = availability || gadget.availability;

    return await repository.save(gadget);
  }
}