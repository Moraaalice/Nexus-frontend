
export const getUsers = async () => {
  try {
    const response = await fetch(`api/get-user`, {
      method: "GET",
    });
    const result = await response.json();
    return result;

  } catch (error) {
    return error;
  }
}

