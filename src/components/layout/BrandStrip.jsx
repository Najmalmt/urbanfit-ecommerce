import React from "react";

export default function BrandStrip() {
    return (
        <div className="bg-black py-5">

            <div className="max-w-[1280px] mx-auto px-8">

                <div className="flex items-center justify-between text-white">

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
            </div>
        </div>
    );
}