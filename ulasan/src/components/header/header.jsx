import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-danger fixed-top">
        <div className="container-fluid mx-5">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo Dinkes" className="col-md-1" style={{ width: '80px', height: '80px' }} />
            <div className="col-md-9 text-light" style={{ margin: '5px 5px 0px' }}>
              <p style={{ fontSize: '16px', marginBottom: '0px' }}>PEMERINTAH KOTA SEMARANG</p>
              <h3 style={{ fontSize: '16px', marginBottom: '0px' }}>DINAS KESEHATAN</h3>
              <h4 style={{ fontSize: '14px', marginBottom: '0px' }}>Puskesmas Tlogosari Wetan</h4>
              <p style={{ fontSize: '12px', marginBottom: '0px' }}>JL. Soekarno-Hatta Telp (024) 6713083, Semarang</p>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav" style={{ listStyleType: 'none' }}>
              <li className="nav-item">
                <a href="/" className="nav-link text-light">Home</a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link text-light">Profil</a>
              </li>
              <li className="nav-item">
                <a href="/signup" className="nav-link text-light">Layanan Public</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
