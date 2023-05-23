import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updatedRoom,
  updatedRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import express from "express";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updatedRoom);
router.put("/availability/:id", updatedRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GETALL
router.get("/", getRooms);

export default router;
