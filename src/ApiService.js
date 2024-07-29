import axios from "axios";
import { UrlConstant } from "./UrlConstant";

const BASE_URL = UrlConstant.BASE_URL
export async function getMethod(url) {
  try {
    const token = localStorage.getItem("token");
    const BearerToken = `Bearer ${token}`;
    const data = await axios.get( BASE_URL + url, {
      headers: { Authorization: BearerToken },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {}
}



export async function PostMethod(url) {
    try {
        const token = localStorage.getItem("token");
        const BearerToken = `Bearer ${token}`;
        const response = await axios.post(url ,{
            headers: { Authorization: BearerToken },
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
    }
}



export async function putMethod(url, data) {
  try {
    const token = localStorage.getItem("token");
    const BearerToken = `Bearer ${token}`;
    const response = await axios.put(url, data, {
      headers: { Authorization: BearerToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Update failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error in updateMethod:", error);
  }
}

export async function deleteMethod(url) {
  try {
    const token = localStorage.getItem("token");
    const BearerToken = `Bearer ${token}`;
    const response = await axios.delete(url, {
      headers: { Authorization: BearerToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Update failed with status:", response.status);
    }
  } catch (error) {
    console.error("Error in updateMethod:", error);
  }
}