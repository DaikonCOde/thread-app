// hooks
import { useState } from 'react';
// components
import { PresentModal } from '../../modals/Present';
import { ProgressBar } from '../../components/ProgressBar';
import { Questions } from '../../components/Questions';
import { ImageUploader } from '../../components/ImageUploader';

// db
import QuestionsData from '../../db/questions.json';

import ChevronIcon from '../../assets/icons/chevron-left.svg';
import { ContentHome } from './Home.styles';

function Home() {
    // lista de preguntas
    const listQuestions = QuestionsData;

    const [presentModal, setPresentModal] = useState(true);
    const [uploadImage, setUploadImage] = useState(false);
    const [statusProgressBar, setStatusProgressBar] = useState({
        value: 0,
        next: false,
        prev: false
    });
    const [statusQuestions, setStatusQuestions] = useState({
        current_question: listQuestions[0],
        prev_question: null,
        answer: [],
        isCompleted: false
    });

    // funcion para ir a la siguiente pregunta
    const nextQuestion = () => {
        setStatusProgressBar((prev) => ({ value: prev.value + 1, next: true, prev: false }));
    };

    // funcion para ir a la anterior pregunta
    const prevQuestion = () => {
        if (statusProgressBar.value === 0) return;
        // obtener datos de la pregunta anterior
        const getPrevQuestion = listQuestions.filter(
            (question) => question.id_question === statusQuestions.prev_question
        );
        // delay para animar la salida de la actual pregunta e ingresar la nueva pregunta
        setTimeout(() => {
            setStatusQuestions((prev) => ({
                ...prev,
                current_question: getPrevQuestion[0],
                prev_question: getPrevQuestion[0].prev
            }));
        }, 700);

        setStatusProgressBar((prev) => ({ value: prev.value - 1, prev: true, next: false }));
    };

    // funcion al seleccionar una respuesta
    const onClickQuestion = (idOption) => {
        // obtener los datos de la respuesta para obtener el id de la siguiente pregunta
        const getInfoOptionSelected = statusQuestions.current_question.options.filter(
            (option) => option.id === idOption
        );

        // obtener el id de la siguiente pregunta segun la respuesta
        const getIdNextQuestion = getInfoOptionSelected[0].next;

        // obtener datos de la siguiente pregunta
        const getNextQuestion = listQuestions.filter(
            (question) => question.id_question === getIdNextQuestion
        );

        // si existe una prestuesta para la pregunta, eliminarla
        const thereIsAnswerToQuestion = statusQuestions.answer.filter(
            (answer) => answer.id_question !== statusQuestions.current_question.id_question
        );

        // setear la respuesta dentro del array de respuestas
        const saveAnswer = thereIsAnswerToQuestion.concat([
            { id_question: statusQuestions.current_question.id_question, id_option: idOption }
        ]);

        // si ya no existe id de siguiente pregunta termina cuestionario
        setStatusQuestions({
            current_question: getNextQuestion.length ? getNextQuestion[0] : [],
            prev_question: getNextQuestion.length ? getNextQuestion[0].prev : [],
            answer: saveAnswer,
            isCompleted: !getNextQuestion.length
        });
        // 121 es el id de la repuesta 'Si' de la pregunta 1013 para saber si va a subir una foto o no
        if (idOption === 121) setUploadImage(true);
        nextQuestion();
    };

    // funcion al dar continuar al subir imagenes
    const handleImageUploader = () => setUploadImage(false);

    return (
        <ContentHome>
            {!presentModal && !statusQuestions.isCompleted && (
                <>
                    <ProgressBar status={statusProgressBar} totalValues={listQuestions.length} />

                    {statusProgressBar.value ? (
                        <button type="button" className="go-prev-question" onClick={prevQuestion}>
                            <img src={ChevronIcon} alt="chevron left" />
                            <span>Prev</span>
                        </button>
                    ) : null}

                    <Questions
                        question={statusQuestions.current_question}
                        onClickQuestion={onClickQuestion}
                        listAnswer={statusQuestions.answer}
                        typeAction={{
                            next: statusProgressBar.next,
                            prev: statusProgressBar.prev
                        }}
                    />
                </>
            )}
            {uploadImage && <ImageUploader onClickContinue={handleImageUploader} />}
            {/* {!uploadImage && !statusQuestions.isCompleted && <ImageUploader />} */}

            <PresentModal show={presentModal} onClose={() => setPresentModal(!presentModal)} />
        </ContentHome>
    );
}

export default Home;
