import { useParams } from "react-router";
import * as quizzesClient from "./client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function QuizAttempt() {
  const { qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [latestAttempt, setLatestAttempt] = useState<any>({});
  const [currentQuiz, setCurrentQuiz] = useState<any>({});
  const [startAttempt, setStartAttempt] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState<any>({});

  const getLatestAttempt = async () => {
    const response = await quizzesClient.getLatestAttempt(qid, currentUser._id);
    setLatestAttempt(response);

    // Update currentAttempt with latestAttempt if it exists
    if (response) {
      setCurrentAttempt(response);
    }
    return response;
  };

  const calculateScore = () => {
    let points = 0;

    // Ensure questions and answers are available
    const questions = currentQuiz?.questions || [];
    const answers = currentAttempt?.answers || [];

    if (answers.length === 0) {
      return points;
    }

    // Iterate through each answer provided by the user
    answers.forEach((answer: any) => {
      const question = questions?.find(
        (ques: any) => String(ques._id) === String(answer.questionId)
      );

      // If the question is not found, skip this answer
      if (!question) return;

      // Determine correctness and calculate points based on the question type
      switch (question.questionType) {
        case "Multiple Choice":
          // Check if the selected choice is correct
          if (
            answer.selectedChoices?.length === 1 &&
            answer.selectedChoices[0].isCorrect
          ) {
            points += question.points;
          }
          break;

        case "Multiple Select":
          // Check if all selected choices match the correct choices
          const correctChoices = question.choices.filter(
            (choice: any) => choice.isCorrect
          );
          const selectedCorrectChoices = answer.selectedChoices.filter(
            (choice: any) => choice.isCorrect && choice.isSelected
          );

          if (
            correctChoices.length === selectedCorrectChoices.length &&
            correctChoices.every((correctChoice: any) =>
              selectedCorrectChoices.some(
                (selected: any) => selected.text === correctChoice.text
              )
            )
          ) {
            points += question.points;
          }
          break;

        case "True/False":
          // Find the correct choice based on isCorrect
          const correctChoice = question.choices?.find(
            (choice: any) => choice.isCorrect
          );
          const correctAnswer = correctChoice
            ? correctChoice.text.toLowerCase() === "true"
            : null;

          // Compare the user's answer with the correct answer
          if (answer.trueFalseAnswer === correctAnswer) {
            points += question.points;
          }
          break;

        case "Fill in the Blanks":
          // Check if all blank answers are correct
          const correctBlanks = question.blanks.map(
            (blank: any) => blank.answer
          );
          const providedAnswers = answer.fillInAnswers.map((ans: any) =>
            ans.answer.trim()
          );

          if (
            correctBlanks.length === providedAnswers.length &&
            correctBlanks.every(
              (correct: any, index: any) =>
                correct.toLowerCase() === providedAnswers[index]?.toLowerCase()
            )
          ) {
            points += question.points;
          }
          break;

        default:
          console.warn(`Unknown question type: ${question.questionType}`);
      }
    });

    return points;
  };

  const getQuiz = async () => {
    const quiz = await quizzesClient.getQuizById(qid);
    setCurrentQuiz(quiz);
    return quiz;
  };

  const handleSubmitQuiz = async () => {
    if (latestAttempt) {
      alert("Quiz is already submitted! You can only view the last attempt.");
    } else {
      const points = calculateScore();
      const finishedAttempt = {
        ...currentAttempt,
        completedAt: new Date().toISOString(),
        score: points,
      };
      await quizzesClient.submitQuiz(finishedAttempt);
      getLatestAttempt();
    }
  };

  const startQuiz = () => {
    getLatestAttempt();
    if (latestAttempt) {
      alert("Quiz is already submitted! You can only view the last attempt.");
    } else {
      setStartAttempt(true);
      setCurrentAttempt({
        quizId: qid,
        studentId: currentUser._id,
        attemptNumber: 1,
        startedAt: Date.now(),
        answers: [],
      });
    }
  };

  const handleAnswerChange = (questionId: any, answer: any) => {
    setCurrentAttempt((prevAttempt: any) => {
      const existingAnswerIndex = prevAttempt.answers?.findIndex(
        (ques: any) => ques.questionId === questionId
      );

      let updatedAnswers;
      if (existingAnswerIndex !== -1) {
        updatedAnswers = [...prevAttempt.answers];
        updatedAnswers[existingAnswerIndex] = {
          ...updatedAnswers[existingAnswerIndex],
          ...answer,
        };
      } else {
        updatedAnswers = [...prevAttempt.answers, { questionId, ...answer }];
      }

      return {
        ...prevAttempt,
        answers: updatedAnswers,
      };
    });
  };

  useEffect(() => {
    getQuiz();
    getLatestAttempt();
  }, []);

  return (
    <>
      <div>Quiz Title - {currentQuiz.title}</div>
      <div>Quiz Description - {currentQuiz.description}</div>
      <div>Total Points - {currentQuiz.points}</div>
      <div>Due Date - {currentQuiz.dueDate}</div>
      <div>Available Date - {currentQuiz.availabilityDate}</div>
      <div>Time Limit - {currentQuiz.timeLimit} minutes</div>
      <hr />

      <div>
        Points Scored - {latestAttempt ? latestAttempt.score : "Not Submitted"}
      </div>
      <div>
        Quiz Submitted on -{" "}
        {latestAttempt ? latestAttempt.completedAt : "Not Submitted"}
      </div>
      <hr />

      <button onClick={startQuiz} disabled={!!latestAttempt}>
        Start Quiz
      </button>
      <hr />

      {(latestAttempt || startAttempt) && currentQuiz.questions && (
        <div>
          <h2>Questions</h2>
          {currentQuiz.questions.map((question: any, index: number) => (
            <div key={index}>
              <p>
                {index + 1}. {question.questionText}
              </p>

              {/* Multiple Choice */}
              {question.questionType === "Multiple Choice" &&
                question.choices.map((choice: any, idx: number) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={choice.text}
                      checked={
                        (currentAttempt.answers &&
                          currentAttempt.answers
                            .find((ans: any) => ans.questionId === question._id)
                            ?.selectedChoices.find(
                              (opt: any) => opt.text === choice.text
                            )?.isSelected) ||
                        false
                      }
                      onChange={() => {
                        if (!latestAttempt) {
                          handleAnswerChange(question._id, {
                            answerType: "Multiple Choice",
                            selectedChoices: [{ ...choice, isSelected: true }],
                          });
                        }
                      }}
                      disabled={!!latestAttempt}
                    />
                    <label>{choice.text}</label>
                  </div>
                ))}

              {/* Display Correct Answer for Multiple Choice after submission
              {latestAttempt && question.questionType === "Multiple Choice" && (
                <div>
                  <strong>Correct Answer:</strong> {question.choices?. }
                </div>
              )} */}

              {/* True/False */}
              {question.questionType === "True/False" && (
                <div>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="true"
                    checked={
                      currentAttempt.answers?.find(
                        (ans: any) => ans.questionId === question._id
                      )?.trueFalseAnswer === true
                    }
                    onChange={() => {
                      if (!latestAttempt) {
                        handleAnswerChange(question._id, {
                          answerType: "True/False",
                          trueFalseAnswer: true,
                        });
                      }
                    }}
                    disabled={!!latestAttempt}
                  />
                  <label>True</label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value="false"
                    checked={
                      currentAttempt.answers?.find(
                        (ans: any) => ans.questionId === question._id
                      )?.trueFalseAnswer === false
                    }
                    onChange={() => {
                      if (!latestAttempt) {
                        handleAnswerChange(question._id, {
                          answerType: "True/False",
                          trueFalseAnswer: false,
                        });
                      }
                    }}
                    disabled={!!latestAttempt}
                  />
                  <label>False</label>
                </div>
              )}

              {/* Fill in the Blanks */}
              {question.questionType === "Fill in the Blanks" && (
                <input
                  type="text"
                  placeholder="Enter your answer"
                  value={
                    currentAttempt.answers?.find(
                      (ans: any) => ans.questionId === question._id
                    )?.fillInAnswers?.[0]?.answer || ""
                  }
                  onChange={(e) => {
                    if (!latestAttempt) {
                      handleAnswerChange(question._id, {
                        answerType: "Fill in the Blanks",
                        fillInAnswers: [{ answer: e.target.value }],
                      });
                    }
                  }}
                  disabled={!!latestAttempt}
                />
              )}

              {/* Multiple Select */}
              {question.questionType === "Multiple Select" &&
                question.choices.map((choice: any, idx: number) => (
                  <div key={idx}>
                    <input
                      type="checkbox"
                      name={`question-${index}`}
                      value={choice.text}
                      checked={
                        (currentAttempt &&
                          currentAttempt.answers &&
                          currentAttempt.answers
                            .find((ans: any) => ans.questionId === question._id)
                            ?.selectedChoices.find(
                              (opt: any) => opt.text === choice.text
                            )?.isSelected) ||
                        false
                      }
                      onChange={(e) => {
                        if (!latestAttempt) {
                          const isSelected = e.target.checked;

                          const currentSelectedChoices =
                            currentAttempt.answers?.find(
                              (ans: any) => ans.questionId === question._id
                            )?.selectedChoices || [];

                          const updatedSelectedChoices =
                            currentSelectedChoices.map((opt: any) =>
                              opt.text === choice.text
                                ? { ...opt, isSelected }
                                : opt
                            );

                          if (
                            !updatedSelectedChoices?.find(
                              (opt: any) => opt.text === choice.text
                            )
                          ) {
                            updatedSelectedChoices.push({
                              ...choice,
                              isSelected,
                            });
                          }

                          handleAnswerChange(question._id, {
                            answerType: "Multiple Select",
                            selectedChoices: updatedSelectedChoices,
                          });
                        }
                      }}
                      disabled={!!latestAttempt}
                    />
                    <label>{choice.text}</label>
                  </div>
                ))}
            </div>
          ))}
          <hr />
          <button onClick={handleSubmitQuiz} disabled={!!latestAttempt}>
            Submit Quiz
          </button>
        </div>
      )}
    </>
  );
}
