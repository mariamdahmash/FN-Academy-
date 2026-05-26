import { Link } from "react-router-dom";
import ButtonSub from "../Ui/ButtonSub";
import FnLogo from "../Ui/FnLogo";

export default function Navbar() {
  return (
    <>
       <div className=" bg-white shadow-lg py-1 px-25 flex items-center justify-between ">
        <div className="w-30">
            <FnLogo className="text-black"/>
        </div>

        <div className="grid grid-cols-2 gap-2 text-gray-500">
            <span className="hover:text-primary hover:cursor-pointer">Home</span>
            <span className="hover:text-primary hover:cursor-pointer">Courses</span>
        </div>

        <div className="flex items-center gap-1">
            <Link to="/login">
                <ButtonSub className="text-primary rounded-xl py-2 hover:bg-gray-200">Login</ButtonSub>
            </Link>
            
            <Link to="/register">
            <ButtonSub className="bg-primary shadow-lg text-white rounded-xl py-2 hover:bg-hoverprim">
                Get Started
            </ButtonSub>
            </Link>
        </div>

       </div>
    </>
  )
}
