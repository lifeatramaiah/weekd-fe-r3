import TextInput from "@/components/atoms/TextInput";
import { useCallback, useState } from "react";

const Form = ({ sections }: { sections: Array<{ inputs: Array<TInput> }> }) => {
  const getInputComponent = useCallback((type: TSupportedInputTypes) => {
    switch (type) {
      case "EMAIL":
      case "NUMBER":
      case "TEXT":
        return TextInput;
    }
  }, []);
  const [formState, setFormState] = useState<{[id: string]: string}>({});

  const onChange = (stringVal: string, id: number) => {
    setFormState((state) => ({ ...state, [id]: stringVal }));
    onSubmit();
  };

  const onSubmit = () => {
    console.log(formState);
  };

  return (
    <div>
      {sections.map(({ inputs }, index) => {
        return (
          <div key={index}>
            {inputs.map((inputConfig) => {
              const Component = getInputComponent(inputConfig.type);
              const isChildRendereable = (id: number | undefined) => {
                if(!id) return true;
                const inputIds= [];

                sections.some((section ) => {
                  const input = section.inputs.find(input => input.id === (id));
                  const option = input?.options.find(opt => opt.value === formState[id])?.parentIds
                  // inputIds(...input.)
                  // return true;
                });

                return false

              }
              if(inputConfig.parentId || isChildRendereable(inputConfig.parentId))
              return (
                <Component
                  config={{
                    ...inputConfig,
                    onChange: (v) => onChange(v, inputConfig.id),
                  }}
                  key={inputConfig.id}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
