import express from "express";
export const router = express.Router();

router.get("/", (req,res) =>{
res.render ("home")
})

router.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
