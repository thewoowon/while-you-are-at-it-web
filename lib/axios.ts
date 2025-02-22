import axios from "axios";
import { API_PREFIX } from "@/constants";

const basicUrl = `${process.env.NEXT_PUBLIC_API_URL}${API_PREFIX}`;

// Axios 인스턴스 생성
const customAxios = axios.create({
  baseURL: basicUrl,
  timeout: 10000, // 10초 제한
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default customAxios;
