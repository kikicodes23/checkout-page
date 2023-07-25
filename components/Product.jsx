"use client";

import React from "react";

export function  Product({title, price, discount, image}) {

    const [counter, setCounter] = React.useState(1);

    return(
        <section className="flex gap-[19px] pb-[19px]">
            <div className="w-[123px] h-[123px] md:w-[134px] md:h[136px]">
                <img src={image.src} alt="product image" className="rounded-[13px] w-full h-full object-cover"/> 
            </div>

            <section className="flex flex-col justify-start">
                <p className="font-semibold text-xs text-[#4E5150] md:text-base">{title}</p>

                <div className="flex items-center gap-4 pt-2">
                    <p className="font-semibold text-sm text-[#F2994A] md:text-base">{`$${(price * counter).toFixed(2)}`}</p>
                    <p className="font-semibold text-[10px] text-[#4E5150] line-through md:text-xs">{`$${(discount * counter).toFixed(2)}`}</p>
                </div>

                <div className="w-[123px] h-[50px] border-[1px] rounded-xl flex justify-around items-center mt-[24px]">
                    <button 
                    onClick={() => setCounter( counter - 1)}
                    className="w-[23px] h-[23px] bg-[#E0E0E0] text-[#828282] rounded-[4px]">-</button>

                    <p className="font-semibold text-[16px] text-[#333333]">{counter}</p>

                    <button 
                    onClick={() => setCounter( counter + 1 )}
                    className="w-[23px] h-[23px] bg-[#E0E0E0] text-[#828282] rounded-[4px]">+</button>
                </div>
            </section>
        </section>
    )
}