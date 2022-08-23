import QuestionTherapistService from "../services/therapistquestionservice";



class questionTherapistController{
    static async createQuestions(req, res) {
        const newQuestion = await QuestionTherapistService.createQuestions(req);
        if (!newQuestion) {
          return res.status(401).json({ message: "failed to get question" });
        }
        return res.status(200).json({ message: " question is created", data: newQuestion});
      }
}

export default questionTherapistController;