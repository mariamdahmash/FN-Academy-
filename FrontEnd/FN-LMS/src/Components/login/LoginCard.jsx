import { Link } from "react-router-dom";
import ButtonSub from "../Ui/ButtonSub";
import FnLogo from "../Ui/FnLogo";
import Input from "../Ui/Input";

export default function LoginCard() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
        <div className="my-6">
          <div className="flex justify-center">
            <FnLogo />
          </div>
          <div className=" text-center mt-4 text-white">
            <h3 className="font-bold">Welcome Back</h3>
            <span className="text-white/60">
              Sign in to continue your learning journey
            </span>
          </div>

          <div className="bg-white text-font my-4 p-8 rounded-xl shadow-2xl w-98">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-500">
                  Email Address
                </label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="">
                <label className="block mb-2 text-gray-500">Password</label>
                <Input
                  className="border-gray-300 w-full px-2 py-2 rounded-xl selection:bg-primary selection:text-primary "
                  placeholder="***********"
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="rounded bg-gray-600" />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-secondary hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="text-center">
                <Link to="/">
                <ButtonSub className="bg-primary text-white rounded-xl py-3 px-4 w-full hover:bg-hoverprim" type="button">
                  Sign in
                </ButtonSub>
                </Link>
              </div>

            <div className="my-6 flex justify-between items-center gap-0.5 text-gray-500">
                
                  <div className="w-25 border-t"></div>
                  <span className=" ">Or sign in as</span>
                  <div className="w-25  border-t"></div>
            </div>


              <div className="grid grid-cols-3 gap-2 text-gray-700">
                <ButtonSub className="border-gray-400 border-2 rounded-2xl bg-transparent px-5 py-2 text-center hover:bg-gray-200">Admin</ButtonSub>
                <ButtonSub className="border-gray-400 border-2 rounded-2xl bg-transparent px-5 py-2 text-center hover:bg-gray-200">Student</ButtonSub>
                <ButtonSub className="border-gray-400 border-2 rounded-2xl bg-transparent px-5 py-2 text-center hover:bg-gray-200 ">Opration</ButtonSub>
              </div>
            </form>


          </div>
          
          <div className="flex justify-center my-2">
          <span className="text-white">  Don't have an account?<Link to="/register" className="text-accent"> Sign up </Link></span>
          </div>

        </div>
      </div>
    </>
  );
}
