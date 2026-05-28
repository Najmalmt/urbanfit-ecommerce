import axiosInstance from "../../services/axios";

// SIGNUP
export const signupAPI = async (userData) => {
  const response = await axiosInstance.post(
    "accounts/signup/",
    userData
  );

  return response.data;
};

// VERIFY OTP
export const verifySignupOtpAPI = async (otpData) => {
  const response = await axiosInstance.post(
    "accounts/verify-signup-otp/",
    otpData
  );

  return response.data;
};

// LOGIN
export const loginAPI = async (loginData) => {
  const response = await axiosInstance.post(
    "accounts/login/",
    loginData
  );

  return response.data;
};