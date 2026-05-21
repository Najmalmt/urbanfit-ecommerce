// import React from "react";

// import {
//     ArrowUpRight,
//     Globe,
//     BadgeCheck,
// } from "lucide-react";

// import { LuUsersRound } from "react-icons/lu";

// import heroImage from "../../assets/images/hero-img.png";

// export default function HeroSection() {
//     return (
//         <section className="relative overflow-hidden bg-[#f5f5f5]">

//             {/* ================= CIRCLE BACKGROUND ================= */}

//             <div
//                 className="
//                     absolute
//                     top-0
//                     right-[-120px]
//                     w-[760px]
//                     h-[760px]
//                     rounded-full
//                     border
//                     border-black/[0.03]
//                 "
//             />

//             <div
//                 className="
//                     absolute
//                     top-[70px]
//                     right-[100px]
//                     w-[560px]
//                     h-[560px]
//                     rounded-full
//                     border
//                     border-black/[0.03]
//                 "
//             />

//             {/* ================= STARS ================= */}

//             <div className="absolute top-[150px] left-[55%] text-[36px]">
//                 ✦
//             </div>

//             <div className="absolute bottom-[140px] left-[57%] text-[40px]">
//                 ✦
//             </div>

//             {/* ================= COLLECTION BADGE ================= */}

//             <div
//                 className="
//                     absolute
//                     top-[90px]
//                     right-[70px]
//                     hidden
//                     xl:flex
//                     items-center
//                     justify-center
//                     w-[130px]
//                     h-[130px]
//                     rotate-[-10deg]
//                 "
//             >

//                 <svg
//                     viewBox="0 0 200 200"
//                     className="w-full h-full"
//                 >

//                     {/* OUTER CIRCLE */}

//                     <circle
//                         cx="100"
//                         cy="94"
//                         r="78"
//                         fill="none"
//                         stroke="#d4d4d8"
//                         strokeWidth="1.5"
//                     />

//                     {/* TOP CURVE */}

//                     <path
//                         id="topCurve"
//                         d="M50 100 A50 50 0 0 1 150 100"
//                         fill="none"
//                     />

//                     {/* BOTTOM CURVE */}

//                     <path
//                         id="bottomCurve"
//                         d="M50 100 A50 50 0 0 0 150 100"
//                         fill="none"
//                     />

//                     {/* TOP TEXT */}

//                     <text
//                         fill="black"
//                         fontSize="14"
//                         fontWeight="600"
//                         letterSpacing="5"
//                     >
//                         <textPath
//                             href="#topCurve"
//                             startOffset="50%"
//                             textAnchor="middle"
//                         >
//                             NEW
//                         </textPath>
//                     </text>

//                     {/* CENTER STAR */}

//                     <text
//                         x="100"
//                         y="113"
//                         textAnchor="middle"
//                         fontSize="52"
//                         fill="black"
//                     >
//                         ✦
//                     </text>

//                     {/* BOTTOM TEXT */}

//                     <text
//                         fill="black"
//                         fontSize="14"
//                         fontWeight="600"
//                         letterSpacing="3"
//                     >
//                         <textPath
//                             href="#bottomCurve"
//                             startOffset="50%"
//                             textAnchor="middle"
//                         >
//                             COLLECTION
//                         </textPath>
//                     </text>
//                 </svg>
//             </div>

//             {/* ================= MAIN CONTENT ================= */}

//             <div
//                 className="
//                     max-w-[1280px]
//                     mx-auto
//                     min-h-[650px]
//                     px-6
//                     flex
//                     items-center
//                 "
//             >

//                 {/* ================= LEFT CONTENT ================= */}

//                 <div
//                     className="
//                         w-full
//                         lg:w-[52%]
//                         pt-10
//                         pb-14
//                         relative
//                         z-10
//                     "
//                 >

//                     {/* TAG */}

//                     <button
//                         className="
//                             border
//                             border-black/20
//                             rounded-full
//                             px-6
//                             py-2
//                             text-[16px]
//                             font-medium
//                             mb-8
//                             bg-white/70
//                             backdrop-blur-sm
//                         "
//                     >
//                         NEW SEASON
//                     </button>

//                     {/* HEADING */}

//                     <h1
//                         className="
//                             text-[58px]
//                             leading-[0.95]
//                             font-black
//                             tracking-[-2px]
//                             max-w-[620px]
//                         "
//                     >
//                         FIND CLOTHES

//                         <br />

//                         THAT{" "}

//                         <span
//                             className="
//                                 text-transparent
//                                 uppercase
//                                 tracking-[-2px]
//                                 font-black
//                                 inline-block
//                                 [-webkit-text-stroke:2px_black]
//                             "
//                         >
//                             MATCHES
//                         </span>

//                         <br />

//                         YOUR STYLE
//                     </h1>

//                     {/* DESCRIPTION */}

//                     <p
//                         className="
//                             mt-6
//                             text-[18px]
//                             leading-[1.6]
//                             text-black/55
//                             max-w-[580px]
//                             font-normal
//                         "
//                     >
//                         Browse through our diverse range of meticulously
//                         crafted garments, designed to bring out your
//                         individuality and match your personal style.
//                     </p>

//                     {/* BUTTON */}

//                     <button
//                         className="
//                             group
//                             mt-10
//                             bg-black
//                             text-white
//                             rounded-full
//                             px-8
//                             py-4
//                             flex
//                             items-center
//                             gap-4
//                             text-[16px]
//                             font-medium
//                             hover:scale-[1.02]
//                             transition-all
//                             duration-300
//                             shadow-lg
//                         "
//                     >
//                         SHOP NOW

//                         <ArrowUpRight
//                             size={20}
//                             className="
//                                 group-hover:translate-x-1
//                                 group-hover:-translate-y-1
//                                 transition
//                             "
//                         />
//                     </button>

//                     {/* ================= STATS ================= */}

//                     <div className="flex flex-wrap gap-3 mt-10">

//                         {/* ITEM 1 */}

//                         <div
//                             className="
//                                 flex
//                                 items-center
//                                 gap-3
//                                 px-4
//                                 py-3
//                                 rounded-2xl
//                                 border
//                                 border-black/10
//                                 bg-white
//                             "
//                         >

//                             <div
//                                 className="
//                                     w-[44px]
//                                     h-[44px]
//                                     rounded-xl
//                                     bg-black
//                                     text-white
//                                     flex
//                                     items-center
//                                     justify-center
//                                 "
//                             >
//                                 <Globe
//                                     size={20}
//                                     strokeWidth={1.8}
//                                 />
//                             </div>

//                             <div>
//                                 <h3 className="text-[18px] font-semibold leading-none">
//                                     200+
//                                 </h3>

//                                 <p className="text-black/50 text-[12px] mt-1">
//                                     International Brands
//                                 </p>
//                             </div>
//                         </div>

//                         {/* ITEM 2 */}

//                         <div
//                             className="
//                                 flex
//                                 items-center
//                                 gap-3
//                                 px-4
//                                 py-3
//                                 rounded-2xl
//                                 border
//                                 border-black/10
//                                 bg-white
//                             "
//                         >

//                             <div
//                                 className="
//                                     w-[44px]
//                                     h-[44px]
//                                     rounded-xl
//                                     bg-black
//                                     text-white
//                                     flex
//                                     items-center
//                                     justify-center
//                                 "
//                             >
//                                 <BadgeCheck
//                                     size={20}
//                                     strokeWidth={1.8}
//                                 />
//                             </div>

//                             <div>
//                                 <h3 className="text-[18px] font-semibold leading-none">
//                                     2,000+
//                                 </h3>

//                                 <p className="text-black/50 text-[12px] mt-1">
//                                     High-Quality Products
//                                 </p>
//                             </div>
//                         </div>

//                         {/* ITEM 3 */}

//                         <div
//                             className="
//                                 flex
//                                 items-center
//                                 gap-3
//                                 px-4
//                                 py-3
//                                 rounded-2xl
//                                 border
//                                 border-black/10
//                                 bg-white
//                             "
//                         >

//                             <div
//                                 className="
//                                     w-[44px]
//                                     h-[44px]
//                                     rounded-xl
//                                     bg-black
//                                     text-white
//                                     flex
//                                     items-center
//                                     justify-center
//                                 "
//                             >
//                                 <LuUsersRound
//                                     size={20}
//                                     strokeWidth={1.8}
//                                 />
//                             </div>

//                             <div>
//                                 <h3 className="text-[18px] font-semibold leading-none">
//                                     30,000+
//                                 </h3>

//                                 <p className="text-black/50 text-[12px] mt-1">
//                                     Happy Customers
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= RIGHT IMAGE ================= */}

//                 <div
//                     className="
//                         hidden
//                         lg:flex
//                         absolute
//                         right-0
//                         bottom-0
//                         w-[50%]
//                         h-full
//                         items-center
//                         justify-center
//                     "
//                 >

//                     <img
//                         src={heroImage}
//                         alt="fashion-model"
//                         className="h-[100%] object-contain"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from "react";

import {
    ArrowUpRight,
    Globe,
    BadgeCheck,
} from "lucide-react";

import { LuUsersRound } from "react-icons/lu";

import heroImage from "../../assets/images/hero-img.png";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#f5f5f5]">

            {/* ================= BACKGROUND CIRCLES ================= */}

            <div
                className="
                    absolute
                    top-[-120px]
                    right-[-220px]
                    w-[500px]
                    h-[500px]
                    md:w-[650px]
                    md:h-[650px]
                    lg:w-[760px]
                    lg:h-[760px]
                    rounded-full
                    border
                    border-black/[0.03]
                "
            />

            <div
                className="
                    absolute
                    top-[40px]
                    right-[-40px]
                    w-[350px]
                    h-[350px]
                    md:w-[500px]
                    md:h-[500px]
                    lg:w-[560px]
                    lg:h-[560px]
                    rounded-full
                    border
                    border-black/[0.03]
                "
            />

            {/* ================= STARS ================= */}

            <div
                className="
                    absolute
                    top-[120px]
                    right-[18%]
                    text-[24px]
                    md:text-[36px]
                "
            >
                ✦
            </div>

            <div
                className="
                    absolute
                    bottom-[160px]
                    right-[12%]
                    text-[28px]
                    md:text-[40px]
                "
            >
                ✦
            </div>

            {/* ================= COLLECTION BADGE ================= */}

            <div
                className="
                    absolute
                    top-[80px]
                    right-[40px]
                    hidden
                    xl:flex
                    items-center
                    justify-center
                    w-[130px]
                    h-[130px]
                    rotate-[-10deg]
                "
            >

                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                >

                    <circle
                        cx="100"
                        cy="94"
                        r="78"
                        fill="none"
                        stroke="#d4d4d8"
                        strokeWidth="1.5"
                    />

                    <path
                        id="topCurve"
                        d="M50 100 A50 50 0 0 1 150 100"
                        fill="none"
                    />

                    <path
                        id="bottomCurve"
                        d="M50 100 A50 50 0 0 0 150 100"
                        fill="none"
                    />

                    <text
                        fill="black"
                        fontSize="14"
                        fontWeight="600"
                        letterSpacing="5"
                    >
                        <textPath
                            href="#topCurve"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            NEW
                        </textPath>
                    </text>

                    <text
                        x="100"
                        y="113"
                        textAnchor="middle"
                        fontSize="52"
                        fill="black"
                    >
                        ✦
                    </text>

                    <text
                        fill="black"
                        fontSize="14"
                        fontWeight="600"
                        letterSpacing="3"
                    >
                        <textPath
                            href="#bottomCurve"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            COLLECTION
                        </textPath>
                    </text>

                </svg>
            </div>

            {/* ================= MAIN CONTAINER ================= */}

            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    px-5
                    sm:px-6
                    lg:px-8
                    min-h-[750px]
                    lg:min-h-[680px]
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-between
                    relative
                    z-10
                "
            >

                {/* ================= LEFT CONTENT ================= */}

                <div
                    className="
                        w-full
                        lg:w-[52%]
                        pt-14
                        md:pt-16
                        lg:pt-10
                        pb-10
                        lg:pb-14
                        text-center
                        lg:text-left
                    "
                >

                    {/* TAG */}

                    <button
                        className="
                            border
                            border-black/20
                            rounded-full
                            px-5
                            py-2
                            text-[14px]
                            md:text-[16px]
                            font-medium
                            bg-white/70
                            backdrop-blur-sm
                            mb-7
                        "
                    >
                        NEW SEASON
                    </button>

                    {/* HEADING */}

                    <h1
                        className="
                            text-[42px]
                            sm:text-[56px]
                            lg:text-[72px]
                            leading-[0.95]
                            font-black
                            tracking-[-2px]
                            max-w-[650px]
                            mx-auto
                            lg:mx-0
                        "
                    >
                        FIND CLOTHES

                        <br />

                        THAT{" "}

                        <span
                            className="
                                text-transparent
                                uppercase
                                tracking-[-2px]
                                font-black
                                inline-block
                                [-webkit-text-stroke:2px_black]
                            "
                        >
                            MATCHES
                        </span>

                        <br />

                        YOUR STYLE
                    </h1>

                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-6
                            text-[15px]
                            sm:text-[17px]
                            lg:text-[18px]
                            leading-[1.7]
                            text-black/55
                            max-w-[580px]
                            mx-auto
                            lg:mx-0
                        "
                    >
                        Browse through our diverse range of meticulously
                        crafted garments, designed to bring out your
                        individuality and match your personal style.
                    </p>

                    {/* BUTTON */}

                    <button
                        className="
                            group
                            mt-9
                            bg-black
                            text-white
                            rounded-full
                            px-8
                            py-4
                            flex
                            items-center
                            justify-center
                            gap-3
                            text-[15px]
                            md:text-[16px]
                            font-medium
                            hover:scale-[1.03]
                            transition-all
                            duration-300
                            shadow-lg
                            mx-auto
                            lg:mx-0
                        "
                    >
                        SHOP NOW

                        <ArrowUpRight
                            size={20}
                            className="
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        />
                    </button>

                    {/* ================= STATS ================= */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            gap-4
                            mt-10
                        "
                    >

                        {/* ITEM 1 */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                px-4
                                py-4
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                            "
                        >

                            <div
                                className="
                                    w-[46px]
                                    h-[46px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                            >
                                <Globe size={20} />
                            </div>

                            <div className="text-left">
                                <h3 className="text-[18px] font-semibold">
                                    200+
                                </h3>

                                <p className="text-black/50 text-[12px]">
                                    International Brands
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                px-4
                                py-4
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                            "
                        >

                            <div
                                className="
                                    w-[46px]
                                    h-[46px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                            >
                                <BadgeCheck size={20} />
                            </div>

                            <div className="text-left">
                                <h3 className="text-[18px] font-semibold">
                                    2,000+
                                </h3>

                                <p className="text-black/50 text-[12px]">
                                    High-Quality Products
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                px-4
                                py-4
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                                sm:col-span-2
                                lg:col-span-1
                            "
                        >

                            <div
                                className="
                                    w-[46px]
                                    h-[46px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                            >
                                <LuUsersRound size={20} />
                            </div>

                            <div className="text-left">
                                <h3 className="text-[18px] font-semibold">
                                    30,000+
                                </h3>

                                <p className="text-black/50 text-[12px]">
                                    Happy Customers
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= RIGHT IMAGE ================= */}

                <div
                    className="
                        w-full
                        lg:w-[48%]
                        flex
                        items-end
                        justify-center
                        relative
                        mt-6
                        lg:mt-0
                    "
                >

                    <img
                        src={heroImage}
                        alt="fashion-model"
                        className="
                            w-full
                            max-w-[300px]
                            sm:max-w-[420px]
                            md:max-w-[500px]
                            lg:max-w-[650px]
                            object-contain
                        "
                    />
                </div>
            </div>
        </section>
    );
}