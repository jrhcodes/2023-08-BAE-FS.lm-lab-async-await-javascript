import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/";

const fetchData = async (apiEndPoint, n) => {

  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(`fetchData(${apiEndPoint}) json response received:`, json);
  } catch (error) {
    console.log(`An error occurred in fetchData(${apiEndPoint}): `, error);
  }
};

[2, 6, 88, , -1, 9999].forEach(i => fetchData(jsonTypicode + i));
fetchData("ERROR", 0);
fetchData("https://bbc.co.uk", 0);
  
