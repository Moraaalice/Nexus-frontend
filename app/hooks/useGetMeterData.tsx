import { useState, useEffect } from 'react';
import { getData } from '../utilities/meter-utils';

interface MeterData {
  meter_serail_number: string;
  current_reading:string;
  status:string;
}
const useGetMeterData = () => {
const [graphData, setMeterData] = useState<MeterData[]>([]);
  useEffect(() => {
    getData() 
      .then((data) => {
        const processedData: MeterData[] = data.map((meter: { meter_serial_number: any; current_reading: string; }) => ({
          label: meter.meter_serial_number,
          value: parseFloat(meter.current_reading),
        }));

        setMeterData(processedData);
      })
  }, []);

  return { graphData };
};

export default useGetMeterData;
