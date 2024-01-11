export default function Menu() {
    return (
        <div className="dashboard-panel is-small is-scrollable">
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
                    <li><a href="/categorie">Categorie</a></li>
                    <li><a>Annonce</a></li>
                    <li>
                        <a href="#collapse" className="is-active" data-action="collapse">
                            Détails
                        </a>
                        <ul id="collapse" className="is-collapsible">
                            <li><a>Members</a></li>
                            <li><a>Plugins</a></li>
                            <li><a>Add a member</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}