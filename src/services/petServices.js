import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

export const getPets = async () => {
  try {
    const res = await axios.get(BASE_URL);
    // No need for res.json(), use res.data to access the response data
    return res.data;
  } catch (err) {
    console.log("Error fetching pets:", err);
    // Optionally return an empty array or handle error appropriately
    return [];
  }
};

export const getPet = async (petId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${petId}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching pet:", error);
    // Optionally return null or handle error appropriately
    return {};
  }
};
