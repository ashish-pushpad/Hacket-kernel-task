import * as User from "../controller/user.contoller.js";
import express from 'express';

const router=express.Router();

router.post("/save",User.createUser);

router.get("/fetch",User.fetchUser);

export default router;
