import { historyAPI_10,geographAPI_10,politicyAPI_10 } from "../../Utils/fetch";
import question from "../../Utils/fetch";

class testData{
    async getQuestion(){
        let user = question.get(`${historyAPI_10}`)
        .then(response=>{
            console.log(response.data.results);
            return response.data.results
        })
        .catch(err => console.log(err))
        return user
    }

}

export default new testData();
