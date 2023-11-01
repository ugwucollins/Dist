interface props {
  message: string;
  onClose: () => void;
}

const alert = ({ message, onClose }: props) => {
  return (
    <div className="message">
      <h3 className="h3">{message}</h3>
      <button onClick={onClose} className="icon">
        <i className="bx bx-x icon"></i>
      </button>
    </div>
  );
};

export default alert;
