import React, { useState } from "react";
import '../styles/style.css'
function QuestionBox({question, answers, key}) {
    const [answer, setAnswers] = useState(answers)
    return ( 
        <div className="questions">
            <div className="question">
                    {question}
            </div>
            {
                answer && answer.map(item => {
                    return(
                        <button className="btnAnswer" key={key}>
                        {item}
                        </button>
                    )
                }

                )
            }
            
        </div>
    );
}

export default QuestionBox;