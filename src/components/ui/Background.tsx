export function PageBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <img
        src="/mancha.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* <img
        src="/logotipo_background.png"
        alt=""
        className="absolute right-[-8%] bottom-0 h-auto w-[28rem] max-w-[45%]"
      /> */}
    </div>
  )
}
