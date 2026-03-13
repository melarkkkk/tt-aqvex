import s from "./Dropdown.module.scss";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export const Dropdown: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <ul className={s.dropdownMenu}>
      {options.map(option => (
        <li
          key={option.value}
          className={`${value === option.value ? s.active : ""} ${
            option.disabled ? s.disabled : ""
          }`}
          onClick={() => {
            if (!option.disabled) {
              onChange(option.value);
            }
          }}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};