import React, { Component } from 'react';
import { lireContenuImage } from '../../api-integrations/getFromApi';
import { useSubmitData, useFetchData } from '../../api-integrations/getFromApi';
// import { } from '../api-integrations/getFromApi';
const ModalAvecImage = ({ api }) => {
  const api0 = api.replace(/marque/g, "continent");
  const donnees = useFetchData(api0);
  var a = '';
  const renderDetails = () => {
    return donnees.map((detail) => (
      a = detail.nomcontinent,
      <option value={detail.idcontinent} key={detail.idcontinent}>{a}</option>
    ));
  };
  const ajouterEvenementValidation = async (e) => {
    recupDonneesFormulaire();
  }
  const submitData = useSubmitData();

  async function recupDonneesFormulaire() {
    const formulaire = document.querySelector('form');
    const formData = new FormData(formulaire);
    const marque = formData.get('nommarque');
    const fichier = formData.get('sary');
    const idcontinent = formData.get('idcontinent');
    const formData0 = new FormData();
    if (fichier && fichier.type.startsWith('image/')) {
      lireContenuImage(fichier)
        .then(async ({ bytesArray, blob }) => {
          const jsonData = {
            nommarque: marque,
            continent : {
              idcontinent: idcontinent,
              nomcontinent:null
            },
            photo: bytesArray, // Vous pouvez également utiliser blob ici si nécessaire,
          };
          // formData0.append('marque', marque);new Blob([bytesArray], { type: 'image/png' }), 'nomDuFichier.png'
          // formData0.append('continent[idcontinent]', idcontinent);
          // formData0.append('continent[nomcontinent]', null);
          // formData0.append('photo',bytesArray );
          const responseData = await submitData(api, jsonData);

        })
        .catch((error) => {
          alert('Erreur lors de la lecture de l\'image: ' + error);
        });
    } else {
      alert('Aucune image valide sélectionnée');
    }
  }
  return (
    <>
      <form onSubmit={ajouterEvenementValidation} encType='multipart/form-data'>
        <section className="modal-card-body">
          <div className="content">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Marque</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control is-expanded">
                    <input type="text" className="input" placeholder="Nom de la marque" name="nommarque" />
                  </div>
                </div>

                <div className="field">
                  <div className="control is-expanded">
                    <div className="file">
                      <label className="file-label">
                        <input className="file-input" type="file" name="sary" />
                        <span className="file-cta">
                          <span className="file-icon">
                            <span className="material-symbols-outlined">
                              upload_file
                            </span>
                          </span>
                          <span className="file-label">
                            Choose a file…
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className="label">Continent</label>
              </div>
              <div className='field-body'>
                <div className="field">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select name='idcontinent'>
                        {renderDetails()}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot is-flex is-justify-content-right">
          <button className="button mavalidation" type='submit'>Valider</button>
        </footer>
      </form>
    </>
  );
}


export default ModalAvecImage;