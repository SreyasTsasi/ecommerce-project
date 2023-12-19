import { Router } from "express";

import * as user from "./request-handlers/user.handler.js";
import { Auth } from "./middlewares/auth.js";

const router = Router();

router.route("/register").post(user.register);
router.route("/login").post(user.login);
router.route("/profile").get(Auth, user.profile);

export default router;