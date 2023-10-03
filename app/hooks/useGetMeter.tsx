import { getData } from "../utilities/meter-utils";
import { useEffect, useState } from "react";

interface MetersData {
    id: number;
    meter_serial_number: string;
    current_reading: string;
    status: string;
   
}

const useGetMeter = () => {
const [meters, setMeter] = useState<MetersData[]>([]);
  
  useEffect(() => {
    (async () => {
      const meters = await getData(); 
      setMeter(meters);
    })();
  }, []);
  return { meters };
};

export default useGetMeter;
