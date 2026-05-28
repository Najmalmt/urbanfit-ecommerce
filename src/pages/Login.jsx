// import React, { useState } from "react";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   Shield,
//   Zap,
//   Sparkles,
// } from "lucide-react";

// const LoginPage = () => {
//   const [showPassword, setShowPassword] =
//     useState(false);

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1000px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECTS */}
//           <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] bg-white/5 rounded-full blur-3xl"></div>

//           {/* CONTENT */}
//           <div className="relative z-10 h-full flex flex-col justify-between">

//             {/* TOP */}
//             <div>

//               {/* LOGO */}
//               <h1 className="text-[18px] font-black tracking-wide">
//                 SHOP.CO
//               </h1>

//               {/* BADGE */}
//               <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full mt-6">

//                 <div className="w-2 h-2 rounded-full bg-green-400"></div>

//                 <span className="text-[10px] tracking-wide text-gray-300">
//                   SECURE LOGIN SYSTEM
//                 </span>

//               </div>

//               {/* TITLE */}
//               <div className="mt-6">

//                 <h2 className="text-[38px] leading-[42px] font-light">
//                   Welcome
//                 </h2>

//                 <h2 className="text-[50px] leading-[52px] font-black mt-1">
//                   Back
//                 </h2>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[12px] text-gray-400 leading-6 mt-5 max-w-[340px]">
//                 Login to continue your premium shopping
//                 experience with secure access, fast checkout
//                 and personalized recommendations.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   99%
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Security
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Access
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   Fast
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Checkout
//                 </p>

//               </div>

//             </div>

//             {/* FEATURES */}
//             <div className="grid grid-cols-1 gap-3 mt-7">

//               {/* FEATURE */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

//                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
//                   <Shield size={15} />
//                 </div>

//                 <div>
//                   <h3 className="text-[12px] font-semibold">
//                     Protected Authentication
//                   </h3>

//                   <p className="text-[10px] text-gray-400 mt-1">
//                     Advanced encrypted login protection
//                   </p>
//                 </div>

//               </div>

//               {/* FEATURE */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

//                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
//                   <Zap size={15} />
//                 </div>

//                 <div>
//                   <h3 className="text-[12px] font-semibold">
//                     Fast Shopping Experience
//                   </h3>

//                   <p className="text-[10px] text-gray-400 mt-1">
//                     Instant access to your account
//                   </p>
//                 </div>

//               </div>

//               {/* FEATURE */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

//                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
//                   <Sparkles size={15} />
//                 </div>

//                 <div>
//                   <h3 className="text-[12px] font-semibold">
//                     Personalized Recommendations
//                   </h3>

//                   <p className="text-[10px] text-gray-400 mt-1">
//                     AI powered shopping suggestions
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[380px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Sign In
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Login to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form className="mt-6 space-y-4">

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Mail size={14} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <div className="flex items-center justify-between">

//                   <label className="text-[11px] font-semibold">
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="text-[10px] text-black font-medium hover:underline"
//                   >
//                     Forgot Password?
//                   </button>

//                 </div>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowPassword(!showPassword)
//                     }
//                   >
//                     {showPassword ? (
//                       <Eye size={14} className="text-gray-500" />
//                     ) : (
//                       <EyeOff
//                         size={14}
//                         className="text-gray-500"
//                       />
//                     )}
//                   </button>

//                 </div>
//               </div>

//               {/* REMEMBER */}
//               <div className="flex items-center justify-between pt-1">

//                 <label className="flex items-center gap-2 cursor-pointer">

//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 accent-black"
//                   />

//                   <span className="text-[11px] text-gray-600">
//                     Remember me
//                   </span>

//                 </label>

//               </div>

//               {/* BUTTON */}
//               <button className="w-full h-11 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition">

//                 Sign In

//               </button>

//             </form>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-5">

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//               <span className="text-[10px] text-gray-500">
//                 OR CONTINUE WITH
//               </span>

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//             </div>

//             {/* SOCIAL */}
//             <div className="grid grid-cols-2 gap-3">

//               {/* GOOGLE */}
//               <button className="h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[12px] font-medium hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-4 h-4"
//                 />

//                 Google

//               </button>

//               {/* APPLE */}
//               <button className="h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[12px] font-medium hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/0/747.png"
//                   alt="apple"
//                   className="w-4 h-4"
//                 />

//                 Apple

//               </button>

//             </div>

//             {/* FOOTER */}
//             <p className="text-center text-[11px] text-gray-600 mt-5">

//               Don’t have an account?{" "}

//               <span className="font-semibold text-black underline cursor-pointer">
//                 Create Account
//               </span>

//             </p>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LoginPage;





// import React, { useState } from "react";

// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   Shield,
//   Zap,
//   Sparkles,
// } from "lucide-react";

// import { useDispatch } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import { login } from "../features/auth/authSlice";

// const LoginPage = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] =
//     useState(false);

//   // FORM DATA
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // LOGIN
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await dispatch(
//         login(formData)
//       );

//       // SUCCESS
//       if (
//         result.meta.requestStatus ===
//         "fulfilled"
//       ) {
//         navigate("/");
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1000px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECTS */}
//           <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] bg-white/5 rounded-full blur-3xl"></div>

//           {/* CONTENT */}
//           <div className="relative z-10 h-full flex flex-col justify-between">

//             {/* TOP */}
//             <div>

//               <h1 className="text-[18px] font-black tracking-wide">
//                 SHOP.CO
//               </h1>

//               <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full mt-6">

//                 <div className="w-2 h-2 rounded-full bg-green-400"></div>

//                 <span className="text-[10px] tracking-wide text-gray-300">
//                   SECURE LOGIN SYSTEM
//                 </span>

//               </div>

//               <div className="mt-6">

//                 <h2 className="text-[38px] leading-[42px] font-light">
//                   Welcome
//                 </h2>

//                 <h2 className="text-[50px] leading-[52px] font-black mt-1">
//                   Back
//                 </h2>

//               </div>

//               <p className="text-[12px] text-gray-400 leading-6 mt-5 max-w-[340px]">
//                 Login to continue your premium shopping
//                 experience.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3">

//                 <h3 className="text-[22px] font-black">
//                   99%
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Security
//                 </p>

//               </div>

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Access
//                 </p>

//               </div>

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3">

//                 <h3 className="text-[22px] font-black">
//                   Fast
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Checkout
//                 </p>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[380px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Sign In
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Login to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form
//               onSubmit={handleLogin}
//               className="mt-6 space-y-4"
//             >

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Mail size={14} className="text-gray-500" />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowPassword(!showPassword)
//                     }
//                   >
//                     {showPassword ? (
//                       <Eye size={14} className="text-gray-500" />
//                     ) : (
//                       <EyeOff
//                         size={14}
//                         className="text-gray-500"
//                       />
//                     )}
//                   </button>

//                 </div>
//               </div>

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="w-full h-11 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition"
//               >
//                 Sign In
//               </button>

//             </form>

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default LoginPage;

import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;