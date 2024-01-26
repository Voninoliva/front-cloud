import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useFetchData } from "../../api-integrations/getFromApi";
import '../../assets/style.css';
import 'bulma-list/css/bulma-list.css';
function UneAnnonce(props) {
    const apiv = `${props.ip}:8080/voiture/${props.details.idvoiture}`;
    var apim = '';
    const voitures = useFetchData(apiv);
    if (voitures) {
        console.log("ur = ", apiv);
        console.log("ettttt", voitures);
        const v = `${props.ip}:8080/modele/${voitures.idmodele}`;
        apim = useFetchData(v);
    }
    bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: false,
    });
    return (
        <>
            <div className="tile is-parent is-4">
                <a className="tile is-child card" href={`/modele/${props.details.idmarque}`}>
                    <div className="card-image">
                        <div className="carousel" style={{ overflowX: 'hidden' }}>
                            <div className="item-1">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="item-2">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="item-3">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png"
                                        alt="Placeholder image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="card-content p-3">
                        <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                            <div className="list-item">
                                <div className="list-item-content">
                                    <div className="list-item-title has-text-info">{apim.nommodele}</div>
                                    <div className="list-item-description help">{props.details.descri}</div>
                                </div>

                                <div className="list-item-controls has-text-info">
                                    <span className="icon is-clickable">
                                        <i className="fa-solid fa-car-side fa-lg"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
export default UneAnnonce;