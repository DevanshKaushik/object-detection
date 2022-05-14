import { Router } from "express"
import { image_detect_object } from "./controllers/imageController"
import { upload } from "./middlewares/uploadMiddleware"

const router = Router()

router.post("/", upload.single("image"), image_detect_object)

export default router
