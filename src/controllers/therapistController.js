import TherapistServices from "../services/therapistService";

class therapistController{

// creae therapist
    static async registerTherapist (req, res) {
        const newTherapist = await TherapistServices.registerTherapist(req);
        if (!newTherapist) {
          return res.status(401).json({ message: "failed to register" });
        }
        return res.status(200).json({ message: "Therapist is registered", data: newTherapist });
      }
// get all therapist
      static async getTherapist  (req, res) {
        const newTherapist = await TherapistServices.getTherapist(req);
        if (!newTherapist) {
          return res.status(401).json({ message: "failed to get therapists" });
        }
        return res.status(200).json({ message: "all therapist", data: newTherapist });
      }

      //update therapist
      static async updateTherapist (req, res){

        const newTherapist = await TherapistServices.updateTherapist(req);
        if (!newTherapist){
          return res.status(401).json({message: "fail to update"});

        }
        return res.status(200).json({message:" information updated",data: newTherapist});
       }


}

export default therapistController;