// import React from "react";
// import { X } from "lucide-react";

// export default function TopOfferBar() {
//     return (
//         <div className="relative bg-black text-white py-2.5 px-4">

//             <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-3 text-[13px]">

//                 <span className="hidden md:block">✦</span>

//                 <p className="tracking-wide font-normal">
//                     SIGN UP & GET 20% OFF ON YOUR FIRST ORDER
//                 </p>

//                 <button
//                     className="
//                         border border-white/40
//                         rounded-full
//                         px-4 py-1
//                         text-[12px]
//                         font-medium
//                         hover:bg-white
//                         hover:text-black
//                         transition-all
//                         duration-300
//                     "
//                 >
//                     SIGN UP NOW
//                 </button>

//                 <span className="hidden md:block">✦</span>
//             </div>

//             <button
//                 className="
//                     absolute
//                     right-5
//                     top-1/2
//                     -translate-y-1/2
//                 "
//             >
//                 <X size={18} />
//             </button>
//         </div>
//     );
// }
import React from "react";
import { X } from "lucide-react";

export default function TopOfferBar() {
    return (
        <div
            className="
                relative
                bg-black
                text-white
                px-3
                py-3
            "
        >

            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    flex
                    items-center
                    justify-center
                    gap-2
                    pr-7
                "
            >

                {/* LEFT STAR */}

                <span
                    className="
                        hidden
                        sm:block
                        text-[12px]
                    "
                >
                    ✦
                </span>

                {/* OFFER TEXT */}

                <p
                    className="
                        text-[10px]
                        sm:text-[12px]
                        md:text-[13px]
                        text-center
                        leading-[1.5]
                        tracking-wide
                    "
                >
                    SIGN UP & GET 20% OFF ON YOUR FIRST ORDER
                </p>

                {/* SIGNUP BUTTON */}

                <button
                    className="
                        hidden
                        md:flex
                        items-center
                        justify-center
                        border
                        border-white/40
                        rounded-full
                        px-4
                        py-1
                        text-[11px]
                        font-medium
                        whitespace-nowrap
                        hover:bg-white
                        hover:text-black
                        transition-all
                        duration-300
                    "
                >
                    SIGN UP
                </button>

                {/* RIGHT STAR */}

                <span
                    className="
                        hidden
                        sm:block
                        text-[12px]
                    "
                >
                    ✦
                </span>
            </div>

            {/* CLOSE BUTTON */}

            <button
                className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    flex
                    items-center
                    justify-center
                    text-white/80
                    hover:text-white
                    transition
                "
            >
                <X size={16} />
            </button>
        </div>
    );
}