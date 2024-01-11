import React, { useState } from 'react';

const MonFormulaire = ({ champs }) => {
  const initialFormData = {};
  champs.forEach((champ) => {
    initialFormData[champ.name] = '';
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    envoyerDonnees();
  };

  const envoyerDonnees = async () => {
    try {
      const response = await fetch('URL_DE_VOTRE_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Ajoutez des en-têtes supplémentaires si nécessaire
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Données envoyées avec succès');
      } else {
        console.error('Erreur lors de l\'envoi des données');
      }
    } catch (error) {
      console.error('Erreur lors de la requête API', error);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
        {champs.map((champ) => (
            <label key={champ.name}>
            {champ.label}:
            <input
                type={champ.type || 'text'}
                name={champ.name}
                value={formData[champ.name]}
                onChange={handleChange}
            />
            </label>
        ))}

        <button type="submit">Envoyer</button>
        </form>
    </>
  );
};

export default MonFormulaire;
