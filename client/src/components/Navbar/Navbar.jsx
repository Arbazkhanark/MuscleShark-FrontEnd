import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./nav.css"

const Navbar = () => {
    const [showShop,setShowShop]=useState(false);
  return (
    <div className="" style={{fontFamily:"inter"}}>
        <div className=" bg-slate-900 text-slate-200 text-center p-1 max-sm:hidden">
            <p>Get free delivery on orders over <span className=" text-white font-bold">$200</span> </p>
        </div>
        <div className="flex justify-between bg-yellow-400 align-middle p-3 md:p-1">
            <div className="flex align-middle">
                <h1 className="lg:block md:block md:text-2xl lg:font-extrabold lg:text-4xl lg:p-3 sm:hidden max-sm:hidden font-bold" style={{fontFamily:"cinzel"}}>MuscleShark</h1>
                <h1 className="lg:hidden md:hidden sm:block font-extrabold text-3xl" style={{fontFamily:"cinzel"}}>MS</h1>
                <div className="lg:ml-12 lg:text-lg lg:font-semibold mt-auto mb-auto md:text-sm md:font-medium sm:text-xs sm:font-normal">
                    <NavLink className="lg:ml-5 lg:mr-5 md:ml-2 md:mr-2 sm:hidden max-sm:hidden" to="/">Home</NavLink>
                    <NavLink className="lg:ml-5 lg:mr-5 md:ml-2 md:mr-2 sm:hidden max-sm:hidden" to={"/shop"} onClick={()=>showShop===false ? setShowShop(true): setShowShop(false)}>Shop</NavLink>
                    <NavLink className="lg:ml-5 lg:mr-5 md:ml-2 md:mr-2 sm:hidden max-sm:hidden" to={"/pages"}>Pages</NavLink>
                    <NavLink className="lg:ml-5 lg:mr-5 md:ml-2 md:mr-2 sm:hidden max-sm:hidden" to={"/contact"}>Contact</NavLink>
                </div>
            </div>

            <div className="flex items-center mr-9">
                <a className="md:hidden lg:block sm:hidden max-sm:hidden" href="#"><i className=" mr-4 text-xl fa-solid fa-magnifying-glass"></i></a>  
                <a className="md:hidden lg:block sm:hidden max-sm:hidden" href="">
                    <i className=" mr-4 text-xl fa-regular fa-user"></i>   
                </a>
                <a className="md:hidden lg:block sm:hidden max-sm:hidden" href="">
                    <i className=" mr-4 text-xl fa-regular fa-heart"></i>  
                </a>
                <a className="lg:block md:block" href="">
                    <i className="mr-4 text-xl fa-solid fa-bag-shopping"></i>     
                </a>
                <a className="lg:hidden md:bl
                 sm:block max-sm:block" href="">
                <i className="fa-solid fa-bars"></i>
                </a>
            </div>
        </div>
        {showShop && <div className=" flex absolute left-52">
            <div className=" bg-slate-800 p-5">
                <h2 className=" text-white">Power And Muscle</h2>

                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Whey Protein</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Multi component Protein</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Casein (night protein)</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Vegan</NavLink>
            </div>


            <div className=" bg-slate-800 p-5">
                <h2 className=" text-white">Creatine</h2>

                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>BCAA</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Hydrolysate/Pep</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Essential</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Glutamine</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Beta-alanine</NavLink>
            </div>


            <div className=" bg-slate-800 p-5">
                <h2 className=" text-white">Regeneration</h2>

                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Shakes/Powder</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Ready-to-drink</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Regeneration</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Supplements</NavLink>
            </div>


            <div className=" bg-slate-800 p-5">
                <h2 className=" text-white">Figure & Shape</h2>

                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Zero sports drinks</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Bars/Snacks</NavLink>
                <NavLink className="ml-5 mr-5 block text-slate-400" to={"/shop/protein"}>Drinks (ready to go)</NavLink>
            </div>
        </div> }

        <div className=" lg:block md:block md:p-1 sm:hidden  max-sm:hidden icons lg:p-5 lg: bg-slate-50">
            <div className=" lg:text-lg md:text-sm flex text-xl justify-between">
                <div className="flex items-center">
                <i className="fa-regular fa-credit-card"></i>
                    <p>Low price guarantee</p>    
                </div>
                <div className="flex items-center">
                    <i className="fa-solid fa-rotate-left"></i>
                    <p>30 day online returns</p>    
                </div>
                <div className="flex items-center">
                    <i className="fa-solid fa-truck"></i>
                    <p>Free delivery on Mass Product</p>
                </div>
                <div className="flex items-center">
                    <i className="fa-solid fa-phone"></i>    
                    <p>Ask our experts: <span className=" text-red-500">1-888-333-5226</span> </p>    
                </div>


            </div>
        </div>
    </div>
  )
}

export default Navbar



