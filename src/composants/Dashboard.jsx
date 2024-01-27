import { Chart } from '../assets/js/chart';
import { useEffect } from 'react';
import { useFetchDataToken,useSubmitDataToken } from '../api-integrations/getFromApi';
function Dashboard({ ip }) {
    // useEffect(() => {
    //     const createCharts = () => {
    //         const getBulmaColorVariable = (variable, opacity) => {
    //             const element = document.createElement('div');
    //             // element.style.color = var(`--bulma-${variable}`);
    //             document.body.appendChild(element);
    //             const computedColor = window.getComputedStyle(element).color;
    //             const rgbaColor = computedColor.replace('rgb', 'rgba').replace(')' , `${opacity}`);
    //             document.body.removeChild(element);
    //             return rgbaColor.toString();
    //         };
    //         const ctx1 = document.querySelector('.chart1').getContext("2d");
    //         const chart1 = new Chart(ctx1, {
    //             type: 'line',
    //             data: {
    //                 labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
    //                 datasets: [{
    //                     label: 'Revenue de vente ${periode}',
    //                     data: [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65],
    //                     backgroundColor: 'rgba(76, 100, 142, 0.25)',
    //                     borderColor: 'rgba(76, 100, 142, 1)',
    //                     pointStyle: 'line',
    //                     tension: 0.25,
    //                     fill: true
    //                 }],
    //             },
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             }
    //         });


    //         const ctx2 = document.querySelector('.chart2').getContext("2d");
    //         const chart2 = new Chart(ctx2, {
    //             type: 'doughnut', // ou 'polarArea'
    //             data: {
    //                 labels: ['A', 'B', 'C', 'D', 'E'],
    //                 datasets: [{
    //                     label: 'Données statiques',
    //                     data: [20, 30, 25, 15, 10],
    //                     backgroundColor: [
    //                         'rgba(76, 100, 142, 0.75)',
    //                         'rgba(192, 51, 32, 0.75)',
    //                         'rgba(173, 109, 96, 0.75)',
    //                         'rgba(0, 209, 178, 0.75)',
    //                         'rgba(107, 113, 111, 0.75)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(76, 100, 142, 1)',
    //                         'rgba(192, 51, 32, 1)',
    //                         'rgba(173, 109, 96, 1)',
    //                         'rgba(0, 209, 178, 1)',
    //                         'rgba(107, 113, 111, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 responsive: true
    //             }
    //         });

    //     }
    //     createCharts()},[]);
    const api = `${ip}/login/nbInscriptMois`;
    // nombreInscriptions
    const nbInscriptionsData = useFetchDataToken(api, localStorage.getItem('token'));
    const revenue_par_mois = useFetchDataToken(`${ip}/tresorerie/getGainParMois`, localStorage.getItem('token'));
    const commission = useFetchDataToken(`${ip}/commission`, localStorage.getItem('token'));
    var nb_inscri_par_mois = '';
    var revenue = 0;
    var cs = 0;
    if (nbInscriptionsData && nbInscriptionsData.length > 0) {
        nb_inscri_par_mois = nbInscriptionsData[0].nombreInscriptions;
    }
    if (revenue_par_mois) {
        // console.log(revenue_par_mois);
        // revenue = revenue_par_mois[0];
    }
    if(commission){
        cs=commission.valeur;
    }
    const submitData = useSubmitDataToken();
    const apiUrl = `${ip}/commission`;
    const changerCommission = async (e) => {
        try {
          e.preventDefault();
          const formulaire = document.querySelector('form');
            const formData = new FormData(formulaire);
          const objetAEnvoyer = { valeur: formData.get('cs') };
          // Envoyer les données à l'API
          const responseData = await submitData(apiUrl, objetAEnvoyer,localStorage.getItem('token'));
        } catch (error) {
        }
      };
    return (
        <>
            <section className="section">
                <div className="content">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-8">
                            <div className="tile is-vertical">
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent">
                                        <div className="tile is-child card">
                                            <div className="card-content has-text-info has-text-centered">
                                                <span className="icon is-large">
                                                    <i className="fa-solid fa-wallet fa-2x"></i>
                                                </span>
                                                <p className="heading">
                                                    Revenue
                                                </p>
                                                <h2 className="m-0 has-text-info">
                                                    MGA {revenue}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child card">
                                            <div className="card-content has-text-info has-text-centered">
                                                <span className="icon is-large">
                                                    <i className="fas fa-user fa-2x"></i>
                                                </span>
                                                <p className="heading">
                                                    Utilisateur
                                                </p>
                                                <h2 className="m-0 has-text-info">
                                                    {nb_inscri_par_mois}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-child card">
                                    <div className="card-content">
                                        <div className="is-flex is-justify-content-space-between">
                                            <h3>Revenue</h3>
                                            <div className="field">
                                                <div className="control">
                                                    <div className="select is-small">
                                                        <select>
                                                            <option>hebdomadaire</option>
                                                            <option>mensuelle</option>
                                                            <option>annuelle</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <canvas className="chart1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-parent is-4">
                            <div className="tile is-vertical">
                                <div className="tile is-child card" style={{ flexGrow: 'unset' }}>
                                    <div className="card-content">
                                        <h3>Commission Actuelle</h3>
                                        <form className="field has-addons has-addons-centered" onSubmit={changerCommission}>
                                            <div className="control is-expanded">
                                                <input type="text" className="input" placeholder="ex: 10" defaultValue={cs} name='cs'/>
                                            </div>
                                            <div className="control">
                                                <button type="submit" className="button is-info">
                                                    <span className="icon">
                                                        <i className="fa-solid fa-check"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tile is-child card" style={{ flexGrow: 'unset' }}>
                                    <div className="card-content">
                                        <canvas className="chart2"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Dashboard;