import { createPortal } from 'react-dom';

import { ContentLoader } from './Loader.styles';

function Loader({ loading }) {
    if (!loading) {
        return null;
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
