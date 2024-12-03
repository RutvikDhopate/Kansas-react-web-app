import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: []
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload
        },

        addQuiz: (state, {payload: quiz}) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                description: quiz.description,
                course: quiz.course,
                dueDate: quiz.dueDate,
                points: quiz.points,
                availableDate: quiz.availableDate,
                quizType: quiz.quizType,
                timeLimit: quiz.timeLimit,
                assignmentGroup: quiz.assignmentGroup,
                shuffleForEachStudent: quiz.shuffleForEachStudent,
                allowMultipleAttempts: quiz.allowMultipleAttempts,
                isPublished: quiz.isPublished,
                viewResponse: quiz.viewResponse,
                showCorrectAnswers: quiz.showCorrectAnswers,
                accessCode: quiz.accessCode,
                singleQuestionAtATime: quiz.singleQuestionAtATime,
                cameraRequired: quiz.cameraRequired,
                lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        
        deleteQuiz: (state, {payload: quizId}) => {
            state.quizzes = state.quizzes.filter((q: any) => 
                q._id !== quizId
        ) as any;
        },

        updateQuiz: (state, { payload: quiz }) => {
            console.log("Payload _id:", quiz._id);
            state.quizzes = state.quizzes.map((q: any) =>
            q._id === quiz._id ? quiz : q    
        ) as any;
        }
    }
})

export const { addQuiz, deleteQuiz, updateQuiz, setQuizzes} = quizzesSlice.actions;
export default quizzesSlice.reducer;