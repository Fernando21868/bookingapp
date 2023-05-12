import { verifyAdmin } from "../utils/verifyToken.js";
import express from "express";
import {
  createHotel,
  updatedHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
} from "../controllers/hotel.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updatedHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GETALL
router.get("/", getHotels);

// GET QUANTITY OF CITIES
router.get("/countByCity", countByCity);

// GET QUANTITY OF TYPES
router.get("/countByType", countByType);

export default router;
