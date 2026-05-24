// import React from "react";

// export default function BrandStrip() {
//     return (
//         <div className="bg-black py-5">

//             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* ================= MOBILE ================= */}

//                 <div className="flex flex-col gap-4 text-white sm:hidden">

//                     {/* FIRST ROW */}

//                     <div className="flex items-center justify-between">

//                         {/* VERSACE */}

//                         <h2
//                             className="uppercase leading-none"
//                             style={{
//                                 fontFamily: "'Satoshi', serif",
//                                 fontSize: "20px",
//                                 fontWeight: "400",
//                                 letterSpacing: "-0.5px",
//                             }}
//                         >
//                             VERSACE
//                         </h2>

//                         {/* LINE */}

//                         <div className="w-px h-5 bg-white/20" />

//                         {/* ZARA */}

//                         <h2
//                             className="uppercase leading-none"
//                             style={{
//                                 fontFamily: "'Didot', serif",
//                                 fontSize: "20px",
//                                 fontWeight: "500",
//                                 letterSpacing: "-2px",
//                                 transform: "translateY(-2px)",
//                             }}
//                         >
//                             ZARA
//                         </h2>

//                         {/* LINE */}

//                         <div className="w-px h-5 bg-white/20" />

//                         {/* GUCCI */}

//                         <h2
//                             className="uppercase leading-none"
//                             style={{
//                                 fontFamily: "'Cormorant Garamond', serif",
//                                 fontSize: "20px",
//                                 fontWeight: "500",
//                                 letterSpacing: "1px",
//                             }}
//                         >
//                             GUCCI
//                         </h2>
//                     </div>

//                     {/* SECOND ROW */}

//                     <div className="flex items-center justify-center gap-5">

//                         {/* PRADA */}

//                         <h2
//                             className="uppercase leading-none"
//                             style={{
//                                 fontFamily: "'Bodoni Moda', serif",
//                                 fontSize: "22px",
//                                 fontWeight: "700",
//                                 letterSpacing: "4px",
//                             }}
//                         >
//                             PRADA
//                         </h2>

//                         {/* LINE */}

//                         <div className="w-px h-5 bg-white/20" />

//                         {/* CALVIN KLEIN */}

//                         <h2
//                             className="leading-none"
//                             style={{
//                                 fontFamily: "'Satoshi', sans-serif",
//                                 fontSize: "20px",
//                                 fontWeight: "200",
//                                 letterSpacing: "-1px",
//                             }}
//                         >
//                             Calvin Klein
//                         </h2>
//                     </div>
//                 </div>

//                 {/* ================= DESKTOP ================= */}

//                 <div
//                     className="
//                         hidden
//                         sm:flex
//                         items-center
//                         justify-between
//                         text-white
//                     "
//                 >

//                     {/* VERSACE */}

//                     <h2
//                         className="uppercase leading-none"
//                         style={{
//                             fontFamily: "'Satoshi', serif",
//                             fontSize: "28px",
//                             fontWeight: "400",
//                             letterSpacing: "-0.5px",
//                         }}
//                     >
//                         VERSACE
//                     </h2>

//                     <div className="w-px h-8 bg-white/20" />

//                     {/* ZARA */}

//                     <h2
//                         className="uppercase leading-none"
//                         style={{
//                             fontFamily: "'Didot', serif",
//                             fontSize: "28px",
//                             fontWeight: "500",
//                             letterSpacing: "-3px",
//                             transform: "translateY(-2px)",
//                         }}
//                     >
//                         ZARA
//                     </h2>

//                     <div className="w-px h-8 bg-white/20" />

//                     {/* GUCCI */}

//                     <h2
//                         className="uppercase leading-none"
//                         style={{
//                             fontFamily: "'Cormorant Garamond', serif",
//                             fontSize: "28px",
//                             fontWeight: "500",
//                             letterSpacing: "1px",
//                         }}
//                     >
//                         GUCCI
//                     </h2>

//                     <div className="w-px h-8 bg-white/20" />

//                     {/* PRADA */}

//                     <h2
//                         className="uppercase leading-none"
//                         style={{
//                             fontFamily: "'Bodoni Moda', serif",
//                             fontSize: "28px",
//                             fontWeight: "700",
//                             letterSpacing: "5px",
//                         }}
//                     >
//                         PRADA
//                     </h2>

//                     <div className="w-px h-8 bg-white/20" />

//                     {/* CALVIN KLEIN */}

//                     <h2
//                         className="leading-none"
//                         style={{
//                             fontFamily: "'Satoshi', sans-serif",
//                             fontSize: "28px",
//                             fontWeight: "200",
//                             letterSpacing: "-1px",
//                         }}
//                     >
//                         Calvin Klein
//                     </h2>

//                 </div>
//             </div>
//         </div>
//     );
// }
import React from "react";
import Container from "../common/Container";

export default function BrandStrip() {
  return (
    <div className="bg-black py-5">

      <Container>

        {/* ================= MOBILE ================= */}

        <div className="flex flex-col gap-4 text-white sm:hidden">

          {/* FIRST ROW */}

          <div className="flex items-center justify-between">

            {/* VERSACE */}

            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "'Satoshi', serif",
                fontSize: "20px",
                fontWeight: "400",
                letterSpacing: "-0.5px",
              }}
            >
              VERSACE
            </h2>

            {/* LINE */}

            <div className="w-px h-5 bg-white/20" />

            {/* ZARA */}

            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "'Didot', serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "-2px",
                transform: "translateY(-2px)",
              }}
            >
              ZARA
            </h2>

            {/* LINE */}

            <div className="w-px h-5 bg-white/20" />

            {/* GUCCI */}

            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              GUCCI
            </h2>
          </div>

          {/* SECOND ROW */}

          <div className="flex items-center justify-center gap-5">

            {/* PRADA */}

            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "4px",
              }}
            >
              PRADA
            </h2>

            {/* LINE */}

            <div className="w-px h-5 bg-white/20" />

            {/* CALVIN KLEIN */}

            <h2
              className="leading-none"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "20px",
                fontWeight: "200",
                letterSpacing: "-1px",
              }}
            >
              Calvin Klein
            </h2>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}

        <div
          className="
            hidden
            sm:flex
            items-center
            justify-between
            text-white
          "
        >

          {/* VERSACE */}

          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "'Satoshi', serif",
              fontSize: "28px",
              fontWeight: "400",
              letterSpacing: "-0.5px",
            }}
          >
            VERSACE
          </h2>

          <div className="w-px h-8 bg-white/20" />

          {/* ZARA */}

          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "'Didot', serif",
              fontSize: "28px",
              fontWeight: "500",
              letterSpacing: "-3px",
              transform: "translateY(-2px)",
            }}
          >
            ZARA
          </h2>

          <div className="w-px h-8 bg-white/20" />

          {/* GUCCI */}

          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            GUCCI
          </h2>

          <div className="w-px h-8 bg-white/20" />

          {/* PRADA */}

          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "28px",
              fontWeight: "700",
              letterSpacing: "5px",
            }}
          >
            PRADA
          </h2>

          <div className="w-px h-8 bg-white/20" />

          {/* CALVIN KLEIN */}

          <h2
            className="leading-none"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "28px",
              fontWeight: "200",
              letterSpacing: "-1px",
            }}
          >
            Calvin Klein
          </h2>

        </div>
      </Container>
    </div>
  );
}