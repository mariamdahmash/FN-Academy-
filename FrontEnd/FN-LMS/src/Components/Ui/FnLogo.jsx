
export default function FnLogo({className=""}) {
  return (
    <>
        <div className="flex gap-1 items-center  ">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center rounded-xl">
                <span className="font-bold">FN</span>
            </div>
            <div className="flex items-center ">
                <span className={`font-semibold text-white ${className}`}>For New</span>
            </div>
        </div> 
    </>
  )
}
