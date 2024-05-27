import { API } from "../api";
// import { delay } from ".";
import { VITE_STRAPI_API_KEY } from "../config";

const fetcher = async (url: string) => {
  try {
    // delay(5000);
    // throw new Error("sdcsd")
    const data = await API.get(url, {
      headers: { Authorization: `Bearer ${VITE_STRAPI_API_KEY}` },
    });

    return data.data.data;
  } catch (error) {
    // console.log(error)
  }
};

export { fetcher };
