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
    const thereIsAnswerToQuestion = listAnswer.filter(
        (answer) => answer.id_question === question.id_question
    );
    // si existe respuesta retorna el id de la opción y sino false
    const getIdOptionSelected = thereIsAnswerToQuestion.length
        ? thereIsAnswerToQuestion[0].id_option
        : false;

    // función para agregar un delay donde se anima las preguntas
    const delayOnClickOnOption = (idOption) => {
        // clase para eliminar y pasar a la siguiente pregunta
        setAnimateMode('exit');
        setTimeout(() => {
            onClickQuestion(idOption);
            setAnimateMode('');
        }, 700);
    };

    return (
        <ContentQuestions>
            <h4 className="title t-center">{question.label}</h4>
            <ul className={`list-options d-flex center column gap-2 ${animateMode || 'init'} `}>
                {question.options.map((q) => (
                    <li key={q.id} className="content-question">
                        <button
                            type="button"
                            className={`question ${
                                getIdOptionSelected && getIdOptionSelected === q.id
                                    ? 'selected'
                                    : ''
                            }`}
                            onClick={() => delayOnClickOnOption(q.id)}>
                            <span className="f-12">{q.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </ContentQuestions>
    );
}

export default Questions;