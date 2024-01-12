import React, { useState } from 'react';
import { useFetchData } from '../api-integrations/getFromApi';
import UnComposantAvecImage from "./enfants/UnComposantAvecImage";
import ModalAvecImage from './modals/ModalAvecImage';
function ComposantAvecImage({ ip }) {
  const apiName = 'marque';
  const apiUrl = `${ip}:8080/${apiName}`;
  const donnees = useFetchData(apiUrl);

  // État local pour gérer la pagination
  const itemsPerPage = 8; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  const renderDetails = () => {
    // Calculer l'indice de début et de fin pour la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filtrer les éléments pour la page actuelle
    const currentItems = donnees.slice(startIndex, endIndex);

    return currentItems.map((detail, index) => (
      console.log(detail),
      <UnComposantAvecImage details={detail} key={index} />
    ));
  };

  const openModal = () => {
    document.querySelector('.modal').classList.add('is-active');
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.remove('is-active');
  };

  const totalPages = Math.ceil(donnees.length / itemsPerPage);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="buttons is-flex is-justify-content-end">
            <button
              className="button py-5 px-3 is-rounded add-button"
              onClick={openModal}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="columns is-multiline">

            {renderDetails()}
          </div>
          {/* Ajouter des boutons de pagination */}
          <div className="pagination">
            <button
              className="button"
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage > 1 ? prevPage - 1 : prevPage
                )
              }
            >
              Précédent
            </button>
            <span>Page {currentPage} sur {totalPages}</span>
            <button
              className="button"
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage < totalPages ? prevPage + 1 : prevPage
                )
              }
            >
              Suivant
            </button>
          </div>
        </div>
      </section>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Nouvelle marque</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <ModalAvecImage/>
        </div>
      </div>
    </>
  );
}

export default ComposantAvecImage;
