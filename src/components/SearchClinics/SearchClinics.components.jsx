import SearchClinicAnimate from '../../assets/icons/search-clinics.svg';
import { ContentSearchClinics } from './SearchClinics.styles';

function SearchClinics() {
    return (
        <ContentSearchClinics>
            <img className="searching-animate" src={SearchClinicAnimate} alt="" />

            <span className="label-search f-14 t-center d-block">
                Nuestro sistema selecciona ahora las clínicas adecuadas para usted entre más de 321
                médicos y 13 técnicas diferentes.
            </span>
        </ContentSearchClinics>
    );
}

export default SearchClinics;
