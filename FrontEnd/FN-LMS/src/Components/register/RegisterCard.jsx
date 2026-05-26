import { Link } from "react-router-dom";
import ButtonSub from "../Ui/ButtonSub";
import FnLogo from "../Ui/FnLogo";
import Input from "../Ui/Input";

export default function RegisterCard() {
  return (
          <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
        <div className="my-6">
          <div className="flex justify-center">
            <FnLogo />
          </div>
          <div className=" text-center mt-4 text-white">
            <h3 className="font-bold">Create Account</h3>
            <span className="text-white/60">
              Start your learning journey today
            </span>
          </div>

          <div className="bg-white text-font my-4 p-8 rounded-xl shadow-2xl w-98">
            <form className="space-y-6">

              <div className="flex items-center justify-between gap-2">
                <div>
                <label className="block mb-2 text-gray-600">First Name</label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="First Name"
                  type="text"
                />
                </div>
                <div>
                <label className="block mb-2 text-gray-600">Last Name</label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="Last Name"
                  type="text"
                />
                </div>
              </div> 

              <div>
                <label className="block mb-2 text-gray-600">
                  Email Address
                </label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="">
                <label className="block mb-2 text-gray-600">Password</label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="***********"
                  type="password"
                />
              </div>

              <div className="">
                <label className="block mb-2 text-gray-600">Confirm Password</label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="***********"
                  type="password"
                />
              </div>

              <div className="">
                <label className="flex items-center gap-0.5">
                  <input type="checkbox" className="rounded bg-gray-600" />
                  <span className="text-sm">I agree to the <Link  className="text-secondary">Terms of Service</Link> and <Link className="text-secondary">Privacy Policy</Link> </span>
                </label>

              </div>
              <div className="text-center">
                <ButtonSub className="bg-primary text-white rounded-xl py-3 px-4 w-full hover:bg-hoverprim" type="button">
                    Create Account
                </ButtonSub>
              </div>
            </form>
          </div>
          
          <div className="flex justify-center my-2">
          <span className="text-white">Already have an account?<Link to="/login" className="text-accent"> Sign in </Link></span>
          </div>

        </div>
      </div>
  )
}
