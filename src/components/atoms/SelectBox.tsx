import { useMemo } from "react";

const SelectBox = ({ config } : { config: TInputExtended }) => {
  const { onChange, options } = config;

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value}>{option.value}</option>
      ))}
    </select>
  );
};

export default SelectBox