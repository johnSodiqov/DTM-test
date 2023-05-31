import React, { useState, useEffect } from 'react';
import "./testingPage.css"
import question from '../../Utils/fetch';
import testData from '../Main content/testData';

const TestingPage = () => {
    const [amount, setAmount] = useState(0);
    const [testStatus, setTestStatus] = useState(false);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        testData.getQuestion()
            .then((response) => {
                setTests(response)
            })
    }, []);
    return (
        <div className='row g-0'>
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
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>30</button>
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
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>30</button>
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
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>30</button>
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
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>10</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>20</button>
                                    <button className='btn btn-outline-warning mx-2 ' onClick={() => { setAmount(10); setTestStatus(false) }}>30</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="col-9 test-area">
                {
                    (!testStatus) ? <button className='btn start-button' onClick={() => { setTestStatus(true) }}>Get Started</button> :
                        <div className='row'>
                            {
                                tests.map((item, index1) => {
                                    return (
                                        <div className="col-10">
                                            <h3 className='text-dark'>{item.question}</h3>
                                            {
                                                item.answers.map((item, index2) => {
                                                    return (
                                                        <div class="input-group">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${index1}`} />
                                                                <label class="form-check-label" for={`flexRadioDefault${index1}`}>
                                                                    {item}
                                                                </label>
                                                            </div>

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
