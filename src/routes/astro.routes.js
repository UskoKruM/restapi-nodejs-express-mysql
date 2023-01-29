import { Router } from "express";
import { methods as astroController } from "../controllers/astro.controller";

const router = Router();

router.get("/", astroController.getAstros);
router.get("/:id", astroController.getAstroById);

export default router;
