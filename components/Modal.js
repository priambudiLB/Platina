/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
import { useContext } from 'react';
import { DataContext } from '../store/GlobalState';
import { deleteMenu } from '../store/Actions';

const Modal = function () {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;

  const handleSubmit = () => {
    dispatch(deleteMenu(modal.data, modal.id, 'ADD_CART'));
    dispatch({ type: 'ADD_MODAL', payload: {} });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">
              {modal.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Apakah anda ingin menghapus pesanan ini?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={handleSubmit}
            >
              Ya
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
