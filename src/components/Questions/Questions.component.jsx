import { useState, useEffect } from 'react';
import { ContentQuestions } from './Question.styles';
/*
    question: []

    listAnswer: [ {id_question: id_option} ]

    typeAction: {
        prev: boolean,
        next: boolean
    } 
*/

function Questions({ question, onClickQuestion, listAnswer, typeAction }) {
    const [animateMode, setAnimateMode] = useState('');
    const [idOptionSelected, setIdOptionSelected] = useState(false);

    useEffect(() => {
        // si next es true colocar la clase next
        if (typeAction.next) setAnimateMode('next');
        // si prev es true primero eliminar la pregunta actual agregando la clase current-delete
        // para luego cargar la pregunta anterior
        if (typeAction.prev) {
            setAnimateMode('current-delete');
            setTimeout(() => {
                setAnimateMode('prev');
            }, 700);
        }
    }, [typeAction]);

    // filtrar si existe respuesta para la pregunta actual
    useEffect(() => {
        const thereIsAnswerToQuestion = listAnswer.filter(
            (answer) => answer.id_question === question.id_question
        );
        // si existe respuesta retorna el id de la opción y sino false
        const getIdOptionSelected = thereIsAnswerToQuestion.length
            ? thereIsAnswerToQuestion[0].id_option
            : false;

        setIdOptionSelected(getIdOptionSelected);
    }, [listAnswer, question]);

    // función para agregar un delay donde se anima las preguntas
    const delayOnClickOnOption = (idOption) => {
        // eliminar clase de pregunta seleccionada
        setIdOptionSelected(false);
        // clase para eliminar y pasar a la siguiente pregunta
        setAnimateMode('exit');
        setTimeout(() => {
            onClickQuestion(idOption);
            setAnimateMode('');
        }, 700);
    };

    return (
        <ContentQuestions>
            <div className={`wrapper  ${animateMode || 'init'}`}>
                <h4 className="title t-center fw-5">{question.label}</h4>
                <ul className={`list-options d-flex center gap-2  `}>
                    {question.options.map((q) => (
                        <li
                            key={q.id}
                            className={`content-question ${
                                !q.src_img || !q.label ? 'square' : ''
                            }  `}>
                            <button
                                type="button"
                                className={`question d-flex center ${
                                    idOptionSelected && idOptionSelected === q.id ? 'selected' : ''
                                } `}
                                onClick={() => delayOnClickOnOption(q.id)}>
                                {q.src_img && <img src={`/img/${q.src_img}`} alt="icon" />}
                                {q.label && <span className="f-14 d-bock">{q.label}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </ContentQuestions>
    );
}

export default Questions;
