import OurProducts from "./OurProducts"
import OverviewProducts from "./OverviewProducts"


const Home = () => {
  return (
    <div className="">
    {/* <h1 className="lg:bg-red-500 md:bg-blue-500 sm:bg-green-500 max-sm:bg-yellow-500">Hello</h1> */}
        <div className=" relative">
        <div className="">
            <img src="/muscleshark/hero.jpg" alt="hero" className="md:w-full lg:h-[500px] lg:object-cover md:h-[350px] md:object-cover"  />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

            <div className="lg:flex md:flex">
                <div className=" absolute lg:top-18 md:top-6 sm:top-3 lg:text-left  md:text-left lg:p-2 sm:text-center lg:w-[44%] md:w-[44%] sm:left-4 left-6 max-sm:top-0 max-sm:text-center">
                    <button className="text-white bg-amber-500 lg:p-2 md:p-2 lg:text-lg sm:p-1 sm: text-sm max-sm:text-xs">Dive into Savings: Cyber Monday Exclusive!</button>
                    <h1 className=" text-white lg:text-6xl md:text-2xl sm:mt-3 max-sm:mt-1 lg:mt-10 font-bold max-sm:text-xl">Elevate Your Immunity, Ignite Your Energy!</h1>
                    <p className=" text-white mt-8 lg:text-xl md:text-lg sm:text-xs max-sm:hidden ">24g of pure protein for enhanced lean muscle.</p>
                    <button className=" bg-amber-500 p-2 mt-6 max-sm:mt-48 max-sm:p-1 max-sm:text-white">Shop Now</button>
                </div>
                <div className="absolute  lg:top-18 md:top-6 right-6 lg:w-[44%] sm:top-4 sm:w-96 max-sm:top-6 max-sm:left-[20%] max-sm:w-72">
                    <div className="p-5 mt-10">
                        <img src="/muscleshark/heroproduct.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <OverviewProducts />
        <OurProducts />
    </div>
  )
}

export default Home


