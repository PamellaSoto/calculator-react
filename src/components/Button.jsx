const Button = ({label, isBig, onClick, css}) => {
  return (
    <button className={`bg-[#fbeee4] font-semibold shadow-[0px_3px_2px_#f45d00] rounded-full  
      ${isBig ? "min-w-14 min-h-14 text-[18px]" : "min-w-14 min-h-5 text-[16px]"}
      hover:cursor-pointer hover:bg-[#fbeee4e0] 
      active:shadow-none active:translate-y-0.5 ${css} `} 
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
