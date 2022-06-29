import React, { useState } from "react";
import { QuizData } from "../data/data";
import QuestionBox from "./questionbox";
import '../styles/style.css'

function Quiz() {
const [data, setData] = useState(QuizData)

    return ( 
        <div className="container">
            <div className="title">
            Quiz
            </div>
            {
                data && data.map(item => {
                    return (
                        <QuestionBox question={item?.question} 
                        answers={item?.answers} key={item?.questionId}/>
                    )
                })
            }
        </div>
    );
}

export default Quiz;