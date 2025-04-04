import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className=" bg-gray-500 bg-opacity-65 p-4 flex justify-between pt-14 pb-16 md:pt-20 md:pb-20">
            <div>
                <Link to="/"><img className="w-28 h-fit md:w-36 "
                src="../../image/Get Fit.png" alt="Logo"></img></Link>
            </div>
            <div className="flex gap-7 md:gap-11 items-center mr-6">
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/youtube.png" alt="youtube" /></a>
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/Instagram.png" alt="Instagram" /></a>
                <a href="#"><img className="w-10 h-fit md:w-12 " src="../../image/twitter.png" alt="twitter" /></a>
            </div>
        </footer>
     );
}
 
export default Footer;