import { Router } from "express";
import { updatePostSchema} from "../models/postModel.js";
import validateSchema from "../middlewares/validateSchema.js";
import { deletePost, updatePost } from "../controllers/postController.js";
import { postPost } from "../controllers/postsController.js";
import { postValidation } from "../middlewares/postPostMIddleware.js";
import { validateSignIn } from "../middlewares/authMiddleware.js";

const postRouter = Router();

postRouter.post("/post",validateSignIn,postValidation, postPost);
postRouter.patch("/post/:postId", validateSchema(updatePostSchema), updatePost);
postRouter.delete("/post/:postId", deletePost);

export default postRouter;