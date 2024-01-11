import Categorie from "./composants/Categorie";
import 'bulma/css/bulma.min.css';
import 'bulma-dashboard/dist/bulma-dashboard.min.css';
import 'bulma-pricingtable/dist/css/bulma-pricingtable.min.css';
import '@creativebulma/bulma-badge/dist/bulma-badge.min.css';
import '@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css';
import Menu from "./composants/Menu";
import './assets/js/myscript.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
export default function App() {
//   useEffect(()=>{
//     animation();
// },[]);
  return (<>
    <div className="dashboard is-full-height">
      <Menu></Menu>
      <div className="dashboard-main is-scrollable">
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <div className="navbar-burger">
              <span></span><span></span><span></span>
            </div>
            <span className="navbar-item title">
              Dashboard
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item" style={{ cursor: 'pointer' }}>
                <span className="material-symbols-outlined is-relative">
                  notifications
                  <span className="badge is-top-right"></span>
                </span>
              </div>
              <div className="navbar-item">
                <figure className="image">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></img>
                </figure>
              </div>
            </div>
          </div>
        </nav>
        <Router>
          <Routes>
            <Route exact path="/" element={<Categorie />} />
            <Route path="/categorie" element={<Categorie />} />
          </Routes>
        </Router>
      </div>
    </div>
  </>
  );
}