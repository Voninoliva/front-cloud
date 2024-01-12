import React, { useState } from 'react';
function ModalAvecImage(){
    return  (
        <>
            <form >
          <section className="modal-card-body">
            <div className="content">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Marque</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input type="text" className="input" placeholder="Nom de la marque" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <div className="file">
                        <label className="file-label">
                          <input className="file-input" type="file" name="resume" />
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
            </div>
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-right">
            <button className="button">Valider</button>
          </footer>
          </form> 
        </>
    );
}
export default ModalAvecImage;