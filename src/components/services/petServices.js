import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const getPets = async () => {
    try {
      const res = await axios.get(BASE_URL);
      //{data: [{}]
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  