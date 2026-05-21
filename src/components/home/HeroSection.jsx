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

            {/* ================= CIRCLE BACKGROUND ================= */}

            <div
                className="
                    absolute
                    top-0
                    right-[-120px]
                    w-[760px]
                    h-[760px]
                    rounded-full
                    border
                    border-black/[0.03]
                "
            />

            <div
                className="
                    absolute
                    top-[70px]
                    right-[100px]
                    w-[560px]
                    h-[560px]
                    rounded-full
                    border
                    border-black/[0.03]
                "
            />

            {/* ================= STARS ================= */}

            <div className="absolute top-[150px] left-[55%] text-[36px]">
                ✦
            </div>

            <div className="absolute bottom-[140px] left-[57%] text-[40px]">
                ✦
            </div>

            {/* ================= COLLECTION BADGE ================= */}

            <div
                className="
                    absolute
                    top-[90px]
                    right-[70px]
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

                    {/* OUTER CIRCLE */}

                    <circle
                        cx="100"
                        cy="94"
                        r="78"
                        fill="none"
                        stroke="#d4d4d8"
                        strokeWidth="1.5"
                    />

                    {/* TOP CURVE */}

                    <path
                        id="topCurve"
                        d="M50 100 A50 50 0 0 1 150 100"
                        fill="none"
                    />

                    {/* BOTTOM CURVE */}

                    <path
                        id="bottomCurve"
                        d="M50 100 A50 50 0 0 0 150 100"
                        fill="none"
                    />

                    {/* TOP TEXT */}

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

                    {/* CENTER STAR */}

                    <text
                        x="100"
                        y="113"
                        textAnchor="middle"
                        fontSize="52"
                        fill="black"
                    >
                        ✦
                    </text>

                    {/* BOTTOM TEXT */}

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

            {/* ================= MAIN CONTENT ================= */}

            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    min-h-[650px]
                    px-6
                    flex
                    items-center
                "
            >

                {/* ================= LEFT CONTENT ================= */}

                <div
                    className="
                        w-full
                        lg:w-[52%]
                        pt-10
                        pb-14
                        relative
                        z-10
                    "
                >

                    {/* TAG */}

                    <button
                        className="
                            border
                            border-black/20
                            rounded-full
                            px-6
                            py-2
                            text-[16px]
                            font-medium
                            mb-8
                            bg-white/70
                            backdrop-blur-sm
                        "
                    >
                        NEW SEASON
                    </button>

                    {/* HEADING */}

                    <h1
                        className="
                            text-[58px]
                            leading-[0.95]
                            font-black
                            tracking-[-2px]
                            max-w-[620px]
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
                            text-[18px]
                            leading-[1.6]
                            text-black/55
                            max-w-[580px]
                            font-normal
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
                            mt-10
                            bg-black
                            text-white
                            rounded-full
                            px-8
                            py-4
                            flex
                            items-center
                            gap-4
                            text-[16px]
                            font-medium
                            hover:scale-[1.02]
                            transition-all
                            duration-300
                            shadow-lg
                        "
                    >
                        SHOP NOW

                        <ArrowUpRight
                            size={20}
                            className="
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                                transition
                            "
                        />
                    </button>

                    {/* ================= STATS ================= */}

                    <div className="flex flex-wrap gap-3 mt-10">

                        {/* ITEM 1 */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                            "
                        >

                            <div
                                className="
                                    w-[44px]
                                    h-[44px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Globe
                                    size={20}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <h3 className="text-[18px] font-semibold leading-none">
                                    200+
                                </h3>

                                <p className="text-black/50 text-[12px] mt-1">
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
                                py-3
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                            "
                        >

                            <div
                                className="
                                    w-[44px]
                                    h-[44px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <BadgeCheck
                                    size={20}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <h3 className="text-[18px] font-semibold leading-none">
                                    2,000+
                                </h3>

                                <p className="text-black/50 text-[12px] mt-1">
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
                                py-3
                                rounded-2xl
                                border
                                border-black/10
                                bg-white
                            "
                        >

                            <div
                                className="
                                    w-[44px]
                                    h-[44px]
                                    rounded-xl
                                    bg-black
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <LuUsersRound
                                    size={20}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <h3 className="text-[18px] font-semibold leading-none">
                                    30,000+
                                </h3>

                                <p className="text-black/50 text-[12px] mt-1">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT IMAGE ================= */}

                <div
                    className="
                        hidden
                        lg:flex
                        absolute
                        right-0
                        bottom-0
                        w-[50%]
                        h-full
                        items-center
                        justify-center
                    "
                >

                    <img
                        src={heroImage}
                        alt="fashion-model"
                        className="h-[100%] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}