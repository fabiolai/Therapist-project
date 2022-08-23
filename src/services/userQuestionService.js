import QuestionModel from "../models/userQuestionModel";



class QuestionService{

    static async createQuestion(req){
      
        const question = await QuestionModel.create(req.body);

         return question;

     }


    //  update status
    static async rejectApprovalQuestion(req){
        
     const rejectApprovalQuestion = await QuestionModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
         return rejectApprovalQuestion;
     }
    

}

export default QuestionService;