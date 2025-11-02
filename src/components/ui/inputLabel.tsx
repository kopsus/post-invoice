import { Label } from "./label";
import { Input } from "./input";

interface IInputLabel {
  label: string;
  placeholder: string;
  type?: string;
}

const InputLabel = ({ label, placeholder, type }: IInputLabel) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputLabel;
