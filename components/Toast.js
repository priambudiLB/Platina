const Toast = ({ message, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed align-items-center text-light ${bgColor}`}
      style={{ top: "60px", right: "5px", zIndex: 9, minWidth: "280px" }}
      data-autohide="true"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={`toast-header ${bgColor} text-light `}>
        <strong className="me-auto text-light">{message.title}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{message.message}</div>
    </div>
  );
};

export default Toast;
