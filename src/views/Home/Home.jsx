// hooks
import { useState } from 'react';
// components
import { PresentModal } from '../../modals/Present';
import { ProgressBar } from '../../components/ProgressBar';

import { ContentHome } from './Home.styles';

function Home() {
    const [presentModal, setPresentModal] = useState(true);
    const [statusProgressBar, setStatusProgressBar] = useState({
        value: 0,
        next: false,
        prev: false
    });

    const nextQuestion = () => {
        setStatusProgressBar((prev) => ({ value: prev.value + 1, next: true, prev: false }));
    };
    const prevQuestion = () => {
        if (statusProgressBar.value === 0) return;
        setStatusProgressBar((prev) => ({ value: prev.value - 1, prev: true, next: false }));
    };

    return (
        <ContentHome>
            {!presentModal && (
                <>
                    <ProgressBar status={statusProgressBar} totalValues={12} />
                    <button type="button" className="btn primary" onClick={nextQuestion}>
                        Next
                    </button>
                    <button type="button" className="btn primary" onClick={prevQuestion}>
                        prev
                    </button>
                </>
            )}

            <PresentModal show={presentModal} onClose={() => setPresentModal(!presentModal)} />
        </ContentHome>
    );
}

export default Home;
