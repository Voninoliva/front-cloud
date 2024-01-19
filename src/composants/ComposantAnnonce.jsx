import { useFetchData } from "../api-integrations/getFromApi";
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import UneAnnonce from "./enfants/UnComposantAvecImage";
function ComposantAnnonce({ ip }) {
    const apiUrl = `${ip}:8080/annonce`;console.log(apiUrl);
    const donnees = useFetchData(apiUrl);
    const renderDetails = () => {
        return donnees.map((detail, index) => (
            <UneAnnonce key={index} details={detail} />
        ));
    };
    bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: false,
    });
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        {renderDetails()}
                    </div>
                </div>
            </section>
        </>
    );
}
export default ComposantAnnonce;