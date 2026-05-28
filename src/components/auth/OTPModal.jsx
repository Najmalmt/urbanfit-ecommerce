// import React, { useState } from "react";

// const OTPModal = ({ email, onVerify, loading }) => {
//   const [otp, setOtp] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onVerify({
//       email,
//       otp,
//     });
//   };

//   return (
//     <div>
//       <h2>Verify OTP</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <button type="submit">
//           {loading ? "Verifying..." : "Verify OTP"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OTPModal;
import React, { useState } from "react";

const OTPModal = ({
  email,
  onVerify,
  loading,
  onClose,
}) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onVerify(otp);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "400px",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          OTP sent to {email}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>
        </form>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            background: "#eee",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OTPModal;