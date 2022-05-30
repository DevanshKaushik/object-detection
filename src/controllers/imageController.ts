import { Request, Response, NextFunction } from "express"
import fs from "fs"
import path from "path"

export const image_detect_object = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    res.status(400).json({ msg: "Image not received" })
    next()
    return
  }

  const imageName = req.file.originalname
  const imageBuffer = Buffer.from(req.file.buffer)
  const imagePath = path.join(__dirname, "../temp/" + imageName)

  fs.writeFile(imagePath, imageBuffer, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json({ msg: "Something went wrong" })
      return
    }

    res
      .status(200)
      .json({ msg: "NOT IMPLEMENTED: Image detect object", img: imageName })
  })
}
