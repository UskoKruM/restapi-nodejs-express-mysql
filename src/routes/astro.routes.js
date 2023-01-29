import { Router } from "express";
import { methods_astro as astroController} from "../controllers/astro.controller";

const router = Router();

router.get("/", astroController.getAstros );


export default router;
