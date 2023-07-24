export function Resume({title, price}) {
    return(
        <div className="flex justify-between border-t-[1px] border-t-[#BDBDBD] py-[10px]">
                <p className="font-semibold text-sm text-[#333333] ">{title}</p>
                <p>{price}</p>
        </div>
    )
}