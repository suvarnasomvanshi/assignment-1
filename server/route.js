import express from "express";
import {signIn,signUp,deleteUser,getAllUser} from "./controller"

const router = express.Router();


router.post("/signup",signUp);
router.get("/signin",signIn);
router.get("/allusers",getAllUser);
router.delete("/delete/:id",deleteUser);



export default router;