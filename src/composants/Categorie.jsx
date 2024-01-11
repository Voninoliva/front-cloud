import React, { useEffect } from "react";
import DetailCategorie from "./DetailCategorie";
import { useFetchData } from '../api-integrations/getFromApi';
function Categorie() {
    const apiName = "categorie";
    const apiUrl = `http://172.50.2.44:8080/${apiName}`;
    const donnees = useFetchData(apiUrl);
    console.log(donnees);
    const renderDetails = () => {
        return donnees.map((detail, index) => (
            <DetailCategorie key={index} details={detail} titre={apiName} />
        ));
    };
    function openModal() {
        document.querySelector('.modal').classList.add('is-active');
    }
    function closeModal() {
        document.querySelector('.modal').classList.remove('is-active');   
    }
    return <>
        <section classNameName="section">
            <div classNameName="container">
                <div classNameName="buttons is-flex is-justify-content-end">
                    <button classNameName="button py-5 px-3 is-rounded add-button" onClick={openModal}>
                        <span classNameName="material-symbols-outlined">
                            add
                        </span>
                    </button>
                </div>
            </div>
            <div classNameName="container">
                <div classNameName="columns is-multiline">
                    {renderDetails()}
                </div>
            </div>
        </section>
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Nouveau {apiName}</p>
                    <button className="delete" aria-label="close" onClick={closeModal}></button>
                </header>
                <form >
                <section className="modal-card-body">
                    <div className="content">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Categorie</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Nom du categorie" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot is-flex is-justify-content-right">
                    <button className="button">Valider</button>
                </footer>
                </form>
            </div>
        </div>
    </>
}

export default Categorie;
