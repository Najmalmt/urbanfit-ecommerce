// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import { loginUser } from "../../features/auth/authSlice";

// const LoginForm = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const { loading, error } = useSelector(
//     (state) => state.auth
//   );

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // HANDLE INPUT
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // LOGIN
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const resultAction = await dispatch(
//       loginUser(formData)
//     );

//     if (
//       loginUser.fulfilled.match(
//         resultAction
//       )
//     ) {
//       navigate("/");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />

//       <button type="submit">
//         {loading
//           ? "Loading..."
//           : "Login"}
//       </button>

//       {error && (
//         <p style={{ color: "red" }}>
//           {error}
//         </p>
//       )}
//     </form>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import { loginUser } from "../../features/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    // EMPTY VALIDATION
    if (
      !formData.email ||
      !formData.password
    ) {
      return alert(
        "Please fill all fields"
      );
    }

    // LOGIN API
    const resultAction = await dispatch(
      loginUser(formData)
    );

    console.log(
      "LOGIN RESULT:",
      resultAction
    );

    // SUCCESS
    if (
      loginUser.fulfilled.match(
        resultAction
      )
    ) {
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
            Welcome Back
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            Login to continue your
            shopping journey
          </p>
        </div>

        <form onSubmit={handleLogin}>
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

          {/* PASSWORD */}
          <div
            style={{
              marginBottom: "24px",
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
              : "Login"}
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

          {/* SIGNUP TEXT */}
          <p
            style={{
              marginTop: "24px",
              textAlign: "center",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Don’t have an account?{" "}

            <Link
              to="/signup"
              style={{
                color: "#111827",
                fontWeight: "600",
                textDecoration:
                  "none",
              }}
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;