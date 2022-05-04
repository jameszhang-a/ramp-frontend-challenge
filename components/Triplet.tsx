import React, { useEffect, useState } from 'react';

type Props = {
  input: any;
};

const Triplet = ({ input }: Props) => {
  const [ time, setTime ] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      setTime(date + ' ' + time);
    }, 1000);

    return () => clearInterval(timer);
  });

  if (!input) {
    // case 1: input is falsy
    return <div>{time}</div>;
  } else if (Array.isArray(input)) {
    // case 2: input is an array
    return input.map((ele, idx) => <div key={idx}>{ele}</div>);
  } else {
    // case 3: return anything else
    return input;
  }
};

export default Triplet;
