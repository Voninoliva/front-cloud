function DetailCategorie(props) {
    const nom = `nom${props.titre}`;
    console.log(nom + "   nom");
    const resultat = props.details[nom];
    console.log(resultat + "  resultat ");
    return <>
        <div className="column is-3">
            <div className="card">
                <div className="card-content">
                    <h3 className="subtitle has-text-weight-bold">
                        {resultat}
                    </h3>
                </div>
            </div>
        </div>
    </>
}
export default DetailCategorie;