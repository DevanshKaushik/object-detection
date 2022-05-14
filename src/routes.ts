import { Router } from "express"
import { image_detect_object } from "./controllers/imageController"

const router = Router()

router.post("/", image_detect_object)

export default router
