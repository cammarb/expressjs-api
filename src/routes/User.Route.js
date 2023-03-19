import express from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
} from "../controllers/User.Controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;
