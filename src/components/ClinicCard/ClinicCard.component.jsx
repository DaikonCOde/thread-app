import { useState } from 'react';
import { ContentClinicCard } from './ClinicCard.styles';
import { Clinic } from '../../modals/Clinic';

function ClinicCard() {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <ContentClinicCard bg="/img/example-clinic.jpg">
            <div className="content">
                <div className="logo" />
                <h4 className="text t-center">Nombre de la clinica</h4>
                <p className="decription f-14">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum
                    dignissimos nostrum aliquam tempore voluptas. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Ut, aperiam commodi possimus ipsum quis doloribus!
                </p>
                <button type="button" className="btn primary" onClick={() => setShowDetail(true)}>
                    Ver características
                </button>
            </div>
            <div className="overlay" />

            <Clinic show={showDetail} onClose={() => setShowDetail(false)} />
        </ContentClinicCard>
    );
}

export default ClinicCard;
