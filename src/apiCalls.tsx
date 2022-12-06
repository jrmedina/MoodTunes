const fetchData = async () => {
  try {
    const response = await fetch("https://mood-tunes-api.vercel.app/");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
