import { useMemo } from "react";

const RadioGroup = ({ config } : { config: TInputExtended }) => {
  const { onChange, options } = config;

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} onClick={() => onChange(option.value)}>
          <input type="radio" />
          <span>{option.value}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
