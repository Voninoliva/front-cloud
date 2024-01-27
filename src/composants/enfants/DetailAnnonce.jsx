import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import OptionKely from "./OptionsKely";
import { useSubmitDataToken } from "../../api-integrations/getFromApi";

function DetailAnnonce({ ip }) {
    bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 2.15,
        pagination: false,
        infinite: true,
        autoplay: true
    });

    const { idannonce } = useParams();
    const apivoiture = `${ip}/annonce/${idannonce}`;
    const [prix,setPrix] = useState(0);
    const [annonces, setAnnonces] = useState(null);
    const [descri, setDescri] = useState(null);
    const [voiture, setVoiture] = useState(null);
    const [modele, setModele] = useState('');
    const [sary,setSary] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseAnnonces = await fetch(apivoiture);
                const annoncesData = await responseAnnonces.json();
                setAnnonces(annoncesData);
                if (annoncesData) {
                    setDescri(annoncesData.descri);
                    setPrix(annoncesData.prix);
                    const apiVoiture = `${ip}/voiture/${annoncesData.idvoiture}`;
                    const responseVoiture = await fetch(apiVoiture);
                    const voitureData = await responseVoiture.json();
                    setSary(voitureData.photo);
                    setVoiture(voitureData);
                    if(voitureData){
                        const v = await fetch(`${ip}/modele/${voitureData.idmodele}`);
                        const modelee = await v.json();
                        const modeleConcatene = `${modelee.nommodele} de ${modelee.marque.nommarque}`;
                        setModele(modeleConcatene);
                    }
                    
                }
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        };

        fetchData();
    }, [apivoiture, ip]);
     
    const options = voiture ? <OptionKely ip={ip} voiture={voiture} /> : null;
    const droites = voiture ? (
        <>
            <li><strong>Puissance</strong>  {voiture.puissance}</li>
            <li><strong>Kilometrage</strong> {voiture.kilometrage}</li>
            <li><strong>Cylindre</strong>  {voiture.cylindre}</li>
        </>
    ) : null;
    const lien = `${ip}/validation`;
    const submitData = useSubmitDataToken();
    const confirmer = async (e) => {
        try {
          e.preventDefault();
          const objetAEnvoyer = {
             'etat': 1,
             'idannonce':idannonce
            };
          alert(JSON.stringify(objetAEnvoyer));
          const responseData = await submitData(lien, objetAEnvoyer,localStorage.getItem('token'));
          alert(responseData);
        } catch (error) {
        }
      };
      const supprimer = async (e) => {
        try {
          e.preventDefault();
          const objetAEnvoyer = {
             'etat': 2,
             'idannonce':idannonce
            };
          // Envoyer les données à l'API
         
          const responseData = await submitData(lien, objetAEnvoyer,localStorage.getItem('token'));
        } catch (error) {
        }
      };
    return (
        <>
            <div className="columns">
                <div className="column is-7">
                    <article className="media mb-6">
                        <span className="media-left icon has-text-info is-size-3">
                            <i className="fa-solid fa-gear"></i>
                        </span>
                        {options}
                    </article>
                </div>
                <div className="column">
                    <article className="media mb-6">
                        <span className="media-left icon has-text-info is-size-3">
                            <i className="fa-solid fa-wrench"></i>
                        </span>
                        <div className="media-content">
                            <div className="content">
                                <h3 className="has-text-info">A propos</h3>
                                <ul>
                                    {droites}
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent is-6">
                    <div className="tile is-child">
                        <div className="content has-text-right has-text-left-mobile">
                            <h1 className="has-text-info">
                                {modele}
                            </h1>
                            <article>
                                {descri}
                            </article>
                            <blockquote>
                                <h3>
                                   MGA {prix.toLocaleString('fr-FR')}
                                </h3>
                            </blockquote>

                            <div className="buttons is-right">
                                <button className="button is-info has-text-weight-semibold" onClick={confirmer}>
                                    Confirmer
                                </button>
                                <button className="button is-danger has-text-weight-semibold" onClick={supprimer}>
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-6 carousel has-ribbon-top" style={{ overflowX: "hidden" }}>
                    <div className="tile is-parent">
                        <div className="tile is-child item-1">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child item-2">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child item-3">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child item-4">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child item-5">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child item-6">
                            <figure className="image is-3by5">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailAnnonce;
