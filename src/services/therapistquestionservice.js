

import TherapistQuestionModel from "../models/TherapistQuestionModel";



class QuestionTherapistService{

    static async createQuestions(req){
      
        const question = await TherapistQuestionModel.create(req.body);

         return question;

     }

}

export default QuestionTherapistService;