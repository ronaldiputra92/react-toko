function Button(props) {
  const {
    variant = "bg-green-600",
    children,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`${variant} hover:bg-purple-400 h-10 px-6 font-semibold rounded-md text-white border-2 border-black hover:border-2 purple-400`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
