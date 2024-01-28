import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useFetchData } from "../../api-integrations/getFromApi";
import '../../assets/css/style.css';
import 'bulma-list/css/bulma-list.css';
function UneAnnonce(props) {
    console.log(props.details);
    const apiv = `${props.ip}/voiture/${props.details.idvoiture}`;
    var apim = '';
    const voitures = useFetchData(apiv);
    if (voitures) {
        console.log("voiture lien = ", apiv);
        console.log("voiture json = ", voitures);
        const v = `${props.ip}/modele/${voitures.idmodele}`;
        apim = useFetchData(v);
        console.log("modele an le voiture = ", apim);
    }
    const pour_detail = {
        "annonce" :props.details,
        "voiture": voitures,
        "modele":apim,
        "api":props.ip
    }
    bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        navigation: false,
    });
    // Eto le izy
    const displayedImages = [
        'https://firebasestorage.googleapis.com/v0/b/stockage-photo-b8c98.appspot.com/o/870017f3-0fd4-4033-a222-884a08e44eea.png?alt=media',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
    ];
    console.log('tyyy');
    console.log(voitures.photos);
    console.log('tyyy');
    // displayedImages=voitures.photos;
    return (
        <>
            <div className="tile is-parent is-4">
                <a className="tile is-child card" href={`/detailAnnonce/${props.details.idannonce}`}>
                    <div className="card-image">
                        <div className="carousel" style={{ overflowX: 'hidden' }}>
                            {displayedImages.map((image, index) => (
                                <div key={index} className={`item-${index + 1}`}>
                                    <figure className="image is-4by3">
                                        <img src={image} alt={`Car Image ${index + 1}`} />
                                    </figure>
                                </div>
                            ))}
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