import { MdEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { MdMarkunreadMailbox } from "react-icons/md";
import { Input } from "./Input";

export function Form() {
    return (
        <form className="px-3 pt-[40px] pb-[135px] max-w-[465px]">

            <section>
                <h2 className="font-semibold text-sm text-[#333333] pb-3">Contact information</h2>

                <Input placeholder="Enter your email..." name="E-mail">
                    <MdEmail className="fill-[#828282]"/>
                </Input>

                <Input placeholder="Enter your phonr..." name="Phone">
                    <BiSolidPhone className="fill-[#828282]"/>
                </Input>
            </section>

            <section>
                <h2 className="font-semibold text-sm text-[#333333] pb-3 pt-[29px]">Shipping address</h2>

                <Input placeholder="Rodney Cotton" name="Full name">
                    <BiSolidUserCircle className="fill-[#828282]"/>
                </Input>

                <Input placeholder="Your address.." name="Address">
                    <BiSolidHome className="fill-[#828282]"/>
                </Input>

                <Input placeholder="Your city.." name="City">
                    <MdLocationCity className="fill-[#828282]"/>
                </Input>

                <div className="flex gap-[23px]">
                    <Input placeholder="Your country.." name="Country">
                        <MdLocationCity className="fill-[#828282]"/>
                    </Input>

                    <Input placeholder="Your postal code.." name="Postal code">
                    <MdMarkunreadMailbox className="fill-[#828282]"/>
                </Input>
                </div>
            </section>

            <section className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4"/>
                <p className="font-semibold text-[10px] text-[#4F4F4F]">Save this information for next time</p>
            </section>

            <section className="flex justify-end">
                <button className="bg-[#F2994A] text-white font-semibold text-[16px] py-4 px-[45px] mt-[40px] rounded-xl">Continue</button>
            </section>
        </form>
    );
}
