const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      autoComplete="off"
    />
  );
};

export default Input;
