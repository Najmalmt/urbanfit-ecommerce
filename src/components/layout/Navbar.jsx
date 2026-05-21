// import React from "react";

// import {
//     Search,
//     ChevronDown,
//     CircleUser,
//     ShoppingCart,
// } from "lucide-react";

// export default function Navbar() {
//     return (
//         <header className="w-full border-b border-black/5 bg-white">

//             <div
//                 className="
//                     max-w-[1280px]
//                     mx-auto
//                     h-[78px]
//                     px-6
//                     flex
//                     items-center
//                     justify-between
//                 "
//             >

//                 {/* LEFT SIDE */}

//                 <div className="flex items-center gap-10">

//                     {/* LOGO */}

//                     <h1
//                         className="
//                             text-[37px]
//                             font-black
//                             uppercase
//                             italic
//                             tracking-[-2px]
//                             leading-none
//                             cursor-pointer
//                             skew-x-[-3deg]
//                             select-none
//                         "
//                     >
//                         <span
//                             className="
//                                 text-black
//                                 [-webkit-text-stroke:1.2px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000,
//                                     3px_3px_0_#000]
//                             "
//                         >
//                             URBAN
//                         </span>

//                         <span
//                             className="
//                                 text-white
//                                 [-webkit-text-stroke:1.2px_black]
//                                 [text-shadow:
//                                     1px_1px_0_#000,
//                                     2px_2px_0_#000,
//                                     3px_3px_0_#000]
//                             "
//                         >
//                             FIT
//                         </span>
//                     </h1>

//                     {/* NAV LINKS */}

//                     <nav
//                         className="
//                             hidden
//                             lg:flex
//                             items-center
//                             gap-8
//                             text-[14px]
//                             font-medium
//                         "
//                     >

//                         <button
//                             className="
//                                 flex
//                                 items-center
//                                 gap-1.5
//                                 hover:opacity-70
//                                 transition
//                             "
//                         >
//                             SHOP

//                             <ChevronDown
//                                 size={16}
//                                 strokeWidth={2.2}
//                             />
//                         </button>

//                         <button className="hover:opacity-70 transition">
//                             ON SALE
//                         </button>

//                         <button className="hover:opacity-70 transition">
//                             NEW ARRIVALS
//                         </button>

//                         <button className="hover:opacity-70 transition">
//                             BRANDS
//                         </button>

//                     </nav>
//                 </div>

//                 {/* RIGHT SIDE */}

//                 <div className="flex items-center gap-4">

//                     {/* SEARCH */}

//                     <div
//                         className="
//                             hidden
//                             md:flex
//                             items-center
//                             gap-3
//                             w-[420px]
//                             h-[48px]
//                             rounded-full
//                             border
//                             border-black/10
//                             px-5
//                         "
//                     >

//                         <Search
//                             size={18}
//                             className="text-black/40"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Search for products..."
//                             className="
//                                 w-full
//                                 bg-transparent
//                                 outline-none
//                                 text-[14px]
//                                 placeholder:text-black/35
//                             "
//                         />
//                     </div>

//                     {/* CART */}

//                     <button
//                         className="
//                             relative
//                             w-[42px]
//                             h-[42px]
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
//                             size={22}
//                             strokeWidth={1.8}
//                         />

//                         <div
//                             className="
//                                 absolute
//                                 -top-2
//                                 -right-2
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

//                     {/* USER */}

//                     <button
//                         className="
//                             w-[42px]
//                             h-[42px]
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
//                             size={22}
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
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full bg-white border-b border-black/5">

            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    h-[78px]
                    px-6
                    flex
                    items-center
                    justify-between
                "
            >

                {/* ================= LEFT SIDE ================= */}

                <div className="flex items-center gap-10">

                    {/* ================= LOGO ================= */}

                    <h1
                        className="
                            text-[37px]
                            font-black
                            uppercase
                            italic
                            tracking-[-2px]
                            leading-none
                            cursor-pointer
                            skew-x-[-3deg]
                            select-none
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                        "
                    >

                        {/* URBAN */}

                        <span
                            className="
                                text-black
                                [-webkit-text-stroke:1.2px_black]
                                [text-shadow:
                                    1px_1px_0_#000,
                                    2px_2px_0_#000,
                                    3px_3px_0_#000]
                            "
                        >
                            URBAN
                        </span>

                        {/* FIT */}

                        <span
                            className="
                                text-white
                                [-webkit-text-stroke:1.2px_black]
                                [text-shadow:
                                    1px_1px_0_#000,
                                    2px_2px_0_#000,
                                    3px_3px_0_#000]
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
                            gap-8
                            text-[14px]
                            font-medium
                        "
                    >

                        {/* SHOP */}

                        <button
                            className="
                                flex
                                items-center
                                gap-1.5
                                hover:opacity-70
                                transition-all
                                duration-300
                            "
                        >
                            SHOP

                            <ChevronDown
                                size={16}
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

                <div className="flex items-center gap-4">

                    {/* ================= SEARCH BAR ================= */}

                    <div
                        className="
                            hidden
                            md:flex
                            items-center
                            gap-3
                            w-[420px]
                            h-[48px]
                            rounded-full
                            border
                            border-black/10
                            px-5
                            bg-[#fafafa]
                            transition-all
                            duration-300
                            focus-within:border-black/30
                            focus-within:bg-white
                        "
                    >

                        <Search
                            size={18}
                            className="text-black/40"
                        />

                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                text-[14px]
                                placeholder:text-black/35
                            "
                        />
                    </div>

                    {/* ================= CART BUTTON ================= */}

                    <button
                        className="
                            relative
                            w-[42px]
                            h-[42px]
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
                            size={22}
                            strokeWidth={1.8}
                        />

                        {/* CART COUNT */}

                        <div
                            className="
                                absolute
                                -top-2
                                -right-2
                                w-5
                                h-5
                                rounded-full
                                bg-black
                                text-white
                                text-[10px]
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
                            w-[42px]
                            h-[42px]
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
                            size={22}
                            strokeWidth={1.8}
                        />
                    </button>

                </div>
            </div>
        </header>
    );
}