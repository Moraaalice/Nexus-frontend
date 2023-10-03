import { useState, useEffect } from 'react';
import { getData } from '../utilities/meter-utils';

const useGetNumberOfMeters = () => {
  const [numberOfMeters, setNumberOfMeters] = useState<number>(0);

  useEffect(() => {
    getData()
      .then((data) => {
        setNumberOfMeters(data.length);
      })
  }, []);

  return { numberOfMeters };
};

export default useGetNumberOfMeters;
