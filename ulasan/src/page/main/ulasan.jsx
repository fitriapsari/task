import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { ReviewContext } from "../context/rekap";
import MyModal from "../../components/modal/modal";

function Ulasan() {
  const navigate = useNavigate();
  const { addReview } = useContext(ReviewContext);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [newReview, setNewReview] = useState({
    nama: "",
    nomorHP: "",
    puskesmas: "",
    ratingLoket: 0,
    ratingLoket2: 0,
    ulasanLoket: "",
    fotoLoket: "",
    ratingPoli: 0,
    ratingPoli2: 0,
    ulasanPoli: "",
    fotoPoli: "",
    ratingObat: 0,
    ratingObat2: 0,
    ulasanObat: "",
    fotoObat: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (name) => (event) => {
    setNewReview({
      ...newReview,
      [name]: event.target.value
    });
  };

  const handleRatingChange = (name, value) => {
    setNewReview({
      ...newReview,
      [name]: value
    });
  };

  const handleSelectChange = (event) => {
    setNewReview({
      ...newReview,
      puskesmas: event.target.value
    });
  };

  const handleModalSave = () => {
    console.log("Detail Ulasan", newReview);
    addReview(newReview);
    setShowModal(false);
    navigate("/rekap-ulasan");
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleUpload = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <section className="poli">
        <div className="">
          <h2 className="text-center fw-bold pt-5">Ulasan Layanan Puskesmas</h2>
          <h4 className="mx-5 fw-bold">Detail Ulasan</h4>
        </div>
        <div className="mx-5 ml-3">
          <div className="mb-3 fw-bold">
            <label htmlFor="nama" className="form-label"></label>
            <input
              type="text"
              className="form-control fw-bold"
              id="nama"
              placeholder="Nama"
              value={newReview.nama}
              onChange={handleInputChange("nama")}
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="nomorHP" className="form-label"></label>
            <input
              type="number"
              className="form-control fw-bold"
              id="nomorHP"
              placeholder="Nomor Handphone"
              value={newReview.nomorHP}
              onChange={handleInputChange("nomorHP")}
            />
          </div>
          <div className="mb-3 fw-bold">
            <select
              className="form-select mb-3 fw-bold"
              aria-label="Default select example"
              onChange={handleSelectChange}
              value={newReview.puskesmas}
            >
              <option value="" disabled>Pilih Puskesmas</option>
              {/* Add other options here */}
               <option value="Puskesmas Bulu Lor">Puskesmas Bulu Lor</option>
              <option value="Puskesmas Telogosari Wetan">Puskesmas Telogosari Wetan</option>
              <option value="Puskesmas Pandanaran">Puskesmas Pandanaran</option>
              <option value="Puskesmas Lamper Tengah">Puskesmas Lamper Tengah</option>
              <option value="Puskesmas Genuk">Puskesmas Genuk</option>
              <option value="Puskesmas Rowosari">Puskesmas Rowosari</option>
              <option value="Puskesmas Poncol">Puskesmas Poncol</option>
              <option value="Puskesmas Ngaliyan">Puskesmas Ngaliyan</option>
              <option value="Puskesmas Sekaran<">Puskesmas Sekaran</option>
              <option value="Puskesmas Ngemplak Simongan">Puskesmas Ngemplak Simongan</option>
              <option value="Puskesmas Srondol">Puskesmas Srondol</option>
              <option value="Puskesmas Bangetayu">Puskesmas Bangetayu</option>
              <option value="Puskesmas Candilama">Puskesmas Candilama</option>
              <option value="Puskesmas Gunungpati<">Puskesmas Gunungpati</option>
              <option value="Puskesmas Gayamsari">Puskesmas Gayamsari</option>
              <option value="Puskesmas Ngesrep">Puskesmas Ngesrep</option>
              <option value="Puskesmas Kedungmundu">Puskesmas Kedungmundu</option>
              <option value="Puskesmas Halmahera">Puskesmas Halmahera</option>
              <option value="Puskesmas Lebdosari">Puskesmas Lebdosari</option>
              <option value="Puskesmas Manyaran">Puskesmas Manyaran</option>
              <option value="Puskesmas Mangkang">Puskesmas Mangkang</option>
              <option value="Puskesmas Bugangan">Puskesmas Bugangan</option>
              <option value="Puskesmas Padangsari">Puskesmas Padangsari</option>
              <option value="Puskesmas Pegandan">Puskesmas Pegandan</option>
              <option value="Puskesmas Pudakpayung">Puskesmas Pudakpayung</option>
              <option value="Puskesmas Tambakaji">Puskesmas Tambakaji</option>
              <option value="Puskesmas Karangmalang">Puskesmas Karangmalang</option>
              <option value="Puskesmas Purwoyoso">Puskesmas Purwoyoso</option>
              <option value="Puskesmas Telogosari Kulon">Puskesmas Telogosari Kulon</option>
              <option value="Puskesmas Kagok">Puskesmas Kagok</option>
              <option value="Puskesmas Karangdoro">Puskesmas Karangdoro</option>
              <option value="Puskesmas Miroto">Puskesmas Miroto</option>
              <option value="Puskesmas Mijen">Puskesmas Mijen</option>
              <option value="Puskesmas Bandarharjo">Puskesmas Bandarharjo</option>
              <option value="Puskesmas Karangayu">Puskesmas Karangayu</option>
              <option value="Puskesmas Krobokan">Puskesmas Krobokan</option>
              <option value="Puskesmas Karanganyar">Puskesmas Karanganyar</option>
            </select>
          </div>
        </div>
        <div className="bubble2 mx-5 pb-3 rounded" style={{ background: '#EEEEEE' }}>
          <div className="bubbledesc mx-3 mt-3">
            <h3 className="text-center fw-bold pt-3">Ulasan Loket</h3>
              <p>Berikan rating terhadap <strong>pelayanan pegawai</strong> Loket di Puskesmas.</p>
            <div className="mb-3 mx-3">
              <Typography component="legend" sx={{ textAlign: 'center', fontSize: '1.5rem' }}></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="Large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    handleRatingChange("ratingLoket", newValue);
                  }}
                />
              </Box>
            </div>
             <p>Berikan rating terhadap <strong>kecepatan pelayanan pegawai</strong> Loket di Puskesmas.</p>
            <div className="mb-3 mx-3">
              <Typography component="legend" sx={{ textAlign: 'center', fontSize: '1.5rem' }}></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value4}
                  size="Large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    handleRatingChange("ratingLoket2", newValue);
                  }}
                />
              </Box>
            </div>
            <div className="mb-3 ml-5">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Bagikan pengalaman Anda terhadap pelayanan loket" value={newReview.ulasanLoket}
                onChange={handleInputChange("ulasanLoket")}></textarea>
            </div>
          </div>
          <p className="fw-bold mx-3">Tambahkan Foto</p>
          <div className="mb-3 mx-3">
            <label htmlFor="formFile" className="form-label text-danger"></label>
            <input className="form-control text-danger" type="file" id="formFile" value={newReview.fotoLoket}
              onChange={handleInputChange("fotoLoket")} />
          </div>
        </div>
        <div className="bubble2 mx-5 pb-3 rounded" style={{ background: '#EEEEEE' }}>
          <div className="bubbledesc mx-3 mt-3">
            <h3 className="text-center fw-bold pt-3">Ulasan Poli</h3>
                  <p>Berikan rating terhadap <strong>pelayanan pegawai</strong> Poli di Puskesmas.</p>
            <div className="mb-3 mx-3">
              <Typography component="legend" sx={{ textAlign: 'center', fontSize: '1.5rem' }}></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  name="simple-controlled2"
                  value={value2}
                  size="Large"
                  onChange={(event, newValue) => {
                    setValue2(newValue);
                    handleRatingChange("ratingPoli", newValue);
                  }}
                />
              </Box>
            </div>
            <p>Berikan rating terhadap <strong>kecepatan pelayanan pegawai</strong> Poli di Puskesmas.</p>
            <div className="mb-3 mx-3">
              <Typography component="legend" sx={{ textAlign: 'center', fontSize: '1.5rem' }}></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  name="simple-controlled2"
                  value={value5}
                  size="Large"
                  onChange={(event, newValue) => {
                    setValue2(newValue);
                    handleRatingChange("ratingPoli", newValue);
                  }}
                />
              </Box>
            </div>
            <div className="mb-3 ml-5">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Bagikan pengalaman Anda terhadap pelayanan Poli"
                value={newReview.ulasanPoli}
                onChange={handleInputChange("ulasanPoli")}></textarea>
            </div>
          </div>
          <p className="fw-bold mx-3">Tambahkan Foto</p>
          <div className="mb-3 mx-3">
            <label htmlFor="formFile" className="form-label text-danger"></label>
            <input className="form-control text-danger" type="file" id="formFile" />
          </div>
        </div>
        <div className="bubble2 mx-5 pb-3 rounded" style={{ background: '#EEEEEE' }}>
          <div className="bubbledesc mx-3 mt-3">
            <h3 className="text-center fw-bold pt-3">Ulasan Obat</h3>
            <p>Berikan rating terhadap <strong>pelayanan pegawai</strong> Obat di Puskesmas.</p>
            <div className="mb-3 mx-3">
              <Typography component="legend" sx={{ textAlign: 'center', fontSize: '1.5rem' }}></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  name="simple-controlled3"
                  value={value3}
                  size="Large"
                  onChange={(event, newValue) => {
                    setValue3(newValue);
                    handleRatingChange("ratingObat", newValue);
                  }}
                />
              </Box>
            </div>
            <div className="mb-3 ml-5">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Bagikan pengalaman Anda terhadap pelayanan Obat"
                value={newReview.ulasanObat}
                onChange={handleInputChange("ulasanObat")}></textarea>
            </div>
          </div>
          <p className="fw-bold mx-3">Tambahkan Foto</p>
          <div className="mb-3 mx-3">
            <label htmlFor="formFile" className="form-label text-danger"></label>
            <input className="form-control text-danger" type="file" id="formFile" />
          </div>
        </div>
        <div className="d-flex justify-content-end mx-5 mt-3 pb-5">
          <button className="btn btn-success fw-bold rounded-4" onClick={handleUpload}>Upload</button>
        </div>
      </section>
      <MyModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        handleModalSave={handleModalSave}
      />
      <Footer />
    </div>
  );
}

export default Ulasan;
