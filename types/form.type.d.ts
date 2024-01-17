type TSupportedInputTypes = "EMAIL" | "TEXT" | "NUMBER";

type TInput = {
  id: number;
  title: string;
  type: TSupportedInputTypes;
  regex?: RegExp;
  parentId?: number;
  options: [{ value: string; parentIds: Array<number> }];
};

type TInputExtended = TInput & {
  onChange: (value: string) => void;
};
