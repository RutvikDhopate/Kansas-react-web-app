import { useNavigate, useParams } from "react-router";
import * as quizzesClient from "./client";
import { useEffect, useState } from "react";
import { FaE, FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState<any>({});
  const [showQuestion, setShowQuestions] = useState(false);

  const fetchQuizDetails = async (qid: any) => {
    const currentQuiz = await quizzesClient.getQuizById(qid);
    setCurrentQuiz(currentQuiz);
    console.log(currentQuiz);
    return currentQuiz;
  };

  useEffect(() => {
    fetchQuizDetails(qid);
  }, [qid]);

  return (
    <>
      <div className="container mt-4">
        <div className="card p-4">
          <h3 className="card-title">Quiz Details</h3>
          <div className="mb-3">
            <strong>Title:</strong> {currentQuiz.title}
            <FaPencil
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
              className="text-primary md-3 me-2 float-end"
              type="button"
            />
            <FaEye
              onClick={() => setShowQuestions(!showQuestion)}
              className="text-primary md-3 me-2 float-end"
              type="button"
            />
          </div>
          <div className="mb-3">
            <strong>Description:</strong> {currentQuiz.description}
          </div>
          <div className="mb-3">
            <strong>Total Points:</strong> {currentQuiz.points}
          </div>
          <div className="mb-3">
            <strong>Due Date:</strong> {currentQuiz.dueDate}
          </div>
          <div className="mb-3">
            <strong>Available Date:</strong> {currentQuiz.availabilityDate}
          </div>
          <div className="mb-3">
            <strong>Time Limit:</strong> {currentQuiz.timeLimit} minutes
          </div>
        </div>
      </div>
      <div className="container mt-4">
        {showQuestion && <h4 className="card-title">Questions</h4>}
        <hr />
        {showQuestion &&
          currentQuiz.questions?.map((question: any, index: number) => (
            <div key={index} className="mb-4">
              <p>
                <strong>
                  {index + 1}. {question.questionText}
                </strong>
              </p>

              {/* Multiple Choice */}
              {question.questionType === "Multiple Choice" &&
                question.choices.map((choice: any, idx: number) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${index}`}
                      value={choice.text}
                    />
                    <label className="form-check-label">{choice.text}</label>
                  </div>
                ))}

              {/* Correct Answer for Multiple Choice */}
              {/* {question.questionType === "Multiple Choice" && (
                <div className="mt-2 text-success">
                  <strong>Correct Answer:</strong>{" "}
                  {question.choices
                    ?.filter((choice: any) => choice.isCorrect)
                    .map((choice: any, idx: number) => (
                      <span key={idx}>{choice.text}, </span>
                    ))}
                </div>
              )} */}

              {/* True/False */}
              {question.questionType === "True/False" && (
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${index}`}
                      value="true"
                    />
                    <label className="form-check-label">True</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${index}`}
                      value="false"
                    />
                    <label className="form-check-label">False</label>
                  </div>
                </div>
              )}

              {/* Correct Answer for True/False */}
              {/* {question.questionType === "True/False" && (
                <div className="mt-2 text-success">
                  <strong>Correct Answer:</strong>{" "}
                  {question.choices
                    ?.filter((choice: any) => choice.isCorrect)
                    .map((choice: any) => (
                      <>{choice.text},</>
                    ))}
                </div>
              )} */}

              {/* Fill in the Blanks */}
              {question.questionType === "Fill in the Blanks" && (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your answer"
                />
              )}

              {/* Correct Answer for Fill in the Blanks */}
              {/* {question.questionType === "Fill in the Blanks" && (
                <div className="mt-2 text-success">
                  <strong>Correct Answer:</strong>{" "}
                  {question.blanks.map((a: any) => (
                    <>{a.answer},</>
                  ))}
                </div>
              )} */}

              {/* Multiple Select */}
              {question.questionType === "Multiple Select" &&
                question.choices.map((choice: any, idx: number) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={`question-${index}`}
                      value={choice.text}
                    />
                    <label className="form-check-label">{choice.text}</label>
                  </div>
                ))}

              {/* Correct Answer for Multiple Select */}
              {/* {question.questionType === "Multiple Select" && (
                <div className="mt-2 text-success">
                  <strong>Correct Answer(s):</strong>{" "}
                  {question.choices
                    ?.filter((choice: any) => choice.isCorrect)
                    .map((choice: any, idx: number) => (
                      <span key={idx}>{choice.text}, </span>
                    ))}
                </div>
              )} */}

              <hr />
            </div>
          ))}
      </div>
    </>
  );
}
