
export const getData = async () => {
    try {
      const response = await fetch(`api/get-meter-data`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
  
    } catch (error) {
      return error;
    }
  }
  
  