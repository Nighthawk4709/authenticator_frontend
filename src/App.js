import React, { useEffect, useState } from "react";
import Axios from "axios";

function App(){

  // getting data from backend to show on front end
  const [data, setData] = useState();

  const getData = async() => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }

  console.log("The value of data passed is: " + data);

  useEffect(() => {
    getData()
  }, []);

  return(
    <div>To all those out there {data}</div>
  );
}

export default App;