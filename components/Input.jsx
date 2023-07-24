export function Input({ name, placeholder, children }) {
    const nameInLowerCase = name.toLowerCase();
    
    return (
        <div className="flex flex-col gap-2 pb-4">
            <label htmlFor={nameInLowerCase} className="font-semibold text-[10px] text-[#4F4F4F]">{ name }</label>
            <div className="relative w-full ">
                <figure className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[18px]">
                    { children }
                </figure>
                <input  name={ nameInLowerCase } className="w-full border-[1px] py-3 pl-[42px] rounded-xl focus:outline-none text-xs font-semibold text-[#828282]" placeholder={ placeholder }/>
            </div>
        </div>
    )
}
