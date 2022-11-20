import { createPortal } from 'react-dom';

import { ContentLoader } from './Loader.styles';

function Loader({ loading, suspense = false }) {
    if (!loading) {
        document.getElementById('root').classList.remove('no-scroll');
        return null;
    }
    if (!suspense) {
        document.getElementById('root').classList.add('no-scroll');
    }

    return createPortal(
        <ContentLoader>
            <div className="content-loader">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
            <div className="overlay" />
        </ContentLoader>,
        document.getElementById('modal')
    );
}

export default Loader;
