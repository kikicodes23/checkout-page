'use client'
import Swal from 'sweetalert2'

import { MdEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { MdMarkunreadMailbox } from "react-icons/md";
import { Input } from "./Input";
import { useState } from "react";

export function Form() {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostalCode] = useState("")

    const [saveInformation, setSaveInformation] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()

        Swal.fire({
            title: "Information:",
            html: `<ul>
                    <li">
                        <p> <b>E-mail: </b> ${email}</p>
                    </li>

                    <li">
                        <p> <b>Phone: </b> ${phone}</p>
                    </li>

                    <li">
                        <p> <b>Full name: </b> ${fullName}</p>
                    </li>

                    <li">
                        <p> <b>Address: </b> ${address}</p>
                    </li>

                    <li">
                        <p> <b>City: </b> ${city}</p>
                    </li>

                    <li">
                        <p> <b>Country: </b> ${country}</p>
                    </li>

                    <li">
                        <p> <b>Postal code: </b> ${postalCode}</p>
                    </li>
                </ul>`,
            icon: "info"
        })

    }

    return (
        <form className="px-3 pt-[40px] md:pt-[50px] pb-[135px] max-w-[465px]" onSubmit={submitHandler}>

            <section>
                <h2 className="font-semibold text-sm text-[#333333] pb-3 md:text-lg">Contact information</h2>

                <Input placeholder="Enter your email..." name="E-mail" value={email} onChange={e => setEmail(e.target.value)} required={true}>
                    <MdEmail className="fill-[#828282]" />
                </Input>

                <Input placeholder="Enter your phone..." name="Phone" value={phone} onChange={e => setPhone(e.target.value)} required={true}>
                    <BiSolidPhone className="fill-[#828282]" />
                </Input>
            </section>

            <section>
                <h2 className="font-semibold text-sm text-[#333333] pb-3 pt-[29px] md:pt-[58px] md:text-lg">Shipping address</h2>

                <Input placeholder="Rodney Cotton" name="Full name" value={fullName} onChange={e => setFullName(e.target.value)} required={true}>
                    <BiSolidUserCircle className="fill-[#828282]" />
                </Input>

                <Input placeholder="Your address..." name="Address" value={address} onChange={e => setAddress(e.target.value)} required={true}>
                    <BiSolidHome className="fill-[#828282]" />
                </Input>

                <Input placeholder="Your city..." name="City" value={city} onChange={e => setCity(e.target.value)} required={true}>
                    <MdLocationCity className="fill-[#828282]" />
                </Input>

                <div className="flex gap-[23px]">
                    <Input placeholder="Your country..." name="Country" value={country} onChange={e => setCountry(e.target.value)} required={true}>
                        <MdLocationCity className="fill-[#828282]" />
                    </Input>

                    <Input placeholder="Your postal code.." name="Postal code" value={postalCode} onChange={e => setPostalCode(e.target.value)} required={true}>
                        <MdMarkunreadMailbox className="fill-[#828282]" />
                    </Input>
                </div>
            </section>

            <section className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 md:w-[21px] md:h-[21px] accent-[#F2994A]" checked={saveInformation} onChange={e => setSaveInformation(e.target.checked)} />
                <p className="font-semibold text-[10px] md:text-xs text-[#4F4F4F]">Save this information for next time</p>
            </section>

            <section className="flex justify-end">
                <button className="bg-[#F2994A] text-white font-semibold text-[16px] py-4 px-[45px] mt-[40px] rounded-xl hover:bg-[#f6ac6b] focus:bg-[#f58828]">Continue</button>
            </section>
        </form>
    );
}
