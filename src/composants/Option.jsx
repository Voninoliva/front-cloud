function Option({ ip }) {
    const apiUrl = `${ip}:8080/option`;
    // console.log(apiUrl);
    const donnees = useFetchData(apiUrl);
    const groupes = donnees.reduce((acc, element) => {
        const idtype = element.idtype;
    
        if (!acc[idtype]) {
          acc[idtype] = [];
        }
    
        acc[idtype].push(element);
        return acc;
      }, {});
    return (
        <>
            <section class="section table-container">
                <table class="table is-bordered is-fullwidth">
                    <thead>
                        <tr>
                            <th>Intérieur</th>
                            <th>Extérieur</th>
                            <th>Securité</th>
                        </tr>
                    </thead>
                    <tbody>
                            {groupes()}
                    </tbody>
                </table>
            </section>
        </>
    );
}
export default Option;