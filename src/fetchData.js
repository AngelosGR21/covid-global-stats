import axios from "axios";

const fetchData = async (url, setState, params) => {
  try {
    const response = await axios.get(url);
    if (params) {
      setState(response.data[params]);
    } else {
      setState(response.data);
    }
  } catch (e) {
    console.log(e);
    console.log("Error fetching data");
  }
};

export default fetchData;
