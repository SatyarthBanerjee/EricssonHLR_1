import axios from "axios";
export const postData = async (data) =>{ try{
    let res = await axios.post("/api/new-data", data);
    console.log("Data saved: ", res.data)}
 catch (error) {
      console.log("Error calling postData--> ", error.message);
    }
}
