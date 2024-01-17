import { useMemo } from "react";

const TextInput = ({ config }: {config: TInputExtended }) => {
  const { onChange, type } = config;

  const inputType = useMemo(() => {
    switch (type) {
      case "EMAIL":
        return "email";
      case "NUMBER":
        return "number";
      case "TEXT":
      default:
        return "text";
        "";
    }
  }, [type]);

  return <input type={inputType} onBlur={(e) => onChange(e.target.value)} />;
};

export default TextInput;
