// hooks
import { Navigate } from 'react-router-dom';
// components
import { ClinicCard } from '../../components/ClinicCard';
import { ContactForm } from '../../components/ContactForm';

import { ContentClinicsFound } from './ClinicsFound.styles';

function ClinicsFound() {
    if (!localStorage.getItem('answer_user')) {
        return <Navigate to="/" />;
    }
    return (
        <ContentClinicsFound>
            <h4 className="title t-center mb-3 t-white">
                Estas son las clínicas que más coinciden contigo
            </h4>
            <div className="content-found-clinics d-flex center gap-4">
                <ClinicCard />
                <ClinicCard />
                <ClinicCard />
            </div>

            <ContactForm />
        </ContentClinicsFound>
    );
}

export default ClinicsFound;
