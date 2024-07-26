import axios from "axios";

// 클라이언트의 호스트에 따라 기본 URL 설정
const host =
  window.location.hostname === "localhost"
    ? "http://1.215.235.253:17000" // 로컬 호스트에서 실행될 때 서버 URL
    : "/api"; // Netlify 배포 환경에서 API 프록시 URL

// axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: host,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// 요청 전 처리
apiClient.interceptors.request.use(
  (config) => {
    // 여기서 추가적인 요청 전 처리를 할 수 있습니다.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 후 처리
apiClient.interceptors.response.use(
  (response) => {
    // 여기서 추가적인 응답 후 처리를 할 수 있습니다.
    return response;
  },
  (error) => {
    // 에러 처리를 여기서 할 수 있습니다.
    return Promise.reject(error);
  }
);
