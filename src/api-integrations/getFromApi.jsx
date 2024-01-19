import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setDonnees(data); 
      } catch (error) {
        console.error(`Erreur lors de la récupération des données depuis ${url} :`, error);
      }
    })();
  }, [url]);

  return donnees;
};


export const useSubmitData = () => {
  const submitData = async (url, formData) => {
    try {
      // alert(" string data"+JSON.stringify(formData));
      console.log(JSON.stringify(formData));
      const e=JSON.stringify(formData);
      const response = await fetch(url, {
        method: 'POST', // ou 'PUT' ou 'PATCH', selon votre besoin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert(`Erreur HTTP : ${response.status}`);
      }
      // Vous pouvez traiter la réponse si nécessaire
      const responseData = await response.json();
      return responseData; // Retourne la réponse si besoin
    } catch (error) {
      throw error; // Propage l'erreur pour que le composant puisse la gérer
    }
  };

  return submitData;
};

export const useSubmitDataI = () => {
  const submitData = async (url, formData) => {
    try {
      console.log(formData);
      const e=JSON.stringify(formData);
      const response = await fetch(url, {
        method: 'POST', // ou 'PUT' ou 'PATCH', selon votre besoin
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        alert(`Erreur HTTP : ${response.status}`);
      }
      // Vous pouvez traiter la réponse si nécessaire
      const responseData = await response.json();
      return responseData; // Retourne la réponse si besoin
    } catch (error) {
      throw error; // Propage l'erreur pour que le composant puisse la gérer
    }
  };

  return submitData;
};


export function lireContenuImage(fichier) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = function (e) {
      const arrayBuffer = e.target.result;
      const bytesArray = new Uint8Array(arrayBuffer);
      const blob = new Blob([bytesArray], { type: fichier.type });
      resolve({ bytesArray, blob });
    };

    reader.onerror = function (error) {
      alert("erreur et ="+error);
      reject(error);
    };

    reader.readAsArrayBuffer(fichier);
  });
}

// export function afficherImage(bytesArray) {
//   const blob = new Blob([bytesArray], { type: 'image/png' }); // Assurez-vous de définir le bon type MIME selon le type d'image
//   const imageUrl = URL.createObjectURL(blob);

//   const nouvelleImage = document.createElement('img');
//   nouvelleImage.src = imageUrl;

//   document.body.appendChild(nouvelleImage);
// }
export function afficherImage(bytesArray) {
  const blob = new Blob([bytesArray], { type: 'image/png' });
  const imageUrl = URL.createObjectURL(blob);

  const modal = document.createElement('div');
  modal.className = 'modal is-active';

  modal.innerHTML = `
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image">
        <img src="${imageUrl}" alt="Image" />
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  `;

  // Ajouter le modal au corps du document
  document.body.appendChild(modal);

  // Ajouter un gestionnaire d'événements pour fermer le modal lorsque le bouton de fermeture est cliqué
  const closeButton = modal.querySelector('.modal-close');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}

