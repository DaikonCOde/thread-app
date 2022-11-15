/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { ContentProgressBar } from './ProgressBar.styles';

/*
    totalValues = total de preguntas;

    status = {
        next: boolean;
        prev: boolean;
        value: numero de pregunta - number
    }
*/

/*
    prop value ContentProgressBar
    min length: 6

    empezar a animar despues de pasar por los 4 primeros elementos

    mientras que status.value + 3 >= totalValues sea true seguir animando
    si status.value + 3 >= totalValues es false ya no animar 
*/

function ProgressBar({ status, totalValues }) {
    // se crea el array para mapear el total de preguntas
    const createArray = Array.from(Array(totalValues).keys());

    // hook para verificar la accion que se debe de realizar: prev - next
    // y se le agrega o elimina la clase "active"
    useEffect(() => {
        if (status.next) {
            const element = document.querySelector(`#element-${status.value}`);
            element.classList.add('active');
        }
        if (status.prev) {
            const element = document.querySelector(`#element-${status.value + 1}`);
            element.classList.remove('active');
        }
    }, [status]);

    return (
        <ContentProgressBar
            value={
                totalValues <= 6
                    ? 0
                    : status.value + 3 >= totalValues
                    ? totalValues - 6
                    : status.value - 3
            }
            total={totalValues}>
            <ul className="d-flex gap-2 list translate-list" id="progress-list">
                {createArray.map((e) => (
                    <li
                        id={`element-${e}`}
                        key={e}
                        className={`progress-value ${e === 0 ? 'active' : ''}`}>
                        <span className="value f-12 fw-7 t-center d-block">{e + 1}</span>
                    </li>
                ))}
            </ul>
        </ContentProgressBar>
    );
}

export default ProgressBar;
