import axios from "axios";

const url = "http://localhost:5000";
// const url2 = `http://${process.env.ENDPOINT}:${process.env.PORT}`;

export const postData = async (data) => {
  try {
    let res = await axios.post(`${url}/new-data`, data);
    console.log("Data saved: ", res.data);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
  }
};
