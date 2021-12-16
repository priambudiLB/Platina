/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
const Toast = function ({ msg, handleShow, bgColor }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{
        top: '5px', right: '5px', zIndex: 9, minWidth: '280px',
      }}
      data-autohide="false"
    >
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="mr-auto text-light">{msg.title}</strong>

        <button
          type="button"
          className="ml-2 mb-1 close text-light"
          data-dismiss="toast"
          aria-label="Close"
          onClick={handleShow}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{msg.msg}</div>
    </div>
  );
};
export default Toast;
