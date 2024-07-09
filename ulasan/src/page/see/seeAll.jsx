import React, { useContext } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { CgProfile } from "react-icons/cg";
import { ReviewContext } from "../context/rekap";

const SeeAll = () => {
  const { reviews } = useContext(ReviewContext);

  return (
    <div>
      <Header />
      <div className="mt-5 pb-5 pt-3">
        <div className="mx-5 mt-5 pt-4">
          {reviews.length > 0 && (
            <Typography component="legend" variant="h3" className="fw-bold">
              {reviews[0].puskesmas}
            </Typography>
          )}
          <h4 className="pt-3 fw-bold">Semua Ulasan</h4>
        </div>
        {reviews.slice().reverse().map((review, index) => (
          <div key={index} className="bubble2 mx-5 pb-3 rounded" style={{ background: '#EEEEEE' }}>
            <div className="bubbledesc mx-3 mt-3 d-flex">
              <CgProfile size={32} style={{ marginRight: '10px', marginTop: '10px' }} />
              <h3 className="fw-bold" style={{ marginRight: '10px', marginTop: '10px' }}>{review.nama}</h3>
            </div>
            {/* Rating Loket */}
            <div className="mb-3 mx-3">
              <div>
                <Typography component="legend" className="fw-bold">Review Pelayanan Pegawai Loket</Typography>
                <Rating name="read-only" value={review.ratingLoket} readOnly />
              </div>
              <div className="mb-3 ml-5">
                <div className="border border-dark rounded p-3">
                  <p>{review.ulasanLoket}</p>
                </div>
              </div>
              {/* Rating Poli */}
              <div className="mb-3 ml-5">
                <div>
                  <Typography component="legend" className="fw-bold">Review Pelayanan Pegawai Poli</Typography>
                  <Rating name="read-only" value={review.ratingPoli} readOnly />
                </div>
                <div className="border border-dark rounded p-3">
                  <p>{review.ulasanPoli}</p>
                </div>
              </div>
              {/* Rating Obat */}
              <div className="mb-3 ml-5">
                <div>
                  <Typography component="legend" className="fw-bold">Review Obat</Typography>
                  <Rating name="read-only" value={review.ratingObat} readOnly />
                </div>
                <div className="border border-dark rounded p-3">
                  <p>{review.ulasanObat}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SeeAll;
