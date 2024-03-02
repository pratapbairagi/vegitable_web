

const Contact = () => {
    return (
        <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16" >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Contact Us</h2>

            <div className="flex flex-col w-full mt-10 lg:mt-16 gap-y-10 lg:gap-y-16" >
                <form className="grid grid-cols-12 gap-y-8 px-5 gap-x-0 lg:gap-x-8 xl:gap-x-10">
                    <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7">
                        <img src="./images/contact_msg.png" className="h-full w-full opacity-80" alt="" />
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5 grid gird-cols-12 gap-y-2.5">
                        <fieldset className="flex flex-col">
                            <label htmlFor="name" className=" text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Full Name</label>
                            <input type="text" id="name" className="border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl md:text-base px-1  text-gray-400 font-nunito rounded" />
                        </fieldset>

                        <fieldset className="flex flex-col">
                            <label htmlFor="email" className=" text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Email</label>
                            <input type="text" id="email" className="border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl px-1 py-0.5 text-xs text-gray-400 font-nunito rounded" />
                        </fieldset>

                        <fieldset className="flex flex-col">
                            <label htmlFor="contact" className=" text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Contact No.</label>
                            <input type="tel" id="contact" className="border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl px-1 py-0.5 text-xs text-gray-400 font-nunito rounded" />
                        </fieldset>

                        <fieldset className="flex flex-col">
                            <label htmlFor="subject" className="text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Subject</label>
                            <input type="text" id="contact" className="border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl px-1 py-0.5 text-xs text-gray-400 font-nunito rounded" />
                        </fieldset>

                        <fieldset className="flex flex-col">
                            <label htmlFor="msg" className=" text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Message</label>
                            <textarea type="text" rows="6" id="contact" className="border outline-0 px-1 py-2.5 text-xs md:text-sm lg:text-base xl:text-xl text-gray-400 font-nunito rounded" > </textarea>
                        </fieldset>

                        <input type="submit" className="text-gray-100 bg-theme-blue-600 text-base mt-1.5 h-9 font-extrabold font-nunito w-32 pt-0.5 tracking-wide hover:bg-blue-500 cursor-pointer" value="SEND" />
                    </div>
                </form>

                <div className="flex flex-col w-full mt-10 ">
                    <div className="grid grid-cols-12 gap-y-8 px-5 gap-x-0 lg:gap-x-8 xl:gap-x-10">
                        <div className="order-1 lg:order-2 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7">
                            <img src="./images/contact_details.png" className="h-full w-full opacity-60" alt="" />
                        </div>
                        <div className="order-2 lg:order-1 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5 flex flex-col gap-y-4 md:gap-y-6 lg:justify-center">
                           
                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-300">Contact No.</span>
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-nunito text-gray-400">+91 8287889123</div>
                            </div>

                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-300">Email</span>
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-nunito text-gray-400">pratapbairagi@gmail.com</div>
                            </div>

                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-300">Address</span>
                                <div className="text-xl md:text-2xl lg:text-3xl font-semibold font-nunito text-gray-400">RZ-170/1A, Tughlakabad Extn. South Delhi, Delhi - 110019.</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Contact