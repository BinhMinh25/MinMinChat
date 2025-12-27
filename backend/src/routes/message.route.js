import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("Send mesage endpoint");
});

export default router;
