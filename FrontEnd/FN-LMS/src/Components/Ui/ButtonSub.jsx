

export default function ButtonSub({children,className="",type,...props}) {
  return (
    <>
        <button
        type={type}
        className={` px-5 py-1 hover:cursor-pointer  ${className}`}
        {...props}
        >
            {children}
        </button>
    </>
  )
}
