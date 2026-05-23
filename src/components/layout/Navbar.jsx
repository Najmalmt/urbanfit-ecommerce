// import React from "react";

// import {
//     Search,
//     ChevronDown,
//     CircleUser,
//     ShoppingCart,
//     Menu,
// } from "lucide-react";

// export default function Navbar() {
//     return (
//         <header className="w-full bg-white border-b border-black/5">

//             {/* ================= MAIN CONTAINER ================= */}

//             <div
//                 className="
//                     max-w-[1280px]
//                     mx-auto
//                     h-[70px]
//                     lg:h-[78px]
//                     px-4
//                     sm:px-6
//                     lg:px-8
//                     flex
//                     items-center
//                     justify-between
//                     gap-4
//                 "
//             >

//                 {/* ================= LEFT SIDE ================= */}

//                 <div
//                     className="
//                         flex
//                         items-center
//                         gap-3
//                         xl:gap-8
//                         min-w-0
//                     "
//                 >

//                     {/* ================= MOBILE MENU ================= */}

//                     <button
//                         className="
//                             lg:hidden
//                             flex
//                             items-center
//                             justify-center
//                             w-10
//                             h-10
//                             rounded-full
//                             border
//                             border-black/10
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                             flex-shrink-0
//                         "
//                     >
//                         <Menu size={22} />
//                     </button>

//                     {/* ================= LOGO ================= */}

//                     <h1
//                         className="
//                             text-[22px]
//                             sm:text-[26px]
//                             md:text-[30px]
//                             xl:text-[37px]
//                             font-black
//                             uppercase
//                             italic
//                             tracking-[-1px]
//                             xl:tracking-[-2px]
//                             leading-none
//                             cursor-pointer
//                             skew-x-[-3deg]
//                             select-none
//                             whitespace-nowrap
//                             transition-all
//                             duration-300
//                             hover:scale-[1.02]
//                             flex-shrink-0
//                         "
//                     >

//                         {/* URBAN */}

//                         <span
//                             className="
//                                 text-black
//                                 [-webkit-text-stroke:1px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000]
//                             "
//                         >
//                             URBAN
//                         </span>

//                         {/* FIT */}

//                         <span
//                             className="
//                                 text-white
//                                 [-webkit-text-stroke:1px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000]
//                             "
//                         >
//                             FIT
//                         </span>
//                     </h1>

//                     {/* ================= NAV LINKS ================= */}

//                     <nav
//                         className="
//                             hidden
//                             lg:flex
//                             items-center
//                             gap-4
//                             xl:gap-7
//                             text-[12px]
//                             xl:text-[14px]
//                             font-medium
//                             whitespace-nowrap
//                         "
//                     >

//                         {/* SHOP */}

//                         <button
//                             className="
//                                 flex
//                                 items-center
//                                 gap-1
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             SHOP

//                             <ChevronDown
//                                 size={15}
//                                 strokeWidth={2.2}
//                             />
//                         </button>

//                         {/* ON SALE */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             ON SALE
//                         </button>

//                         {/* NEW ARRIVALS */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             NEW ARRIVALS
//                         </button>

//                         {/* BRANDS */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             BRANDS
//                         </button>

//                     </nav>
//                 </div>

//                 {/* ================= RIGHT SIDE ================= */}

//                 <div
//                     className="
//                         flex
//                         items-center
//                         gap-2
//                         lg:gap-3
//                         flex-shrink-0
//                     "
//                 >

//                     {/* ================= SEARCH BAR ================= */}

//                     <div
//                         className="
//                             hidden
//                             md:flex
//                             items-center
//                             gap-2
//                             w-[180px]
//                             lg:w-[240px]
//                             xl:w-[360px]
//                             h-[42px]
//                             rounded-full
//                             border
//                             border-black/10
//                             px-4
//                             bg-[#fafafa]
//                             transition-all
//                             duration-300
//                             focus-within:border-black/30
//                             focus-within:bg-white
//                         "
//                     >

//                         <Search
//                             size={17}
//                             className="text-black/40"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             className="
//                                 w-full
//                                 bg-transparent
//                                 outline-none
//                                 text-[13px]
//                                 placeholder:text-black/35
//                             "
//                         />
//                     </div>

//                     {/* ================= MOBILE SEARCH ================= */}

//                     <button
//                         className="
//                             md:hidden
//                             w-10
//                             h-10
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >
//                         <Search size={20} />
//                     </button>

//                     {/* ================= CART BUTTON ================= */}

//                     <button
//                         className="
//                             relative
//                             w-10
//                             h-10
//                             sm:w-[42px]
//                             sm:h-[42px]
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >

//                         <ShoppingCart
//                             size={20}
//                             strokeWidth={1.8}
//                         />

//                         {/* CART COUNT */}

//                         <div
//                             className="
//                                 absolute
//                                 -top-1.5
//                                 -right-1.5
//                                 w-5
//                                 h-5
//                                 rounded-full
//                                 bg-black
//                                 text-white
//                                 text-[10px]
//                                 font-semibold
//                                 flex
//                                 items-center
//                                 justify-center
//                                 border
//                                 border-white
//                             "
//                         >
//                             2
//                         </div>
//                     </button>

//                     {/* ================= USER BUTTON ================= */}

//                     <button
//                         className="
//                             w-10
//                             h-10
//                             sm:w-[42px]
//                             sm:h-[42px]
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >
//                         <CircleUser
//                             size={20}
//                             strokeWidth={1.8}
//                         />
//                     </button>

//                 </div>
//             </div>
//         </header>
//     );
// }




// import React from "react";

// import {
//     Search,
//     ChevronDown,
//     CircleUser,
//     ShoppingCart,
//     Menu,
// } from "lucide-react";

// export default function Navbar() {
//     return (
//         <header className="w-full bg-white border-b border-black/5">

//             {/* ================= MAIN CONTAINER ================= */}

//             <div
//                 className="
//                     max-w-[1280px]
//                     mx-auto
//                     h-[70px]
//                     lg:h-[78px]
//                     px-4
//                     sm:px-6
//                     lg:px-8
//                     flex
//                     items-center
//                     justify-between
//                     gap-4
//                 "
//             >

//                 {/* ================= LEFT SIDE ================= */}

//                 <div
//                     className="
//                         flex
//                         items-center
//                         gap-3
//                         xl:gap-8
//                         min-w-0
//                     "
//                 >

//                     {/* ================= MOBILE MENU ================= */}

//                     <button
//                         className="
//                             lg:hidden
//                             flex
//                             items-center
//                             justify-center
//                             w-9
//                             h-9
//                             sm:w-10
//                             sm:h-10
//                             rounded-full
//                             border
//                             border-black/10
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                             flex-shrink-0
//                         "
//                     >
//                         <Menu
//                             size={19}
//                             className="sm:size-[22px]"
//                         />
//                     </button>

//                     {/* ================= LOGO ================= */}

//                     <h1
//                         className="
//                             text-[22px]
//                             sm:text-[26px]
//                             md:text-[30px]
//                             xl:text-[37px]
//                             font-black
//                             uppercase
//                             italic
//                             tracking-[-1px]
//                             xl:tracking-[-2px]
//                             leading-none
//                             cursor-pointer
//                             skew-x-[-3deg]
//                             select-none
//                             whitespace-nowrap
//                             transition-all
//                             duration-300
//                             hover:scale-[1.02]
//                             flex-shrink-0
//                         "
//                     >

//                         {/* URBAN */}

//                         <span
//                             className="
//                                 text-black
//                                 [-webkit-text-stroke:1px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000]
//                             "
//                         >
//                             URBAN
//                         </span>

//                         {/* FIT */}

//                         <span
//                             className="
//                                 text-white
//                                 [-webkit-text-stroke:1px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000]
//                             "
//                         >
//                             FIT
//                         </span>
//                     </h1>

//                     {/* ================= NAV LINKS ================= */}

//                     <nav
//                         className="
//                             hidden
//                             lg:flex
//                             items-center
//                             gap-4
//                             xl:gap-7
//                             text-[12px]
//                             xl:text-[14px]
//                             font-medium
//                             whitespace-nowrap
//                         "
//                     >

//                         {/* SHOP */}

//                         <button
//                             className="
//                                 flex
//                                 items-center
//                                 gap-1
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             SHOP

//                             <ChevronDown
//                                 size={15}
//                                 strokeWidth={2.2}
//                             />
//                         </button>

//                         {/* ON SALE */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             ON SALE
//                         </button>

//                         {/* NEW ARRIVALS */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             NEW ARRIVALS
//                         </button>

//                         {/* BRANDS */}

//                         <button
//                             className="
//                                 hover:opacity-70
//                                 transition-all
//                                 duration-300
//                             "
//                         >
//                             BRANDS
//                         </button>

//                     </nav>
//                 </div>

//                 {/* ================= RIGHT SIDE ================= */}

//                 <div
//                     className="
//                         flex
//                         items-center
//                         gap-2
//                         lg:gap-3
//                         flex-shrink-0
//                     "
//                 >

//                     {/* ================= SEARCH BAR ================= */}

//                     <div
//                         className="
//                             hidden
//                             md:flex
//                             items-center
//                             gap-2
//                             w-[180px]
//                             lg:w-[240px]
//                             xl:w-[360px]
//                             h-[42px]
//                             rounded-full
//                             border
//                             border-black/10
//                             px-4
//                             bg-[#fafafa]
//                             transition-all
//                             duration-300
//                             focus-within:border-black/30
//                             focus-within:bg-white
//                         "
//                     >

//                         <Search
//                             size={17}
//                             className="text-black/40"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             className="
//                                 w-full
//                                 bg-transparent
//                                 outline-none
//                                 text-[13px]
//                                 placeholder:text-black/35
//                             "
//                         />
//                     </div>

//                     {/* ================= MOBILE SEARCH ================= */}

//                     <button
//                         className="
//                             md:hidden
//                             w-9
//                             h-9
//                             sm:w-10
//                             sm:h-10
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >
//                         <Search
//                             size={18}
//                             className="sm:size-[20px]"
//                         />
//                     </button>

//                     {/* ================= CART BUTTON ================= */}

//                     <button
//                         className="
//                             relative
//                             w-9
//                             h-9
//                             sm:w-[42px]
//                             sm:h-[42px]
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >

//                         <ShoppingCart
//                             size={18}
//                             className="sm:size-[20px]"
//                             strokeWidth={1.8}
//                         />

//                         {/* CART COUNT */}

//                         <div
//                             className="
//                                 absolute
//                                 -top-1.5
//                                 -right-1.5
//                                 w-4.5
//                                 h-4.5
//                                 sm:w-5
//                                 sm:h-5
//                                 rounded-full
//                                 bg-black
//                                 text-white
//                                 text-[9px]
//                                 sm:text-[10px]
//                                 font-semibold
//                                 flex
//                                 items-center
//                                 justify-center
//                                 border
//                                 border-white
//                             "
//                         >
//                             2
//                         </div>
//                     </button>

//                     {/* ================= USER BUTTON ================= */}

//                     <button
//                         className="
//                             w-9
//                             h-9
//                             sm:w-[42px]
//                             sm:h-[42px]
//                             rounded-full
//                             border
//                             border-black/15
//                             flex
//                             items-center
//                             justify-center
//                             hover:bg-black
//                             hover:text-white
//                             transition-all
//                             duration-300
//                         "
//                     >
//                         <CircleUser
//                             size={18}
//                             className="sm:size-[20px]"
//                             strokeWidth={1.8}
//                         />
//                     </button>

//                 </div>
//             </div>
//         </header>
//     );
// }

import React from "react";

import {
  Search,
  ChevronDown,
  CircleUser,
  ShoppingCart,
  Menu,
} from "lucide-react";

import Container from "../common/Container";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      
      {/* ================= MAIN CONTAINER ================= */}

      <Container
        className="
          h-[70px]
          lg:h-[78px]
          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <div
          className="
            flex
            items-center
            gap-3
            xl:gap-8
            min-w-0
          "
        >

          {/* ================= MOBILE MENU ================= */}

          <button
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              border-black/10
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
              flex-shrink-0
            "
          >
            <Menu
              size={19}
              className="sm:size-[22px]"
            />
          </button>

          {/* ================= LOGO ================= */}

          <h1
            className="
              text-[22px]
              sm:text-[26px]
              md:text-[30px]
              xl:text-[37px]
              font-black
              uppercase
              italic
              tracking-[-1px]
              xl:tracking-[-2px]
              leading-none
              cursor-pointer
              skew-x-[-3deg]
              select-none
              whitespace-nowrap
              transition-all
              duration-300
              hover:scale-[1.02]
              flex-shrink-0
            "
          >

            {/* URBAN */}

            <span
              className="
                text-black
                [-webkit-text-stroke:1px_black]
                [text-shadow:
                  1px_1px_0_#000,
                  2px_2px_0_#000]
              "
            >
              URBAN
            </span>

            {/* FIT */}

            <span
              className="
                text-white
                [-webkit-text-stroke:1px_black]
                [text-shadow:
                  1px_1px_0_#000,
                  2px_2px_0_#000]
              "
            >
              FIT
            </span>
          </h1>

          {/* ================= NAV LINKS ================= */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-4
              xl:gap-7
              text-[12px]
              xl:text-[14px]
              font-medium
              whitespace-nowrap
            "
          >

            {/* SHOP */}

            <button
              className="
                flex
                items-center
                gap-1
                hover:opacity-70
                transition-all
                duration-300
              "
            >
              SHOP

              <ChevronDown
                size={15}
                strokeWidth={2.2}
              />
            </button>

            {/* ON SALE */}

            <button
              className="
                hover:opacity-70
                transition-all
                duration-300
              "
            >
              ON SALE
            </button>

            {/* NEW ARRIVALS */}

            <button
              className="
                hover:opacity-70
                transition-all
                duration-300
              "
            >
              NEW ARRIVALS
            </button>

            {/* BRANDS */}

            <button
              className="
                hover:opacity-70
                transition-all
                duration-300
              "
            >
              BRANDS
            </button>

          </nav>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex
            items-center
            gap-2
            lg:gap-3
            flex-shrink-0
          "
        >

          {/* ================= SEARCH BAR ================= */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              w-[180px]
              lg:w-[240px]
              xl:w-[360px]
              h-[42px]
              rounded-full
              border
              border-black/10
              px-4
              bg-[#fafafa]
              transition-all
              duration-300
              focus-within:border-black/30
              focus-within:bg-white
            "
          >

            <Search
              size={17}
              className="text-black/40"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full
                bg-transparent
                outline-none
                text-[13px]
                placeholder:text-black/35
              "
            />
          </div>

          {/* ================= MOBILE SEARCH ================= */}

          <button
            className="
              md:hidden
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              border-black/15
              flex
              items-center
              justify-center
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
          >
            <Search
              size={18}
              className="sm:size-[20px]"
            />
          </button>

          {/* ================= CART BUTTON ================= */}

          <button
            className="
              relative
              w-9
              h-9
              sm:w-[42px]
              sm:h-[42px]
              rounded-full
              border
              border-black/15
              flex
              items-center
              justify-center
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
          >

            <ShoppingCart
              size={18}
              className="sm:size-[20px]"
              strokeWidth={1.8}
            />

            {/* CART COUNT */}

            <div
              className="
                absolute
                -top-1.5
                -right-1.5
                w-4.5
                h-4.5
                sm:w-5
                sm:h-5
                rounded-full
                bg-black
                text-white
                text-[9px]
                sm:text-[10px]
                font-semibold
                flex
                items-center
                justify-center
                border
                border-white
              "
            >
              2
            </div>
          </button>

          {/* ================= USER BUTTON ================= */}

          <button
            className="
              w-9
              h-9
              sm:w-[42px]
              sm:h-[42px]
              rounded-full
              border
              border-black/15
              flex
              items-center
              justify-center
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
          >
            <CircleUser
              size={18}
              className="sm:size-[20px]"
              strokeWidth={1.8}
            />
          </button>

        </div>
      </Container>
    </header>
  );
}