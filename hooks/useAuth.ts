import customAxios from "@/lib/axios";

const useAuth = () => {
  const googleAuth = async (code: string) => {
    try {
      const response = await customAxios.post(`/auth/web/google`, {
        code,
      });
      if (response.status !== 200) {
        throw new Error("로그인 실패");
      }
      return response.data;
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return {
    googleAuth,
  };
};

export default useAuth;
