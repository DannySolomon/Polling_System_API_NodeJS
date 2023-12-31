const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question_controller");
const optionController = require("../controllers/option_controller");

//route explaining the api
router.get("/", (req, res) => {
  res.render("home");
});

//route for all question related
router.get("/questions", questionController.questionsView); //to view all questions
router.get("/questions/:question_id", questionController.questionView); //view a question
router.post("/questions/create", questionController.questionCreate); //create a question
router.get("/questions/:question_id/delete", questionController.questionDelete); //delete a question

//route for all option related
router.post(
  "/questions/:question_id/options/create",
  optionController.optionCreate
); //create an option
router.get("/options/:option_id/delete", optionController.optionDelete); //delete an option
router.get("/options/:option_id/add_vote", optionController.optionAddVote); //add vote to option

module.exports = router;
