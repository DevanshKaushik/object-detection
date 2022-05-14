import { Request, Response } from "express"

export const image_detect_object = (req: Request, res: Response) => {
  console.log(req.file)
  res.send("NOT IMPLEMENTED: Image detect object")
}
