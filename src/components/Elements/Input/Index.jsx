import Label from "./Label";
import Input from "./Input";
const Index = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default Index;
