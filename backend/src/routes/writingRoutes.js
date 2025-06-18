import express from "express"
import { getWriting, getWritingById, createWriting,updateWriting,deleteWriting } from "../controllers/writingController.js"

const router = express.Router()

router.get("/", getWriting)
router.get("/:id", getWritingById)
router.post("/",createWriting)
router.put("/:id",updateWriting)
router.delete("/:id",deleteWriting)

export default router


