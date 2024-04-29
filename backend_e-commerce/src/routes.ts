import { Router } from "express";

import CreateGadgetController from "./controllers/CreateGadgetController";
import DeleteGadgetController from "./controllers/DeleteGadgetController";
import GetAllGadgetController from "./controllers/GetAllGadgetController";
import UpdateGadgetController from "./controllers/UpdateGadgetController";

import CreateSellerController from "./controllers/CreateSellerController";
import GetAllSoldController from "./controllers/GetAllSoldController";

const routes = Router();

routes.post("/gadgets", new CreateGadgetController().handle);
routes.get("/gadgets", new GetAllGadgetController().handle);
routes.delete("/gadgets/:id", new DeleteGadgetController().handle);
routes.put("/gadgets/:id", new UpdateGadgetController().handle);

routes.post("/sold", new CreateSellerController().handle);
routes.get("/sold", new GetAllSoldController().handle);


export default routes;