import * as User from "../controller/user.contoller.js";
import db_to_excel from "../controller/db-to-excel.js";
import express from 'express';

const router=express.Router();

router.post("/save",User.createUser);

router.get("/fetch",User.fetchUser);

router.get("/getdatainexcel",db_to_excel)

export default router;
