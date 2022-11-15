import { Outlet } from 'react-router-dom';
import { ContentPageLayout } from './Page.styles';

function PageLayout() {
    return (
        <ContentPageLayout>
            <Outlet />
        </ContentPageLayout>
    );
}

export default PageLayout;
