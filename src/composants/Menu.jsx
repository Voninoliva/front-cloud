import '@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css';
export default function Menu() {
    // bulmaCollapsible.attach('.is-collapsible');
    // // bulmaCollapsible.attach('.is-collapsible');
    // document.addEventListener('load', function () {
    //     bulmaCollapsible.attach('.is-collapsible');
    //   });
    return (
        <div className="dashboard-panel is-small is-scrollable has-background-light">
            <header className="dashboard-panel-header">
                <div className="has-text-centered">
                    <img src="https://bulma.io/images/bulma-logo.png" width="50%"></img>
                </div>
            </header>
            <aside className="menu has-text-white">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><a href='/annonce'>Annonce</a></li>
                    <li>
                        <a href="#collapse" className="is-active" data-action="collapse">
                            Détails
                        </a>
                        <ul id="collapse" className="is-collapsible">
                            <li><a href="/categorie">Categorie</a></li>
                            <li><a href="/marque">Marque</a></li>
                            <li><a href="/carrosserie">Carrosserie</a></li>
                            <li><a href="/energie">Energie</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}