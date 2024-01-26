import { useFetchDataToken } from "../api-integrations/getFromApi";
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import UneAnnonce from "./enfants/UneAnnonce";
function ComposantAnnonce({ ip }) {
    const apiUrl = `${ip}:8080/annonce/unvalid`;
    console.log(apiUrl);
    const donnees = useFetchDataToken(apiUrl,localStorage.getItem('token'));
    console.log(donnees);
    const renderDetails = () => {
        return donnees.map((detail, index) => (
            <UneAnnonce key={index} details={detail} ip={ip}/>
        ));
    };
    document.addEventListener('load', () => {
        document.querySelector('.pageloader').classList.add('is-active');
    });
   
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor columns is-multiline">
                        {renderDetails()}
                    </div>
                </div>
            </section>
        </>
    );
}
export default ComposantAnnonce;