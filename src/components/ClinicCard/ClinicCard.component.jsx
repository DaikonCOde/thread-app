import { ContentClinicCard } from './ClinicCard.styles';

function ClinicCard() {
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
                <button type="button" className="btn primary">
                    Ver características
                </button>
            </div>
            <div className="overlay" />
        </ContentClinicCard>
    );
}

export default ClinicCard;
