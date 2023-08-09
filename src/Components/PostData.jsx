import axios from "axios";

const url = `http://${process.env.REACT_APP_ENDPOINT}:${process.env.REACT_APP_SERVER_PORT}`;
const url2 = `http://${process.env.REACT_APP_ENDPOINT}:${process.env.REACT_APP_LOG_PORT}`;

export const postData = async (data) => {
  try {
    const request = [
      "GET",
      `${url}/new-data`,
      axios.defaults.headers.common,
      "",
    ];
    let res = await axios.post(`${url}/new-data`, data);
    console.log("Data saved: ", res.data);
<<<<<<< HEAD
    setTimeout(()=>{
      alert("Data Saved");
    },500)
    
    const response = [res.status + ":" + res.statusText, res.headers, res.data];
    const dataReturn = [request, response];
    await axios.post(`${url2}/addRestLog`, dataReturn);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
    setTimeout(()=>{
      alert("Data couldn't be saved!", 1000);
    })
    
=======
    alert("Data Saved");
    try {
      const response = [
        res.status + ":" + res.statusText,
        res.headers,
        res.data,
      ];
      const dataReturn = [request, response];
      console.log(`${url2}/addRestLog`);
      await axios.post(`${url2}/addRestLog`, dataReturn);
      console.log("Log posted!");
    } catch (error) {
      console.log("Error while posting for Log! --->", error.message);
    }
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
>>>>>>> b7447844ec098679780eca10cd6faf23eaf44283
  }
};
