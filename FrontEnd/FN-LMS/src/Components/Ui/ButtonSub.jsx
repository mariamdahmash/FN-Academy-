

export default function ButtonSub({children,className="",type,...props}) {
  return (
    <>
        <button
        type={type}
        className={` px-5 py-3   ${className}`}
        {...props}
        >
            {children}
        </button>
    </>
  )
}
