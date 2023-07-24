import { Product } from "@/components/Product.jsx";
import { Resume } from "@/components/Resume.jsx";
import photo1 from "@/public/img/photo1.png"
import photo2 from "@/public/img/photo2.png"

export function ShoppingCart() {

    const shoppingCart = [
        { title: "Vintage Backbag", price: "$54.99", discount: "$94.99", image: photo1 },
        { title: "Levi Shoes", price: "$74.99", discount: "$124.99", image: photo2 }
    ]

    const resume = [
        { title: "Shipping", price: "$19" },
        { title: "Total", price: "$148.98" },
    ]

    return (
        <section className="mx-[13px] bg-[#F2F2F2] rounded-xl px-[18px] pt-[30px] pb-[6px] max-w-[383px]">
            {shoppingCart.map(({ title, price, discount, image }) => (
                <Product key={title} title={title} price={price} discount={discount} image={image} />
            ))}

            <div className="pt-[68px]">
                {resume.map(({ title, price }) => (
                    <Resume key={title} title={title} price={price} />
                ))}
            </div>

        </section>
    )
}