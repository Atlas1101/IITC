import express from "express";
import { getAllPosts, getPostById } from "../controllers/postController";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);

export default router;
