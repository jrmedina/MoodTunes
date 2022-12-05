const fetchData = async () => {
  try {
    const response = await fetch("https://moodtunes-api.onrender.com/");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
