export function Resume({title, price}) {
    return(
        <div className="flex justify-between border-t-[1px] border-t-[#BDBDBD] py-[10px]">
                <p className="font-semibold text-sm text-[#333333] md:text-lg">{title}</p>
                <p className="font-semibold text-sm text-[#333333] md:text-lg">{price}</p>
        </div>
    )
}