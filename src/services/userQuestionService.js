import QuestionModel from "../models/userQuestionModel";
import  userQuestion from "../models/userQuestionModel";


class QuestionService{

    static async createQuestion(req){
      
        const question = await QuestionModel.create(req.body);

         return question;

     }

}

export default QuestionService;