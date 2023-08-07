import axios from "axios";

const url2 = `http://${process.env.REACT_APP_ENDPOINT}:${process.env.REACT_APP_SERVER_PORT}`;

export const postData = async (data) => {
  try {
    const request = ["GET", `${url2}/new-data`, axios.defaults.headers.common, ""];
    let res = await axios.post(`${url2}/new-data`, data);
    console.log("Data saved: ", res.data);
    alert("Data Saved");
    const response = [res.status + ":" + res.statusText, res.headers, res.data];
    const dataReturn = [request, response];
    await axios.post(`${url2}/addRestLog`, dataReturn);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
    alert("Data couldn't be saved!");
  }
};
