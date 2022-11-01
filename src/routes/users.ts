import express from "express";
const router = express.Router();

interface Details {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

const myREsponse: Details = {
  slackUsername: "sirObed",
  backend: true,
  age: 30,
  bio: "Full stack web developer",
};
/* GET users Details. */
router.get("/", function (req, res, next) {
  res.status(200).json(myREsponse);
});

export default router;
