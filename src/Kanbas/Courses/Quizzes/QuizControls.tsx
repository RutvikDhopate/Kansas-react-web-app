import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import QuizCreator from "./QuizCreator";
import { useState } from "react";
export default function QuizControls() {

    const [quizName, setQuizName] = useState("");
    const [points, setPoints] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [availableDate, setAvailableDate] = useState("");
    const addQuiz = () => {
        console.log("Quiz added:", { quizName, points, dueDate, availableDate });
    };

    return (
        <div>
            <div className="search-box-container me-1">
                <FaSearch className="search-icon fs-3"/>        
                <input id="wd-search-quiz" type="search"
                    placeholder="Search for Quiz" className="search-input"/>
            </div>
            <button id="wd-options-quiz" className="btn btn-lg btn-secondary me-1 float-end"><IoEllipsisVertical /></button>
            <button id="wd-add-quiz" className="btn btn-lg btn-danger me-1 float-end"
            data-bs-toggle="modal" data-bs-target="#wd-add-quiz-dialog">
                New Quiz
            </button>
            <button id="wd-add-quiz-group" className="btn btn-lg btn-secondary me-1 float-end">
                New Group
            </button>

            <QuizCreator
                dialogTitle="Create New Quiz"
                quizName={quizName}
                setQuizName={setQuizName}
                points={points}
                setPoints={setPoints}
                dueDate={dueDate}
                setDueDate={setDueDate}
                availableDate={availableDate}
                setAvailableDate={setAvailableDate}
                addQuiz={addQuiz}
            />
        </div>
    );
}