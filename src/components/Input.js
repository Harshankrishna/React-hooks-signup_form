function Input({ id, label, placeholder, type, register, errorMessage }) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}

export default Input;
