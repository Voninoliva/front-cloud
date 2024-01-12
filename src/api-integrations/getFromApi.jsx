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
      const e=JSON.stringify(formData);console.log(e);
      const response = await fetch(url, {
        method: 'POST', // ou 'PUT' ou 'PATCH', selon votre besoin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
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


