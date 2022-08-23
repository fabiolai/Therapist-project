import StorieService from "../services/storieservice";



class storieController{
//     static async updateStorie (req, res){

//     const newStorie = await StorieService.updateStorie(req);
//     if (!newStorie){
//       return res.status(401).json({message: "fail to post"});

//     }
//     return res.status(200).json({message:" information posted",data: newStorie});
//    }
   static async registerStorie (req, res) {
    const newStorie = await StorieService.registerStorie(req);
    if (!newStorie) {
      return res.status(401).json({ message: "failed to post" });
    }
    return res.status(200).json({ message: "posted", data: newStorie });
  }
}
export default storieController;