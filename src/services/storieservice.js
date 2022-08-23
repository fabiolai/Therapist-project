import StorieModel from "../models/storiesModel";



class StorieService{

    
     static async registerStorie(req){
       
        const Storie = await StorieModel.create(req.body);

         return Storie;

     }
}

export default StorieService;