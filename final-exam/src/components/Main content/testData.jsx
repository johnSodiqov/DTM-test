import {Base_Url}  from "../../Utils/fetch";
import question from "../../Utils/fetch";

class testData{
    async getQuestion(i ,e){
        let user = question.get(`${Base_Url}amount=${i}&category=${e}`)
        .then(response=>{
            return response.data.results
        })
        .catch(err => console.log(err))
        return user
    }

}

export default new testData();
