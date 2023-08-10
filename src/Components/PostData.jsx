import axios from "axios";

const url = `http://${process.env.REACT_APP_ENDPOINT}:${process.env.REACT_APP_SERVER_PORT}`;
const url2 = `http://${process.env.REACT_APP_ENDPOINT}:${process.env.REACT_APP_LOG_PORT}`;

export const postData = async (data) => {
  try {
    const request = [
      "POST",
      `${url}/new-data`,
      axios.defaults.headers.common,
      "",
    ];
    let res = await axios.post(`${url}/new-data`, data);
    console.log("Data saved: ", res.data);
    setTimeout(() => {
      alert("Data Saved");
    }, 500);

    try {
      const response = [
        res.status + ":" + res.statusText,
        res.headers,
        res.data,
      ];
      const dataReturn = [request, response];
      await axios.post(`${url2}/addRestLog`, dataReturn);
      console.log("Log saved!");
    } catch (error) {
      console.log("Error saving log! --> ", error.message);
    }
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
    setTimeout(() => {
      alert("Data couldn't be saved!", 1000);
    });
  }
};
