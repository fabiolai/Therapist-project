import QuestionService from "../services/userQuestionService"



class questionController{
    static async createQuestion(req, res) {
        const newQuestion = await QuestionService.createQuestion(req);
        if (!newQuestion) {
          return res.status(401).json({ message: "failed to get question" });
        }
        return res.status(200).json({ message: " question is created", data: newQuestion});
      }


}

export default questionController