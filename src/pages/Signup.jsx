// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   ShieldCheck,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-6">
      
//       <div className="w-full max-w-6xl bg-white rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
        
//         {/* LEFT SIDE */}
//         <div className="bg-[#f7f7f7] p-8 lg:p-10 relative hidden lg:block">

//           {/* Decorative Stars */}
//           <div className="absolute top-14 left-14 text-black text-4xl">
//             ✦
//           </div>

//           <div className="absolute top-56 right-14 text-black text-3xl">
//             ✦
//           </div>

//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
//               alt="fashion"
//               className="w-[300px] h-[430px] object-cover rounded-2xl"
//             />
//           </div>

//           {/* Features */}
//           <div className="mt-10 space-y-8">

//             {/* Feature */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
//                 <Tag size={18} />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[16px] uppercase">
//                   Exclusive Offers
//                 </h3>

//                 <p className="text-gray-600 mt-1 text-sm leading-6">
//                   Be the first to know about new arrivals
//                   <br />
//                   and special discounts.
//                 </p>
//               </div>
//             </div>

//             {/* Feature */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
//                 <Truck size={18} />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[16px] uppercase">
//                   Fast & Reliable Delivery
//                 </h3>

//                 <p className="text-gray-600 mt-1 text-sm leading-6">
//                   Get your favorite styles delivered
//                   <br />
//                   quickly and safely.
//                 </p>
//               </div>
//             </div>

//             {/* Feature */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
//                 <ShieldCheck size={18} />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[16px] uppercase">
//                   Secure Shopping
//                 </h3>

//                 <p className="text-gray-600 mt-1 text-sm leading-6">
//                   Your data is protected with top-tier
//                   <br />
//                   security and privacy.
//                 </p>
//               </div>
//             </div>

//             {/* Feature */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
//                 <Heart size={18} />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[16px] uppercase">
//                   Save Your Favorites
//                 </h3>

//                 <p className="text-gray-600 mt-1 text-sm leading-6">
//                   Easily access your wishlist and
//                   <br />
//                   past orders anytime.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="p-8 lg:p-10 flex items-center">
          
//           <div className="w-full">

//             {/* Heading */}
//             <h1 className="text-4xl font-bold text-black">
//               Create Account
//             </h1>

//             <p className="text-gray-500 mt-4 leading-6 text-[15px]">
//               Join SHOP.CO and start your style journey with
//               exclusive benefits.
//             </p>

//             {/* FORM */}
//             <form className="mt-8 space-y-5">

//               {/* First Name */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   First Name
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <User size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your first name"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Last Name */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Last Name
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <User size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your last name"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Email Address
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Mail size={17} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Phone Number
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Phone size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone number"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Password
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Lock size={17} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create your password"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <Eye size={17} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={17} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Confirm Password
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Lock size={17} className="text-gray-500" />

//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm your password"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(!showConfirmPassword)
//                     }
//                   >
//                     {showConfirmPassword ? (
//                       <Eye size={17} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={17} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Button */}
//               <button className="w-full h-12 bg-black text-white rounded-full font-semibold text-base hover:opacity-90 transition">
//                 Create Account
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="flex items-center gap-4 my-7">
//               <div className="flex-1 h-[1px] bg-gray-300"></div>

//               <span className="text-xs text-gray-500 font-medium">
//                 OR SIGN UP WITH
//               </span>

//               <div className="flex-1 h-[1px] bg-gray-300"></div>
//             </div>

//             {/* Social Buttons */}
//             <div className="space-y-4">

//               {/* Google */}
//               <button className="w-full h-12 border border-gray-300 rounded-full flex items-center justify-center gap-3 font-medium text-sm hover:bg-gray-50 transition">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-5 h-5"
//                 />

//                 Continue with Google
//               </button>

//               {/* Apple */}
//               <button className="w-full h-12 border border-gray-300 rounded-full flex items-center justify-center gap-3 font-medium text-sm hover:bg-gray-50 transition">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/0/747.png"
//                   alt="apple"
//                   className="w-5 h-5"
//                 />

//                 Continue with Apple
//               </button>
//             </div>

//             {/* Footer */}
//             <p className="text-center text-gray-600 mt-7 text-sm">
//               Already have an account?{" "}
//               <span className="font-semibold text-black cursor-pointer">
//                 Sign In
//               </span>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;





















// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   ShieldCheck,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-6 py-6">

//       <div className="w-full max-w-6xl bg-white rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#f8f8f8] to-[#efefef] px-10 py-12 relative overflow-hidden">

//           {/* Blur Effects */}
//           <div className="absolute -top-20 -left-20 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-0 right-0 w-60 h-60 bg-black/5 rounded-full blur-3xl"></div>

//           {/* Stars */}
//           <div className="absolute top-12 left-12 text-black text-3xl rotate-12">
//             ✦
//           </div>

//           <div className="absolute top-40 right-14 text-black text-2xl -rotate-12">
//             ✦
//           </div>

//           {/* IMAGE SECTION */}
//           <div className="relative flex justify-center items-center">

//             {/* Circle */}
//             <div className="absolute w-[340px] h-[340px] bg-white rounded-full shadow-inner"></div>

//             {/* Image */}
//             <img
//               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
//               alt="fashion"
//               className="relative z-10 w-[300px] h-[430px] object-cover rounded-[30px] shadow-2xl"
//             />
//           </div>

//           {/* FEATURES */}
//           <div className="mt-12 space-y-5">

//             {/* CARD */}
//             <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition">

//               <div className="min-w-[48px] h-12 rounded-xl bg-black text-white flex items-center justify-center">
//                 <Tag size={18} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[15px] text-black">
//                   Exclusive Offers
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-1 leading-6">
//                   Get early access to new collections and special discounts.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition">

//               <div className="min-w-[48px] h-12 rounded-xl bg-black text-white flex items-center justify-center">
//                 <Truck size={18} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[15px] text-black">
//                   Fast Delivery
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-1 leading-6">
//                   Safe and quick shipping for all your favorite products.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition">

//               <div className="min-w-[48px] h-12 rounded-xl bg-black text-white flex items-center justify-center">
//                 <ShieldCheck size={18} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[15px] text-black">
//                   Secure Shopping
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-1 leading-6">
//                   Your information stays protected with strong security.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition">

//               <div className="min-w-[48px] h-12 rounded-xl bg-black text-white flex items-center justify-center">
//                 <Heart size={18} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-[15px] text-black">
//                   Save Favorites
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-1 leading-6">
//                   Easily manage your wishlist and previous orders anytime.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="p-8 lg:p-10 flex items-center">

//           <div className="w-full">

//             {/* Heading */}
//             <h1 className="text-4xl font-bold text-black">
//               Create Account
//             </h1>

//             <p className="text-gray-500 mt-4 leading-6 text-[15px]">
//               Join SHOP.CO and start your style journey with
//               exclusive benefits.
//             </p>

//             {/* FORM */}
//             <form className="mt-8 space-y-5">

//               {/* FIRST NAME */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   First Name
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <User size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your first name"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* LAST NAME */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Last Name
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <User size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your last name"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Email Address
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Mail size={17} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* PHONE */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Phone Number
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Phone size={17} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone number"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Password
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Lock size={17} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create your password"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <Eye size={17} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={17} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-sm font-semibold text-black">
//                   Confirm Password
//                 </label>

//                 <div className="mt-2 flex items-center border border-gray-300 rounded-full px-4 h-12">
//                   <Lock size={17} className="text-gray-500" />

//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm your password"
//                     className="w-full ml-3 outline-none bg-transparent text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(!showConfirmPassword)
//                     }
//                   >
//                     {showConfirmPassword ? (
//                       <Eye size={17} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={17} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* BUTTON */}
//               <button className="w-full h-12 bg-black text-white rounded-full font-semibold text-base hover:opacity-90 transition">
//                 Create Account
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="flex items-center gap-4 my-7">

//               <div className="flex-1 h-[1px] bg-gray-300"></div>

//               <span className="text-xs text-gray-500 font-medium">
//                 OR SIGN UP WITH
//               </span>

//               <div className="flex-1 h-[1px] bg-gray-300"></div>
//             </div>

//             {/* SOCIAL BUTTONS */}
//             <div className="space-y-4">

//               {/* GOOGLE */}
//               <button className="w-full h-12 border border-gray-300 rounded-full flex items-center justify-center gap-3 font-medium text-sm hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-5 h-5"
//                 />

//                 Continue with Google
//               </button>

//               {/* APPLE */}
//               <button className="w-full h-12 border border-gray-300 rounded-full flex items-center justify-center gap-3 font-medium text-sm hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/0/747.png"
//                   alt="apple"
//                   className="w-5 h-5"
//                 />

//                 Continue with Apple
//               </button>
//             </div>

//             {/* FOOTER */}
//             <p className="text-center text-gray-600 mt-7 text-sm">
//               Already have an account?{" "}
//               <span className="font-semibold text-black cursor-pointer hover:underline">
//                 Sign In
//               </span>
//             </p>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignupPage;






// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-4 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="hidden lg:flex flex-col justify-center">

//           {/* LOGO */}
//           <h1 className="text-[18px] font-black tracking-tight mb-6">
//             SHOP.CO
//           </h1>

//           {/* HEADING */}
//           <div>
//             <h2 className="text-[38px] leading-[40px] font-light text-black">
//               Join the Style
//             </h2>

//             <h2 className="text-[48px] leading-[50px] font-black text-black">
//               Revolution
//             </h2>

//             <p className="text-gray-600 text-[13px] leading-6 mt-4 max-w-[320px]">
//               Create your account and unlock exclusive offers,
//               personalized recommendations and premium shopping
//               experience.
//             </p>
//           </div>

//           {/* IMAGE */}
//           <div className="relative mt-6 flex justify-center">

//             {/* Background Circle */}
//             <div className="absolute top-6 w-[220px] h-[220px] bg-white rounded-full blur-2xl"></div>

//             <img
//               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
//               alt="fashion"
//               className="relative z-10 w-[250px] h-[250px] object-cover rounded-[24px] shadow-lg"
//             />
//           </div>

//           {/* FEATURES */}
//           <div className="grid grid-cols-2 gap-3 mt-8">

//             {/* CARD */}
//             <div className="bg-white rounded-2xl p-3 flex items-start gap-3 shadow-sm">
//               <div className="w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center">
//                 <Tag size={14} />
//               </div>

//               <div>
//                 <h3 className="text-[11px] font-semibold">
//                   Exclusive Offers
//                 </h3>

//                 <p className="text-[9px] text-gray-500 mt-1 leading-4">
//                   Access special discounts instantly.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white rounded-2xl p-3 flex items-start gap-3 shadow-sm">
//               <div className="w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center">
//                 <Truck size={14} />
//               </div>

//               <div>
//                 <h3 className="text-[11px] font-semibold">
//                   Fast Delivery
//                 </h3>

//                 <p className="text-[9px] text-gray-500 mt-1 leading-4">
//                   Quick and safe shipping experience.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white rounded-2xl p-3 flex items-start gap-3 shadow-sm">
//               <div className="w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center">
//                 <Heart size={14} />
//               </div>

//               <div>
//                 <h3 className="text-[11px] font-semibold">
//                   Personalized Picks
//                 </h3>

//                 <p className="text-[9px] text-gray-500 mt-1 leading-4">
//                   Products recommended for you.
//                 </p>
//               </div>
//             </div>

//             {/* CARD */}
//             <div className="bg-white rounded-2xl p-3 flex items-start gap-3 shadow-sm">
//               <div className="w-9 h-9 rounded-full bg-[#f4f4f4] flex items-center justify-center">
//                 <Shield size={14} />
//               </div>

//               <div>
//                 <h3 className="text-[11px] font-semibold">
//                   Secure Payment
//                 </h3>

//                 <p className="text-[9px] text-gray-500 mt-1 leading-4">
//                   Your information stays protected.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white rounded-[26px] p-6 shadow-sm border border-gray-100">

//           {/* HEADING */}
//           <h1 className="text-[28px] font-black text-black">
//             Create Account
//           </h1>

//           <p className="text-[12px] text-gray-500 mt-2">
//             Fill your details to continue with SHOP.CO
//           </p>

//           {/* FORM */}
//           <form className="mt-5 space-y-3">

//             {/* NAME ROW */}
//             <div className="grid grid-cols-2 gap-3">

//               {/* FIRST NAME */}
//               <div>
//                 <label className="text-[11px] font-semibold text-black">
//                   First Name
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                   <User size={13} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="First name"
//                     className="w-full ml-2 outline-none text-[11px]"
//                   />
//                 </div>
//               </div>

//               {/* LAST NAME */}
//               <div>
//                 <label className="text-[11px] font-semibold text-black">
//                   Last Name
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                   <User size={13} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Last name"
//                     className="w-full ml-2 outline-none text-[11px]"
//                   />
//                 </div>
//               </div>

//             </div>

//             {/* EMAIL */}
//             <div>
//               <label className="text-[11px] font-semibold text-black">
//                 Email Address
//               </label>

//               <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                 <Mail size={13} className="text-gray-500" />

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full ml-2 outline-none text-[11px]"
//                 />
//               </div>
//             </div>

//             {/* PHONE */}
//             <div>
//               <label className="text-[11px] font-semibold text-black">
//                 Phone Number
//               </label>

//               <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                 <Phone size={13} className="text-gray-500" />

//                 <input
//                   type="text"
//                   placeholder="Enter your phone"
//                   className="w-full ml-2 outline-none text-[11px]"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div>
//               <label className="text-[11px] font-semibold text-black">
//                 Password
//               </label>

//               <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                 <Lock size={13} className="text-gray-500" />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Create password"
//                   className="w-full ml-2 outline-none text-[11px]"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <Eye size={13} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={13} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <div>
//               <label className="text-[11px] font-semibold text-black">
//                 Confirm Password
//               </label>

//               <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">
//                 <Lock size={13} className="text-gray-500" />

//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm password"
//                   className="w-full ml-2 outline-none text-[11px]"
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowConfirmPassword(!showConfirmPassword)
//                   }
//                 >
//                   {showConfirmPassword ? (
//                     <Eye size={13} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={13} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* BUTTON */}
//             <button className="w-full h-10 bg-black text-white rounded-xl font-semibold text-[12px] hover:opacity-90 transition">
//               Create Account
//             </button>
//           </form>

//           {/* DIVIDER */}
//           <div className="flex items-center gap-3 my-4">

//             <div className="flex-1 h-[1px] bg-gray-200"></div>

//             <span className="text-[9px] text-gray-500 font-medium">
//               OR SIGN UP WITH
//             </span>

//             <div className="flex-1 h-[1px] bg-gray-200"></div>
//           </div>

//           {/* SOCIAL BUTTONS */}
//           <div className="grid grid-cols-2 gap-3">

//             {/* GOOGLE */}
//             <button className="h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 font-medium text-[11px] hover:bg-gray-50 transition">

//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                 alt="google"
//                 className="w-3.5 h-3.5"
//               />

//               Google
//             </button>

//             {/* APPLE */}
//             <button className="h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 font-medium text-[11px] hover:bg-gray-50 transition">

//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/0/747.png"
//                 alt="apple"
//                 className="w-3.5 h-3.5"
//               />

//               Apple
//             </button>

//           </div>

//           {/* FOOTER */}
//           <p className="text-center text-[11px] text-gray-600 mt-4">
//             Already have an account?{" "}
//             <span className="font-semibold text-black cursor-pointer underline">
//               Sign In
//             </span>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-4">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1120px] bg-white rounded-[30px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="bg-[#f7f7f7] px-8 py-7 flex flex-col justify-between">

//           {/* LOGO */}
//           <h1 className="text-[18px] font-black tracking-tight">
//             SHOP.CO
//           </h1>

//           {/* CENTER CONTENT */}
//           <div className="flex flex-col items-center text-center">

//             {/* TEXT */}
//             <h2 className="text-[40px] leading-[42px] font-light text-black">
//               Join the Style
//             </h2>

//             <h2 className="text-[52px] leading-[54px] font-black text-black">
//               Revolution
//             </h2>

//             <p className="text-[13px] text-gray-600 leading-6 mt-4 max-w-[340px]">
//               Create your account and unlock exclusive offers,
//               personalized recommendations and premium
//               shopping experience.
//             </p>

//             {/* IMAGE */}
//             <div className="relative mt-7">

//               {/* BACKGROUND */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-[260px] h-[260px] bg-white rounded-full"></div>
//               </div>

//               {/* IMAGE */}
//               <img
//                 src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
//                 alt="fashion"
//                 className="relative z-10 w-[300px] h-[350px] object-cover rounded-[28px]"
//               />

//               {/* BADGE */}
//               <div className="absolute top-3 right-3 bg-black text-white px-3 py-2 rounded-xl shadow-lg z-20">
//                 <p className="text-[10px] font-semibold">
//                   50% OFF
//                 </p>
//               </div>

//               {/* SMALL CARD */}
//               <div className="absolute bottom-3 left-3 bg-white px-3 py-2 rounded-xl shadow-md z-20 text-left">
//                 <p className="text-[10px] font-semibold text-black">
//                   New Collection ✨
//                 </p>

//                 <p className="text-[9px] text-gray-500 mt-1">
//                   Trending fashion 2026
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* FEATURES */}
//           <div className="grid grid-cols-2 gap-3 mt-6">

//             {/* CARD */}
//             <div className="flex items-start gap-3">

//               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Tag size={15} />
//               </div>

//               <div>
//                 <h3 className="text-[12px] font-semibold">
//                   Exclusive Offers
//                 </h3>

//                 <p className="text-[10px] text-gray-500 mt-1 leading-4">
//                   Access discounts instantly.
//                 </p>
//               </div>

//             </div>

//             {/* CARD */}
//             <div className="flex items-start gap-3">

//               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Truck size={15} />
//               </div>

//               <div>
//                 <h3 className="text-[12px] font-semibold">
//                   Fast Delivery
//                 </h3>

//                 <p className="text-[10px] text-gray-500 mt-1 leading-4">
//                   Quick shipping worldwide.
//                 </p>
//               </div>

//             </div>

//             {/* CARD */}
//             <div className="flex items-start gap-3">

//               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Heart size={15} />
//               </div>

//               <div>
//                 <h3 className="text-[12px] font-semibold">
//                   Personalized Picks
//                 </h3>

//                 <p className="text-[10px] text-gray-500 mt-1 leading-4">
//                   Products for your taste.
//                 </p>
//               </div>

//             </div>

//             {/* CARD */}
//             <div className="flex items-start gap-3">

//               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
//                 <Shield size={15} />
//               </div>

//               <div>
//                 <h3 className="text-[12px] font-semibold">
//                   Secure Payment
//                 </h3>

//                 <p className="text-[10px] text-gray-500 mt-1 leading-4">
//                   Safe checkout protection.
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-8 py-7">

//           <div className="w-full max-w-[420px]">

//             {/* TITLE */}
//             <h1 className="text-[34px] font-black text-black">
//               Create Account
//             </h1>

//             <p className="text-[13px] text-gray-500 mt-2">
//               Fill your details to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form className="mt-6 space-y-3">

//               {/* NAME ROW */}
//               <div className="grid grid-cols-2 gap-3">

//                 {/* FIRST */}
//                 <div>
//                   <label className="text-[12px] font-semibold">
//                     First Name
//                   </label>

//                   <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">
//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="First name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />
//                   </div>
//                 </div>

//                 {/* LAST */}
//                 <div>
//                   <label className="text-[12px] font-semibold">
//                     Last Name
//                   </label>

//                   <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">
//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />
//                   </div>
//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[12px] font-semibold">
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

//               {/* PHONE */}
//               <div>
//                 <label className="text-[12px] font-semibold">
//                   Phone Number
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">
//                   <Phone size={14} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />
//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[12px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">
//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <Eye size={14} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={14} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-[12px] font-semibold">
//                   Confirm Password
//                 </label>

//                 <div className="mt-1 h-11 border border-gray-300 rounded-xl px-3 flex items-center">
//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(!showConfirmPassword)
//                     }
//                   >
//                     {showConfirmPassword ? (
//                       <Eye size={14} className="text-gray-500" />
//                     ) : (
//                       <EyeOff size={14} className="text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* BUTTON */}
//               <button className="w-full h-11 bg-black text-white rounded-xl text-[13px] font-semibold hover:opacity-90 transition">
//                 Create Account
//               </button>
//             </form>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-5">

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//               <span className="text-[10px] text-gray-500">
//                 OR SIGN UP WITH
//               </span>

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//             </div>

//             {/* SOCIAL */}
//             <div className="grid grid-cols-2 gap-3">

//               {/* GOOGLE */}
//               <button className="h-11 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[12px] font-medium hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-4 h-4"
//                 />

//                 Google
//               </button>

//               {/* APPLE */}
//               <button className="h-11 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[12px] font-medium hover:bg-gray-50 transition">

//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/0/747.png"
//                   alt="apple"
//                   className="w-4 h-4"
//                 />

//                 Apple
//               </button>

//             </div>

//             {/* FOOTER */}
//             <p className="text-center text-[12px] text-gray-600 mt-5">
//               Already have an account?{" "}
//               <span className="font-semibold text-black underline cursor-pointer">
//                 Sign In
//               </span>
//             </p>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignupPage;








// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//  Heart,
// } from "lucide-react";

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1050px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl"></div>

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

//                 <span className="text-[10px] text-gray-300 tracking-wide">
//                   AI POWERED SHOPPING
//                 </span>

//               </div>

//               {/* HEADING */}
//               <div className="mt-5">

//                 <h2 className="text-[36px] leading-[40px] font-light">
//                   Future Of
//                 </h2>

//                 <h2 className="text-[48px] leading-[50px] font-black mt-1">
//                   Fashion
//                 </h2>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[12px] text-gray-400 leading-6 mt-4 max-w-[340px]">
//                 Experience premium shopping with smart
//                 recommendations, fast delivery and secure
//                 payments powered by modern AI technology.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   10K+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Users
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   500+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Brands
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Support
//                 </p>

//               </div>

//             </div>

//             {/* FEATURES */}
//             <div className="grid grid-cols-2 gap-3 mt-7">

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Tag size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Smart Deals
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     AI discounts
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Truck size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Fast Shipping
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Worldwide
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Heart size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Favorites
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Personalized
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Shield size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Secure Pay
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Protected
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[400px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Create Account
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Fill your details to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form className="mt-5 space-y-3">

//               {/* NAME ROW */}
//               <div className="grid grid-cols-2 gap-3">

//                 {/* FIRST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     First Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="First name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//                 {/* LAST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     Last Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Mail size={14} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PHONE */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Phone Number
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Phone size={14} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
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

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Confirm Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={
//                       showConfirmPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="Confirm password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(
//                         !showConfirmPassword
//                       )
//                     }
//                   >
//                     {showConfirmPassword ? (
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
//               <button className="w-full h-10 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition">
//                 Create Account
//               </button>

//             </form>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-4">

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//               <span className="text-[10px] text-gray-500">
//                 OR SIGN UP WITH
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
//             <p className="text-center text-[11px] text-gray-600 mt-4">

//               Already have an account?{" "}

//               <span className="font-semibold text-black underline cursor-pointer">
//                 Sign In
//               </span>

//             </p>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignupPage;








// import React, { useState } from "react";

// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   /* OTP MODAL STATE */
//   const [showOtpModal, setShowOtpModal] =
//     useState(false);

//   const [otp, setOtp] = useState("");

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1050px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl"></div>

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

//                 <span className="text-[10px] text-gray-300 tracking-wide">
//                   AI POWERED SHOPPING
//                 </span>

//               </div>

//               {/* HEADING */}
//               <div className="mt-5">

//                 <h2 className="text-[36px] leading-[40px] font-light">
//                   Future Of
//                 </h2>

//                 <h2 className="text-[48px] leading-[50px] font-black mt-1">
//                   Fashion
//                 </h2>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[12px] text-gray-400 leading-6 mt-4 max-w-[340px]">
//                 Experience premium shopping with smart
//                 recommendations, fast delivery and secure
//                 payments powered by modern AI technology.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   10K+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Users
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   500+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Brands
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Support
//                 </p>

//               </div>

//             </div>

//             {/* FEATURES */}
//             <div className="grid grid-cols-2 gap-3 mt-7">

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Tag size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Smart Deals
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     AI discounts
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Truck size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Fast Shipping
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Worldwide
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Heart size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Favorites
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Personalized
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Shield size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Secure Pay
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Protected
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[400px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Create Account
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Fill your details to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form className="mt-5 space-y-3">

//               {/* NAME ROW */}
//               <div className="grid grid-cols-2 gap-3">

//                 {/* FIRST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     First Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="First name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//                 {/* LAST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     Last Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Mail size={14} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PHONE */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Phone Number
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Phone size={14} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
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

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Confirm Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={
//                       showConfirmPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="Confirm password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(
//                         !showConfirmPassword
//                       )
//                     }
//                   >
//                     {showConfirmPassword ? (
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
//                 type="button"
//                 onClick={() => setShowOtpModal(true)}
//                 className="w-full h-10 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition"
//               >
//                 Create Account
//               </button>

//             </form>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-4">

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//               <span className="text-[10px] text-gray-500">
//                 OR SIGN UP WITH
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
//             <p className="text-center text-[11px] text-gray-600 mt-4">

//               Already have an account?{" "}

//               <span className="font-semibold text-black underline cursor-pointer">
//                 Sign In
//               </span>

//             </p>

//           </div>
//         </div>

//       </div>

//       {/* ================= OTP MODAL ================= */}

//       {showOtpModal && (

//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

//           <div className="w-full max-w-[380px] bg-[#111111] border border-white/10 rounded-[28px] p-6 text-white relative overflow-hidden">

//             {/* GLOW */}
//             <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl"></div>

//             <div className="relative z-10">

//               {/* TITLE */}
//               <h2 className="text-[28px] font-black">
//                 Verify OTP
//               </h2>

//               <p className="text-[12px] text-gray-400 mt-2 leading-6">
//                 Enter the 6 digit verification code sent
//                 to your email address.
//               </p>

//               {/* OTP INPUT */}
//               <input
//                 type="text"
//                 maxLength={6}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full h-12 mt-6 bg-white/5 border border-white/10 rounded-2xl px-4 outline-none text-center tracking-[10px] text-[18px]"
//               />

//               {/* BUTTONS */}
//               <div className="grid grid-cols-2 gap-3 mt-6">

//                 {/* CANCEL */}
//                 <button
//                   onClick={() =>
//                     setShowOtpModal(false)
//                   }
//                   className="h-11 rounded-2xl border border-white/10 text-[12px] hover:bg-white/5 transition"
//                 >
//                   Cancel
//                 </button>

//                 {/* VERIFY */}
//                 <button
//                   className="h-11 rounded-2xl bg-white text-black text-[12px] font-semibold hover:opacity-90 transition"
//                 >
//                   Verify OTP
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// };

// export default SignupPage;









// import React, { useState } from "react";

// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//   Heart,
// } from "lucide-react";

// import { useDispatch } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import {
//   registerUser,
//   verifyUserOtp,
// } from "../features/auth/authSlice";

// const SignupPage = () => {

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   /* OTP MODAL STATE */
//   const [showOtpModal, setShowOtpModal] =
//     useState(false);

//   const [otp, setOtp] = useState("");

//   // FORM DATA
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     confirm_password: "",
//   });

//   // HANDLE CHANGE
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
//       alert("Passwords do not match");

//       return;
//     }

//     try {

//       await dispatch(
//         registerUser(formData)
//       );

//       // OTP MODAL OPEN
//       setShowOtpModal(true);

//     } catch (error) {

//       console.log(error);

//       alert("Something went wrong");
//     }
//   };

//   // VERIFY OTP
//   const handleVerifyOtp = async () => {

//     try {

//       await dispatch(
//         verifyUserOtp({
//           email: formData.email,
//           otp,
//         })
//       );

//       navigate("/home");

//     } catch (error) {

//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1050px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl"></div>

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

//                 <span className="text-[10px] text-gray-300 tracking-wide">
//                   AI POWERED SHOPPING
//                 </span>

//               </div>

//               {/* HEADING */}
//               <div className="mt-5">

//                 <h2 className="text-[36px] leading-[40px] font-light">
//                   Future Of
//                 </h2>

//                 <h2 className="text-[48px] leading-[50px] font-black mt-1">
//                   Fashion
//                 </h2>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[12px] text-gray-400 leading-6 mt-4 max-w-[340px]">
//                 Experience premium shopping with smart
//                 recommendations, fast delivery and secure
//                 payments powered by modern AI technology.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   10K+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Users
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   500+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Brands
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Support
//                 </p>

//               </div>

//             </div>

//             {/* FEATURES */}
//             <div className="grid grid-cols-2 gap-3 mt-7">

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Tag size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Smart Deals
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     AI discounts
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Truck size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Fast Shipping
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Worldwide
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Heart size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Favorites
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Personalized
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Shield size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Secure Pay
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Protected
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[400px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Create Account
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Fill your details to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form
//               onSubmit={handleSignup}
//               className="mt-5 space-y-3"
//             >

//               {/* NAME ROW */}
//               <div className="grid grid-cols-2 gap-3">

//                 {/* FIRST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     First Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       name="first_name"
//                       value={formData.first_name}
//                       onChange={handleChange}
//                       placeholder="First name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//                 {/* LAST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     Last Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       name="last_name"
//                       value={formData.last_name}
//                       onChange={handleChange}
//                       placeholder="Last name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

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

//               {/* PHONE */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Phone Number
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Phone size={14} className="text-gray-500" />

//                   <input
//                     type="text"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     placeholder="Enter your phone"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Create password"
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

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Confirm Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={
//                       showConfirmPassword
//                         ? "text"
//                         : "password"
//                     }
//                     name="confirm_password"
//                     value={formData.confirm_password}
//                     onChange={handleChange}
//                     placeholder="Confirm password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(
//                         !showConfirmPassword
//                       )
//                     }
//                   >
//                     {showConfirmPassword ? (
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
//                 className="w-full h-10 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition"
//               >
//                 Create Account
//               </button>

//             </form>

//           </div>
//         </div>

//       </div>

//       {/* OTP MODAL */}

//       {showOtpModal && (

//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

//           <div className="w-full max-w-[380px] bg-[#111111] border border-white/10 rounded-[28px] p-6 text-white relative overflow-hidden">

//             {/* GLOW */}
//             <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl"></div>

//             <div className="relative z-10">

//               {/* TITLE */}
//               <h2 className="text-[28px] font-black">
//                 Verify OTP
//               </h2>

//               <p className="text-[12px] text-gray-400 mt-2 leading-6">
//                 Enter the 6 digit verification code sent
//                 to your email address.
//               </p>

//               {/* OTP INPUT */}
//               <input
//                 type="text"
//                 maxLength={6}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full h-12 mt-6 bg-white/5 border border-white/10 rounded-2xl px-4 outline-none text-center tracking-[10px] text-[18px]"
//               />

//               {/* BUTTONS */}
//               <div className="grid grid-cols-2 gap-3 mt-6">

//                 {/* CANCEL */}
//                 <button
//                   onClick={() =>
//                     setShowOtpModal(false)
//                   }
//                   className="h-11 rounded-2xl border border-white/10 text-[12px] hover:bg-white/5 transition"
//                 >
//                   Cancel
//                 </button>

//                 {/* VERIFY */}
//                 <button
//                   onClick={handleVerifyOtp}
//                   className="h-11 rounded-2xl bg-white text-black text-[12px] font-semibold hover:opacity-90 transition"
//                 >
//                   Verify OTP
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// };

// export default SignupPage;




// import React, { useState } from "react";

// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   Tag,
//   Truck,
//   Shield,
//   Heart,
// } from "lucide-react";

// const SignupPage = () => {

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);

//   /* OTP MODAL STATE */
//   const [showOtpModal, setShowOtpModal] =
//     useState(false);

//   const [otp, setOtp] = useState("");

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-3 overflow-hidden">

//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-[1050px] bg-white rounded-[28px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative bg-black text-white px-7 py-5 overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl"></div>

//           <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl"></div>

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

//                 <span className="text-[10px] text-gray-300 tracking-wide">
//                   AI POWERED SHOPPING
//                 </span>

//               </div>

//               {/* HEADING */}
//               <div className="mt-5">

//                 <h2 className="text-[36px] leading-[40px] font-light">
//                   Future Of
//                 </h2>

//                 <h2 className="text-[48px] leading-[50px] font-black mt-1">
//                   Fashion
//                 </h2>

//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[12px] text-gray-400 leading-6 mt-4 max-w-[340px]">
//                 Experience premium shopping with smart
//                 recommendations, fast delivery and secure
//                 payments powered by modern AI technology.
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-3 mt-7">

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   10K+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Users
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   500+
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Brands
//                 </p>

//               </div>

//               {/* BOX */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">

//                 <h3 className="text-[22px] font-black">
//                   24/7
//                 </h3>

//                 <p className="text-[10px] text-gray-400 mt-1">
//                   Support
//                 </p>

//               </div>

//             </div>

//             {/* FEATURES */}
//             <div className="grid grid-cols-2 gap-3 mt-7">

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Tag size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Smart Deals
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     AI discounts
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Truck size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Fast Shipping
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Worldwide
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Heart size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Favorites
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Personalized
//                   </p>
//                 </div>

//               </div>

//               {/* CARD */}
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3">

//                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
//                   <Shield size={14} />
//                 </div>

//                 <div>
//                   <h3 className="text-[11px] font-semibold">
//                     Secure Pay
//                   </h3>

//                   <p className="text-[9px] text-gray-400 mt-1">
//                     Protected
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="bg-white flex items-center justify-center px-7 py-5">

//           <div className="w-full max-w-[400px]">

//             {/* TITLE */}
//             <h1 className="text-[30px] font-black text-black">
//               Create Account
//             </h1>

//             <p className="text-[12px] text-gray-500 mt-1">
//               Fill your details to continue with SHOP.CO
//             </p>

//             {/* FORM */}
//             <form className="mt-5 space-y-3">

//               {/* NAME ROW */}
//               <div className="grid grid-cols-2 gap-3">

//                 {/* FIRST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     First Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="First name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//                 {/* LAST */}
//                 <div>
//                   <label className="text-[11px] font-semibold">
//                     Last Name
//                   </label>

//                   <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                     <User size={14} className="text-gray-500" />

//                     <input
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full ml-2 outline-none text-[12px]"
//                     />

//                   </div>
//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Email Address
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Mail size={14} className="text-gray-500" />

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PHONE */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Phone Number
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Phone size={14} className="text-gray-500" />

//                   <input
//                     type="text"
//                     placeholder="Enter your phone"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                 </div>
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
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

//               {/* CONFIRM PASSWORD */}
//               <div>
//                 <label className="text-[11px] font-semibold">
//                   Confirm Password
//                 </label>

//                 <div className="mt-1 h-10 border border-gray-300 rounded-xl px-3 flex items-center">

//                   <Lock size={14} className="text-gray-500" />

//                   <input
//                     type={
//                       showConfirmPassword
//                         ? "text"
//                         : "password"
//                     }
//                     placeholder="Confirm password"
//                     className="w-full ml-2 outline-none text-[12px]"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowConfirmPassword(
//                         !showConfirmPassword
//                       )
//                     }
//                   >
//                     {showConfirmPassword ? (
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
//                 type="button"
//                 onClick={() => setShowOtpModal(true)}
//                 className="w-full h-10 bg-black text-white rounded-xl text-[12px] font-semibold hover:opacity-90 transition"
//               >
//                 Create Account
//               </button>

//             </form>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-4">

//               <div className="flex-1 h-[1px] bg-gray-200"></div>

//               <span className="text-[10px] text-gray-500">
//                 OR SIGN UP WITH
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
//             <p className="text-center text-[11px] text-gray-600 mt-4">

//               Already have an account?{" "}

//               <span className="font-semibold text-black underline cursor-pointer">
//                 Sign In
//               </span>

//             </p>

//           </div>
//         </div>

//       </div>

//       {/* ================= OTP MODAL ================= */}

//       {showOtpModal && (

//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

//           <div className="w-full max-w-[380px] bg-[#111111] border border-white/10 rounded-[28px] p-6 text-white relative overflow-hidden">

//             {/* GLOW */}
//             <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl"></div>

//             <div className="relative z-10">

//               {/* TITLE */}
//               <h2 className="text-[28px] font-black">
//                 Verify OTP
//               </h2>

//               <p className="text-[12px] text-gray-400 mt-2 leading-6">
//                 Enter the 6 digit verification code sent
//                 to your email address.
//               </p>

//               {/* OTP INPUT */}
//               <input
//                 type="text"
//                 maxLength={6}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full h-12 mt-6 bg-white/5 border border-white/10 rounded-2xl px-4 outline-none text-center tracking-[10px] text-[18px]"
//               />

//               {/* BUTTONS */}
//               <div className="grid grid-cols-2 gap-3 mt-6">

//                 {/* CANCEL */}
//                 <button
//                   onClick={() =>
//                     setShowOtpModal(false)
//                   }
//                   className="h-11 rounded-2xl border border-white/10 text-[12px] hover:bg-white/5 transition"
//                 >
//                   Cancel
//                 </button>

//                 {/* VERIFY */}
//                 <button
//                   className="h-11 rounded-2xl bg-white text-black text-[12px] font-semibold hover:opacity-90 transition"
//                 >
//                   Verify OTP
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// };

// export default SignupPage;
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return <SignupForm />;
};

export default Signup;