export function Input({ name, placeholder, value, onChange, children, required}) {
    const nameInLowerCase = name.toLowerCase();
    
    return (
        <div className="flex flex-col gap-2 pb-4">
            <label htmlFor={nameInLowerCase} className="font-semibold text-[10px] md:text-xs text-[#4F4F4F]">{ name }</label>
            <div className="relative w-full ">
                <figure className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[18px]">
                    { children }
                </figure>
                <input value={value} onChange={onChange} id={ nameInLowerCase } className="w-full border-[1px] py-3 pl-[42px] rounded-xl focus:outline-[#F2994A] focus:placeholder:text-[#4F4F4F] text-xs font-semibold text-[#828282] md:text-base" placeholder={ placeholder } required={required}/>
            </div>
        </div>
    )
}
