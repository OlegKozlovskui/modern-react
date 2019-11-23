import React, { useRef, useState } from 'react';

interface Person {
  name: string;
}

interface Props {
  text: string;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/prop-types
const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(5);
  console.log(count);

  return (
    <div className="test" ref={divRef}>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
