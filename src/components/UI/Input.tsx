import { ChangeEvent, ChangeEventHandler, KeyboardEvent } from "react";

interface InputComponent {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputComponent> = ({
  type,
  name,
  id,
  placeholder,
  value,
  className,
  onChange,
  onFocus,
  onKeyDown,
  onBlur,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`input ${className}`}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default Input;
