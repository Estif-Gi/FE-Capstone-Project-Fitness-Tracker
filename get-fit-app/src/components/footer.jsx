import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className=" bg-gray-500 bg-opacity-65 p-4 pt-10 pb-16 md:pt-20 md:pb-16">
            <div className="flex justify-between item-center md:gap-11 items-center mr-6 ">
                <Link to="/"><img className="w-28 h-fit md:w-36 "
                src="../../image/Get Fit.png" alt="Logo"></img></Link>
            <div className="flex gap-7 justify-self-end item-center md:gap-11 items-center mr-6">
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/youtube.png" alt="youtube" /></a>
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/Instagram.png" alt="Instagram" /></a>
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/twitter.png" alt="twitter" /></a>
            </div>
            </div>
            <p className=" text-center flex self-end translate-y-16  justify-self-center text-orange-50 text-sm text-opacity-40 ">Copyright © 2025 Get Fit</p>
        </footer>
     );
}
 
export default Footer;