import axios from "axios";

export async function getDataFromAPI() {
  try {
    const response = await axios.get(
      "https://anitop.vercel.app/api/v1/music-chart"
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
