import UnModele from "./enfants/UnModele";
import { useFetchData } from "../api-integrations/getFromApi";
import { useParams } from 'react-router-dom';
function ComposantDuModele({ip}) {
    const { idmarque } = useParams();
    const apiName = `modele/m/${idmarque}`;
    const apiUrl = `${ip}:8080/${apiName}`;
    const donnees = useFetchData(apiUrl);
    const renderDetails = () => {
        return donnees.map((detail, index) => (
            <UnModele details={detail} key={index}/>
        ));
    };
    const openModal =() => {
        document.querySelector('.modal').classList.add('is-active');
    }
    const closeModal = () => {
        document.querySelector('.modal').classList.remove('is-active');   
    }
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="buttons is-flex is-justify-content-end">
                        <button className="button py-5 px-3 is-rounded add-button" onClick={openModal}>
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-table is-horizontal">
                        {renderDetails()}
                    </div>
                </div>
            </section>
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Nouveau modele</p>
                        <button className="delete" aria-label="close" onClick={closeModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="content">
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Modele</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Nom du modele" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">A propos</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Reservoire" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Poids" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Dimension</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Longeur" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Largeur" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal"></div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input type="text" className="input" placeholder="Hauteur" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Details</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select>
                                                    <option>Categorie</option>
                                                    <option>Marketing</option>
                                                    <option>Sales</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select>
                                                    <option>Carrosserie</option>
                                                    <option>Marketing</option>
                                                    <option>Sales</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot is-flex is-justify-content-right">
                        <button className="button">Valider</button>
                    </footer>
                </div>
            </div>
        </>
    );
}
export default ComposantDuModele;