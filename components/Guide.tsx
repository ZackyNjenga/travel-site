import React from 'react'
import Image from "next/image";

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="border-2 border-red-500 padding-conatainer max-container w-full pb-32">
                <Image src="/camp.svg" alt="camp" width={50} height={50}/>
                <p className="uppercase regular-30 -mt-1 mb-3 text-green-50">
                    We exist for your excitement
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px"> Gyding you to the best places on Earth</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[1120px]">
                        You need a taste. A taste of what is awaiting for you out there.
                        From the people who are out there. Who have been out there. This is
                        a guide to the places you have heard of. Some you haven't heard of.
                        But with guide you are about to get there. Well virtually for now
                        but that is what we will do. Give you a taste and then let you choose
                        fro  the myriad of choices that we have. Sort of an outdoor places buffet.
                        Just dive in and you will see.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Guide
