// import React from 'react'

// function SignupForm() {
//   return (
//     <div>SignupForm</div>
//   )
// }

// export default SignupForm


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import API from "../../api/axios";

// import {
//   authStart,
//   authSuccess,
//   authFail,
// } from "../../redux/slices/authSlice";

// import OTPModal from "./OTPModal";

// const SignupForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, error } = useSelector((state) => state.auth);

//   const [showOTPModal, setShowOTPModal] = useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     confirm_password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // SIGNUP API
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       dispatch(authStart());

//       const response = await API.post(
//         "signup/",
//         formData
//       );

//       console.log(response.data);

//       setShowOTPModal(true);

//     } catch (err) {
//       dispatch(
//         authFail(
//           err.response?.data?.message ||
//             "Signup failed"
//         )
//       );
//     }
//   };

//   // VERIFY OTP API
//   const handleVerifyOTP = async (otpData) => {
//     try {
//       dispatch(authStart());

//       const response = await API.post(
//         "verify-signup-otp/",
//         otpData
//       );

//       console.log(response.data);

//       // BACKEND TOKEN
//       const token = response.data?.token;

//       // SAVE TOKEN
//       localStorage.setItem("token", token);

//       dispatch(
//         authSuccess({
//           user: response.data?.user,
//           token,
//         })
//       );

//       navigate("/");

//     } catch (err) {
//       dispatch(
//         authFail(
//           err.response?.data?.message ||
//             "OTP verification failed"
//         )
//       );
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSignup}>

//         <input
//           type="text"
//           name="first_name"
//           placeholder="First Name"
//           value={formData.first_name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="last_name"
//           placeholder="Last Name"
//           value={formData.last_name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="phone_number"
//           placeholder="Phone Number"
//           value={formData.phone_number}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="confirm_password"
//           placeholder="Confirm Password"
//           value={formData.confirm_password}
//           onChange={handleChange}
//         />

//         <button type="submit">
//           {loading ? "Loading..." : "Signup"}
//         </button>

//         {error && <p>{error}</p>}
//       </form>

//       {/* OTP MODAL */}
//       {showOTPModal && (
//         <OTPModal
//           email={formData.email}
//           onVerify={handleVerifyOTP}
//           loading={loading}
//         />
//       )}
//     </>
//   );
// };

// export default SignupForm;






// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import {
//   signupUser,
//   verifySignupOtp,
// } from "../../features/auth/authSlice";

// import OTPModal from "./OTPModal";

// const SignupForm = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const { loading, error } = useSelector(
//     (state) => state.auth
//   );

//   const [showOTPModal, setShowOTPModal] =
//     useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     confirm_password: "",
//   });

//   // HANDLE INPUT
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // SIGNUP
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (
//       formData.password !==
//       formData.confirm_password
//     ) {
//       return alert(
//         "Passwords do not match"
//       );
//     }

//     const resultAction = await dispatch(
//       signupUser(formData)
//     );

//     if (
//       signupUser.fulfilled.match(
//         resultAction
//       )
//     ) {
//       setShowOTPModal(true);
//     }
//   };

//   // VERIFY OTP
//   const handleVerifyOTP = async (otp) => {
//     const resultAction = await dispatch(
//       verifySignupOtp({
//         email: formData.email,
//         otp,
//       })
//     );

//     if (
//       verifySignupOtp.fulfilled.match(
//         resultAction
//       )
//     ) {
//       setShowOTPModal(false);

//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSignup}>

//         <input
//           type="text"
//           name="first_name"
//           placeholder="First Name"
//           value={formData.first_name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="last_name"
//           placeholder="Last Name"
//           value={formData.last_name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="phone_number"
//           placeholder="Phone Number"
//           value={formData.phone_number}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="confirm_password"
//           placeholder="Confirm Password"
//           value={formData.confirm_password}
//           onChange={handleChange}
//         />

//         <button type="submit">
//           {loading
//             ? "Loading..."
//             : "Signup"}
//         </button>

//         {error && (
//           <p style={{ color: "red" }}>
//             {error}
//           </p>
//         )}
//       </form>

//       {showOTPModal && (
//         <OTPModal
//           email={formData.email}
//           onVerify={handleVerifyOTP}
//           loading={loading}
//           onClose={() =>
//             setShowOTPModal(false)
//           }
//         />
//       )}
//     </>
//   );
// };

// export default SignupForm;












// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import {
//   signupUser,
//   verifySignupOtp,
// } from "../../features/auth/authSlice";

// import OTPModal from "./OTPModal";

// const SignupForm = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const { loading, error } = useSelector(
//     (state) => state.auth
//   );

//   const [showOTPModal, setShowOTPModal] =
//     useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     confirm_password: "",
//   });

//   // HANDLE INPUT
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // SIGNUP
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // PASSWORD CHECK
//     if (
//       formData.password !==
//       formData.confirm_password
//     ) {
//       return alert(
//         "Passwords do not match"
//       );
//     }

//     // API CALL
//     const resultAction = await dispatch(
//       signupUser(formData)
//     );

//     console.log(
//       "SIGNUP RESULT:",
//       resultAction
//     );

//     // SUCCESS
//     if (
//       signupUser.fulfilled.match(
//         resultAction
//       )
//     ) {
//       setShowOTPModal(true);
//     }
//   };

//   // VERIFY OTP
//   const handleVerifyOTP = async (otp) => {
//     const resultAction = await dispatch(
//       verifySignupOtp({
//         email: formData.email,
//         otp,
//       })
//     );

//     console.log(
//       "OTP RESULT:",
//       resultAction
//     );

//     // SUCCESS
//     if (
//       verifySignupOtp.fulfilled.match(
//         resultAction
//       )
//     ) {
//       setShowOTPModal(false);

//       navigate("/");
//     }
//   };

//   // INPUT STYLE
//   const inputStyle = {
//     width: "100%",
//     height: "54px",
//     padding: "0 18px",
//     borderRadius: "14px",
//     border: "1px solid #e5e7eb",
//     outline: "none",
//     fontSize: "15px",
//     background: "#f9fafb",
//     color: "#111827",
//     boxSizing: "border-box",
//   };

//   return (
//     <>
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background:
//             "linear-gradient(to right, #f8fafc, #eef2ff)",
//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "500px",
//             background: "#fff",
//             borderRadius: "28px",
//             padding: "40px",
//             boxShadow:
//               "0 10px 40px rgba(0,0,0,0.08)",
//             border: "1px solid #f1f5f9",
//           }}
//         >
//           {/* TOP CONTENT */}
//           <div
//             style={{
//               textAlign: "center",
//               marginBottom: "32px",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "34px",
//                 fontWeight: "700",
//                 color: "#111827",
//                 marginBottom: "10px",
//               }}
//             >
//               Create Account
//             </h2>

//             <p
//               style={{
//                 color: "#6b7280",
//                 fontSize: "15px",
//               }}
//             >
//               Signup to continue your
//               shopping journey
//             </p>
//           </div>

//           <form onSubmit={handleSignup}>
//             {/* FIRST NAME + LAST NAME */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns:
//                   "1fr 1fr",
//                 gap: "14px",
//                 marginBottom: "18px",
//               }}
//             >
//               <input
//                 type="text"
//                 name="first_name"
//                 placeholder="First Name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />

//               <input
//                 type="text"
//                 name="last_name"
//                 placeholder="Last Name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//             </div>

//             {/* EMAIL */}
//             <div
//               style={{
//                 marginBottom: "18px",
//               }}
//             >
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//             </div>

//             {/* PHONE */}
//             <div
//               style={{
//                 marginBottom: "18px",
//               }}
//             >
//               <input
//                 type="text"
//                 name="phone_number"
//                 placeholder="Phone Number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//             </div>

//             {/* PASSWORD */}
//             <div
//               style={{
//                 marginBottom: "18px",
//               }}
//             >
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <div
//               style={{
//                 marginBottom: "24px",
//               }}
//             >
//               <input
//                 type="password"
//                 name="confirm_password"
//                 placeholder="Confirm Password"
//                 value={
//                   formData.confirm_password
//                 }
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 height: "56px",
//                 border: "none",
//                 borderRadius: "16px",
//                 background:
//                   "linear-gradient(135deg, #111827, #374151)",
//                 color: "#fff",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 boxShadow:
//                   "0 6px 18px rgba(17,24,39,0.2)",
//               }}
//             >
//               {loading
//                 ? "Loading..."
//                 : "Create Account"}
//             </button>

//             {/* ERROR */}
//             {error && (
//               <div
//                 style={{
//                   marginTop: "16px",
//                   background: "#fff5f5",
//                   padding: "14px",
//                   borderRadius: "12px",
//                   border:
//                     "1px solid #fecaca",
//                 }}
//               >
//                 {typeof error ===
//                 "string" ? (
//                   <p
//                     style={{
//                       color: "red",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {error}
//                   </p>
//                 ) : (
//                   Object.entries(
//                     error
//                   ).map(
//                     ([key, value]) => (
//                       <p
//                         key={key}
//                         style={{
//                           color: "red",
//                           fontSize:
//                             "14px",
//                           marginBottom:
//                             "6px",
//                         }}
//                       >
//                         <strong>
//                           {key}:
//                         </strong>{" "}
//                         {Array.isArray(
//                           value
//                         )
//                           ? value.join(
//                               ", "
//                             )
//                           : value}
//                       </p>
//                     )
//                   )
//                 )}
//               </div>
//             )}

//             {/* LOGIN TEXT */}
//             <p
//               style={{
//                 marginTop: "24px",
//                 textAlign: "center",
//                 color: "#6b7280",
//                 fontSize: "14px",
//               }}
//             >
//               Already have an account?{" "}
//               <span
//                 style={{
//                   color: "#111827",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                 }}
//               >
//                 Login
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>

//       {/* OTP MODAL */}
//       {showOTPModal && (
//         <OTPModal
//           email={formData.email}
//           onVerify={handleVerifyOTP}
//           loading={loading}
//           onClose={() =>
//             setShowOTPModal(false)
//           }
//         />
//       )}
//     </>
//   );
// };

// export default SignupForm;







import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

import {
  signupUser,
  verifySignupOtp,
} from "../../features/auth/authSlice";

import OTPModal from "./OTPModal";

const SignupForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [showOTPModal, setShowOTPModal] =
    useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();

    // PASSWORD CHECK
    if (
      formData.password !==
      formData.confirm_password
    ) {
      return alert(
        "Passwords do not match"
      );
    }

    // SIGNUP API
    const resultAction = await dispatch(
      signupUser(formData)
    );

    console.log(
      "SIGNUP RESULT:",
      resultAction
    );

    // SUCCESS
    if (
      signupUser.fulfilled.match(
        resultAction
      )
    ) {
      setShowOTPModal(true);
    }
  };

  // VERIFY OTP
  const handleVerifyOTP = async (otp) => {
    const resultAction = await dispatch(
      verifySignupOtp({
        email: formData.email,
        otp,
      })
    );

    console.log(
      "OTP RESULT:",
      resultAction
    );

    // SUCCESS
    if (
      verifySignupOtp.fulfilled.match(
        resultAction
      )
    ) {
      setShowOTPModal(false);

      // GO HOME
      window.location.href = "/";
    }
  };

  // INPUT STYLE
  const inputStyle = {
    width: "100%",
    height: "54px",
    padding: "0 18px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "15px",
    background: "#f9fafb",
    color: "#111827",
    boxSizing: "border-box",
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to right, #f8fafc, #eef2ff)",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            background: "#fff",
            borderRadius: "28px",
            padding: "40px",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.08)",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* TOP CONTENT */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "10px",
              }}
            >
              Create Account
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
              }}
            >
              Signup to continue your
              shopping journey
            </p>
          </div>

          <form onSubmit={handleSignup}>
            {/* FIRST + LAST NAME */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "14px",
                marginBottom: "18px",
              }}
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* EMAIL */}
            <div
              style={{
                marginBottom: "18px",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* PHONE */}
            <div
              style={{
                marginBottom: "18px",
              }}
            >
              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* PASSWORD */}
            <div
              style={{
                marginBottom: "18px",
              }}
            >
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={
                  formData.confirm_password
                }
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              style={{
                width: "100%",
                height: "56px",
                border: "none",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, #111827, #374151)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow:
                  "0 6px 18px rgba(17,24,39,0.2)",
              }}
            >
              {loading
                ? "Loading..."
                : "Create Account"}
            </button>

            {/* ERROR */}
            {error && (
              <div
                style={{
                  marginTop: "16px",
                  background: "#fff5f5",
                  padding: "14px",
                  borderRadius: "12px",
                  border:
                    "1px solid #fecaca",
                }}
              >
                {typeof error ===
                "string" ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                    }}
                  >
                    {error}
                  </p>
                ) : (
                  Object.entries(
                    error
                  ).map(
                    ([key, value]) => (
                      <p
                        key={key}
                        style={{
                          color: "red",
                          fontSize:
                            "14px",
                          marginBottom:
                            "6px",
                        }}
                      >
                        <strong>
                          {key}:
                        </strong>{" "}
                        {Array.isArray(
                          value
                        )
                          ? value.join(
                              ", "
                            )
                          : value}
                      </p>
                    )
                  )
                )}
              </div>
            )}

            {/* LOGIN TEXT */}
            <p
              style={{
                marginTop: "24px",
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Already have an account?{" "}

              <Link
                to="/login"
                style={{
                  color: "#111827",
                  fontWeight: "600",
                  textDecoration:
                    "none",
                }}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* OTP MODAL */}
      {showOTPModal && (
        <OTPModal
          email={formData.email}
          onVerify={handleVerifyOTP}
          loading={loading}
          onClose={() =>
            setShowOTPModal(false)
          }
        />
      )}
    </>
  );
};

export default SignupForm;