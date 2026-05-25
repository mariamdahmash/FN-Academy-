

function Input({type,placeholder,className="",...props}) {
  return (
    <>
        <input
        type={type}
        data-slot="input"
        placeholder={placeholder}
        className={` border-input  w-full min-w-0 rounded-md border px-3 py-1   ${className}`}
        {...props}
        />
    </>
  )
}
export default Input