import Categorie from "./Categorie";
import 'bulma/css/bulma.min.css';
import 'bulma-dashboard/dist/bulma-dashboard.min.css';
import 'bulma-pricingtable/dist/css/bulma-pricingtable.min.css';
import 'bulma-carousel';
import 'bulma-pageloader';
import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComposantAvecImage from "./ComposantAvecImage";
import ComposantDuModele from "./ComposantDuModele.jsx";
import ComposantAnnonce from "./ComposantAnnonce.jsx";
import Option from "./Option.jsx";
function BackOffice({ip}){
return(
    <>
     <div className="dashboard is-full-height">
      <Menu></Menu>
      <div className="dashboard-main is-scrollable">
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <div className="navbar-burger">
              <span></span><span></span><span></span>
            </div>
            <span className="navbar-item title">
              Admin
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item" style={{ cursor: 'pointer' }}>
                <span className="material-symbols-outlined is-relative">
                  <a className="navbar-item is-tab is-hidden-desktop sign-in">
                    Mon profil
                  </a>
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
          <Routes>
            {/* <Route exact path="/" element={<Categorie ip={ip} apiName="categorie" />} /> */}
            <Route path="/categorie" element={<Categorie ip={ip} apiName="categorie" />} />
            <Route path="/carrosserie" element={<Categorie ip={ip} apiName="carrosserie" />} />
            <Route path="/energie" element={<Categorie ip={ip} apiName="energie" />} />
            <Route path="/marque" element={<ComposantAvecImage ip={ip} />} />
            <Route path="/annonce" element={<ComposantAnnonce ip={ip} />} />
            <Route path="/modele/:idmarque" element={<ComposantDuModele ip={ip} />} />
            <Route path="/option" element={<Option ip={ip} />} />
          </Routes>
      </div>
    </div>
    </>
);
}
export default BackOffice;