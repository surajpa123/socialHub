import express  from "express";

import {
getFeedPost,getUsersPost,likePost
} from '../controllers/posts.js'
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


// read

router.get("/",verifyToken, getFeedPost);

router.get("/:userId/posts", verifyToken, getUsersPost);


// patch

router.patch("/:id/like", verifyToken,likePost);


export default router