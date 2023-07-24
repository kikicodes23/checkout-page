import { Form } from "@/components/Form"
import { Header } from "@/components/Header.jsx"
import { ShoppingCart } from "@/components/ShoppingCart.jsx"

export default function Home() {



  return (
    <main>
      <Header />

      <article className="sm:flex sm:flex-col items-center lg:flex-row-reverse lg:justify-around lg:items-start xl:justify-between xl:px-[240px]">
        <ShoppingCart />

        <Form />
      </article>
    </main>
  )
}
