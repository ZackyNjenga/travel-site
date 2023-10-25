import React from 'react'
import Image from "next/image";

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-32">
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
                        fro the myriad of choices that we have. Sort of an outdoor places buffet.
                        Just dive in and you will see.
                    </p>
                </div>
            </div>
            <div className="flexCenter max-container relative w-full">
                <Image src="/boat.png" alt="rafting"
                       width={1440}
                       height={580}
                       className="w-full object-cover object-center 2xl:rounded-5xl"
                />
                <div className="absolute bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border
                shadow-md md:left-[5%] lg:top-20">
                    <Image
                        src="/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                        className="h-full w-auto"
                    />
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 textgray-20"> Destination</p>
                                <p className="bold-16 text-green-50"> 58 mins</p>
                            </div>
                            <p className="bold-20 mt-2">Sagana Rapids</p>
                        </div>

                        <div className="flex w-full flex-col">

                            <p className="bold-16 text-green-50"> Get rafting</p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">Sagana Rapids Camp</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Guide
