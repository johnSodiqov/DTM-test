import React, { useState, useEffect } from 'react';
import "./testingPage.css"
// import question from '../../Utils/fetch';
import testData from '../Main content/testData';

const TestingPage = () => {
    const [testStatus, setTestStatus] = useState(false);
    const [tests, setTests] = useState([]);
    useEffect(() => {
        testData.getQuestion()
            .then((response) => {
             
                setTests(response)
            })

    }, []);
    const testMath = (i , e) =>{
        testData.getQuestion(i , e)
        .then((response) => {
            console.log(response);
            setTests(response)
        })
        if(tests.length>0){
            let current = [...tests]
            
            current.map(iteam =>{
                let cur = iteam.correct_answer
                if(iteam.incorrect_answers === cur){
    
                }
                else{
                    iteam.incorrect_answers.push(cur)
                 
                    let answers ={} 
                    for(let key in answers){
                        if(!answers.hasOwnProperty(cur[key])){
                            answers[key] = cur[key]
                        }
                    }            
                }
            })
            setTests(current)
        }
    }
    
    const testHistory = (i , e) =>{
        testData.getQuestion(i , e)
        .then((response) => {
            setTests(response)
        })
        if(tests.length>0){
            let current = [...tests]
            
            current.map(iteam =>{
                let cur = iteam.correct_answer
                if(iteam.incorrect_answers === cur){
    
                }
                else{
                    iteam.incorrect_answers.push(cur)
                 
                    let answers ={} 
                    for(let key in answers){
                        if(!answers.hasOwnProperty(cur[key])){
                            answers[key] = cur[key]
                        }
                    }            
                }
            })
            setTests(current)
        }
    }
    
    const testGeog = (i , e) =>{
        testData.getQuestion(i , e)
        .then((response) => {
            setTests(response)
        })
        if(tests.length>0){
            let current = [...tests]
            
            current.map(iteam =>{
                let cur = iteam.correct_answer
                if(iteam.incorrect_answers === cur){
    
                }
                else{
                    iteam.incorrect_answers.push(cur)
                 
                    let answers ={} 
                    for(let key in answers){
                        if(!answers.hasOwnProperty(cur[key])){
                            answers[key] = cur[key]
                        }
                    }            
                }
            })
            setTests(current)
        }
    }
    
    const testPoliticy = (i , e) =>{
        testData.getQuestion(i , e)
        .then((response) => {
            setTests(response)
        })
        if(tests.length>0){
            let current = [...tests]
            
            current.map(iteam =>{
                let cur = iteam.correct_answer
                if(iteam.incorrect_answers === cur){
    
                }
                else{
                    iteam.incorrect_answers.push(cur)
                 
                    let answers ={} 
                    for(let key in answers){
                        if(!answers.hasOwnProperty(cur[key])){
                            answers[key] = cur[key]
                        }
                    }            
                }
            })
            setTests(current)
        }
    }

    return (
        <div className='row g-0 TestSection'>
            <div className="col-3 side-bar">
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fs-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Math
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className='mx-auto'>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testMath(10, 19); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testMath(20, 19); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testMath(30, 19); setTestStatus(false) }}>30</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button fs-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                History
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className='mx-auto'>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testHistory(10, 23); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => {  testHistory(20, 23); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => {  testHistory(30, 23); setTestStatus(false) }}>30</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button fs-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Geograph
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className='mx-auto'>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testGeog(10,22); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testGeog(20,22); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testGeog(30,22); setTestStatus(false) }}>30</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button fs-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Politicy
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className='mx-auto'>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testPoliticy(10, 24); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testPoliticy(20, 24); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { testPoliticy(30, 24); setTestStatus(false) }}>30</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-9 test-area ">
                {
                    (!testStatus) ? <button className='btn start-button' onClick={() => { setTestStatus(true) }}>Get Started</button> :
                        <div className='row overflow TestRow'>
                              {
                        (tests.length>0) && tests.map((iteam, index)=>{
                            return(
                                <div key={index} className="col-10 mt-2">
                                    <h4  className='text-dark'>{iteam.question}</h4>
                                    {
                                        iteam.incorrect_answers.length>0 && iteam.incorrect_answers.map((iteam, index2)=>{
                                            return(
                                                <div key={index2} class="input-group">
                                                   <input class="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${index}`} value={iteam} />
                                                       <label class="form-check-label" for={`flexRadioDefault${index}`}>
                                                      {iteam}
                                                      </label>
                                                </div>  
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                        </div>
                }
            </div>

        </div>
    );
}

export default TestingPage;


// {
//     tests.map((item, index1) => {
//         return (
//             <div key={index1} className="col-10">
//                 <h3 className='text-dark'>{item.question}</h3>
//                 {
//                     item.answers.map((item, index2) => {
//                         return (
//                             <div key={index2} class="input-group">
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${index1}`} value={item} />
//                                     <label class="form-check-label" for={`flexRadioDefault${index1}`}>
//                                         {item}
//                                     </label>
//                                 </div>

//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     })
// }