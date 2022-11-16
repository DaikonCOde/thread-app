import { ClinicCard } from '../../components/ClinicCard';

import { ContentClinicsFound } from './ClinicsFound.styles';

function ClinicsFound() {
    return (
        <ContentClinicsFound>
            <h4 className="title t-center mb-3">
                Estas son las clínicas que más coinciden contigo
            </h4>
            <div>
                <ClinicCard />
                <ClinicCard />
                <ClinicCard />
            </div>
        </ContentClinicsFound>
    );
}

export default ClinicsFound;
