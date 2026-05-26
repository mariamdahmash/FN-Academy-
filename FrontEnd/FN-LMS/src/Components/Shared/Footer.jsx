import FnLogo from "../Ui/FnLogo";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary px-25 py-2">
        <div className=" grid grid-cols-2 gap-2 items-center justify-between py-6">
        <div className="w-70">
          <FnLogo className="text-white" />
          <p className="mt-2 text-gray-200 text-sm ">
            Empowering learners worldwide with quality education.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="text-white">
            <span className="font-semibold ">Platform</span>
            <ul  className="text-gray-200  text-sm mt-4 ">
                <li className="hover:text-white">Courses</li>
                <li className="hover:text-white">Signin</li>
                <li className="hover:text-white">Register</li>
            </ul>
          </div>

          <div className="text-white">
            <span className="font-semibold mb-2">Support</span>
            <ul  className="text-gray-200  text-sm mt-4">
                <li className="hover:text-white">Help Center</li>
                <li className="hover:text-white">Contact Us</li>
                <li className="hover:text-white">FAQ</li>
            </ul>
          </div>

          <div className="text-white">
            <span className="font-semibold mb-2">Legal</span>
            <ul className="text-gray-200  text-sm mt-4">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms of Service</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="border-b-1 border-gray-600 w-full"></div>
        <div className="py-4 text-center">
            <span className="text-gray-200">© 2026 FOR NEW. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
