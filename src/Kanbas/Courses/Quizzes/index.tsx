import { BsGripVertical } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import QuizControlButtons from "./QuizControlButtons";
import { useNavigate, useParams } from "react-router";
import QuizControls from "./QuizControls";

export default function Quizzes() {
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} at ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
    }

    const quizzes = useState<any[]>([]);
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    return (
        <div id="wd-quizzes" style={{marginLeft:"20px", marginRight:"20px"}}>
            <QuizControls/>
            <br /><br /><br />
            <ul id="wd-quiz-title" className="list-group rounded-0">
                <li className="wd-quiz-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-quiz-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3"/>
                        <RiArrowDropDownFill className="me-2 fs-1" type="button"/>
                        QUIZZES
                        <IoEllipsisVertical className="float-end fs-3"/>
                        <FaPlus className="float-end" type="button"/>
                    </div>
                    <ul className="wd-quiz-list list-group rounded-0">
                        {quizzes
                        // .filter((assignment: any) => assignment.course === cid)
                        .map((quiz: any) => (
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
                                {/* <QuizControlButtons
                                    quizId={quiz._id}
                                    deleteQuiz={(quizId) => removeQuiz(quizId)}/>    */}
                                <div style={{marginLeft:"75px"}}>
                                    <a className="wd-assignment-link text-black"
                                        // href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{textDecoration:"none"}}
                                        // onClick={() => fetchAssignmentDetails(assignment._id)}
                                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/${quiz._id}`)}
                                    >
                                        <strong>{quiz._id}-{quiz.title}</strong>
                                    </a>
                                    <br/>
                                    <span><a className="wd-modules-list-link text-danger"
                                        href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> {formatDate(quiz.availableDate)} | </span>
                                    <br />
                                    <span>
                                        <strong>Due</strong> {formatDate(quiz.dueDate)} | {quiz.points} pts
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div> 
    );
}