import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  signupAPI,
  verifySignupOtpAPI,
  loginAPI,
} from "./authAPI";

// SIGNUP
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      return await signupAPI(userData);

    } catch (error) {
      console.log(
        "SIGNUP ERROR:",
        error.response?.data
      );

      return thunkAPI.rejectWithValue(
        error.response?.data ||
          "Signup Failed"
      );
    }
  }
);

// VERIFY OTP
export const verifySignupOtp =
  createAsyncThunk(
    "auth/verifySignupOtp",
    async (otpData, thunkAPI) => {
      try {
        return await verifySignupOtpAPI(
          otpData
        );

      } catch (error) {
        console.log(
          "OTP ERROR:",
          error.response?.data
        );

        return thunkAPI.rejectWithValue(
          error.response?.data ||
            "OTP Verification Failed"
        );
      }
    }
  );

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, thunkAPI) => {
    try {
      return await loginAPI(loginData);

    } catch (error) {
      console.log(
        "LOGIN ERROR:",
        error.response?.data
      );

      return thunkAPI.rejectWithValue(
        error.response?.data ||
          "Login Failed"
      );
    }
  }
);

const initialState = {
  user: null,
  token:
    localStorage.getItem("token") ||
    null,

  loading: false,

  error: null,

  success: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;

      state.token = null;

      localStorage.removeItem(
        "token"
      );
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // SIGNUP
      .addCase(
        signupUser.pending,
        (state) => {
          state.loading = true;

          state.error = null;
        }
      )

      .addCase(
        signupUser.fulfilled,
        (state) => {
          state.loading = false;

          state.success = true;
        }
      )

      .addCase(
        signupUser.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload;
        }
      )

      // VERIFY OTP
      .addCase(
        verifySignupOtp.pending,
        (state) => {
          state.loading = true;

          state.error = null;
        }
      )

      .addCase(
        verifySignupOtp.fulfilled,
        (state, action) => {
          state.loading = false;

          state.user =
            action.payload?.user;

          state.token =
            action.payload?.token;

          localStorage.setItem(
            "token",
            action.payload?.token
          );
        }
      )

      .addCase(
        verifySignupOtp.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload;
        }
      )

      // LOGIN
      .addCase(
        loginUser.pending,
        (state) => {
          state.loading = true;

          state.error = null;
        }
      )

      .addCase(
        loginUser.fulfilled,
        (state, action) => {
          state.loading = false;

          state.user =
            action.payload?.user;

          state.token =
            action.payload?.token;

          localStorage.setItem(
            "token",
            action.payload?.token
          );
        }
      )

      .addCase(
        loginUser.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload;
        }
      );
  },
});

export const {
  logout,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;