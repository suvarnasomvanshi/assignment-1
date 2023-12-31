import express from "express";
import {signIn,signUp,deleteUser,getAllUser,getUser,getLoginPerson} from "./controller"

const router = express.Router();


router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/allusers",getAllUser);
router.delete("/delete/:id",deleteUser);
router.get("/userdetail/:_id",getUser)
router.post("/loginPerson",getLoginPerson)


export default router;