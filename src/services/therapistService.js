import TherapistModel from "../models/therapistModel";

class TherapistServices {

    //function that create therapist

    static async registerTherapist(req){
       
        const therapist = await TherapistModel.create(req.body);

         return therapist;

     }

     static async getTherapist(){
        const therapist = await TherapistModel.find(); 
         return therapist;

     }

     static async updateTherapist(req){
        const therapist = await TherapistModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
 
         // const user =  UserModel.findOne({_id:req.params.id});
 
          return therapist;
 
      }
    };

    export default TherapistServices; 
