import FnLogo from "../Ui/FnLogo";

export default function LoginCard() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
            <div className="text-white ">
                <FnLogo/>
                <div className=" text-center mt-4" >
                    <h3 className="font-bold">Welcome Back</h3>
                    <span className="text-white/60">Sign in to continue your learning journey</span>
                </div>   
            </div>

      </div>
    </>
  )
}
