import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";



const Footer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minheight: "1600vh" }}>
    <footer>
      <section className="pt-3 bg-danger footer-container">
        <div className="container">
          <div className="d-flex flex-row" style={{ paddingRight: '10px' }}>
            <div className="col-md-4 col-sm-4">
              <div className="content" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <h6 className="footer-title text-light">Profil</h6>
                <p className="text-light text-justify mt-3">
                  Dinas Kesehatan merupakan Satuan Kerja Perangkat Daerah di Kota Semarang <br />
                  yang memiliki tanggung jawab menjalankan kebijakan Pemerintah Kota Semarang <br />
                  dalam bidang kesehatan.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="content" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <h6 className="footer-title text-light">Layanan Publik</h6>
                <ul style={{ listStyle: 'none', padding: 0, marginTop:"20px" }}>
                      <li>
                        <a href="https://dinkes.semarangkota.go.id/content/menu/11" className="text-light mt-3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Pelayanan Puskesmas</a>
                      </li>
                      <li>
                        <a href="https://dinkes.semarangkota.go.id/content/menu/13" className="text-light mt-3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Pelayanan Laboratorium Kesehatan</a>
                      </li>
                      <li>
                        <a href="https://dinkes.semarangkota.go.id/content/menu/20" className="text-light mt-3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Pelayanan Ambulan Hebat</a>
                      </li>
                  </ul>

              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="content" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <h6 className="footer-title text-light">Media Sosial</h6>
                <div className="mediaSosial mt-3">
                  <a href="https://www.facebook.com/dinkeskotasemarang/" className="mr-3" target="_blank" style={{ color: 'white' }}>
                    <FaFacebook size={32} style={{ marginRight: '10px', marginTop: '10px'  }} />
                  </a>
                  <a href="https://www.instagram.com/dkksemarang/" className="mr-3" target="_blank" style={{ color: 'white' }}>
                    <FaInstagram size={32} style={{ marginRight: '10px', marginTop: '10px'  }} />
                  </a>
                  <a href="https://www.youtube.com/@dinaskesehatankotasemarang" className="mr-3" target="_blank" style={{ color: 'white' }}>
                    <FaYoutube size={32} style={{ marginRight: '10px', marginTop: '10px'  }} />
                  </a>
                  <a href="https://www.tiktok.com/@dkksemarang" className="mr-3" target="_blank" style={{ color: 'white' }}>
                    <FaTiktok size={32} style={{ marginRight: '10px', marginTop: '10px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="d-flex flex-row justify-content-center">
          <p className="text-light"> Copyright©Dinas Kesehatan Kota Semarang 2024</p>
        </div>
      </section>
      </footer>
      </div>
  )
}

export default Footer;
