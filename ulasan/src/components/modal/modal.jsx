import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ulasan from '../../page/main/ulasan';

const MyModal = ({ showModal, handleModalClose, handleModalSave }) => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    handleModalSave();
    navigate('/rekap-ulasan');
  };

  return (
    <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sukses Terkirim!</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
          </div>
          <div className="modal-body">
            <p>Data yang Anda Inputkan Telah Terkirim!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleOkClick}>Oke</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
