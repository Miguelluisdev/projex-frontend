type ButtonProps = {
  words: string
}

export const Buttons = ({ words }: ButtonProps) => {
  return (
    <button className="relative border py-2 px-8 rounded-lg font-medium inline-flex items-center tracking-tight align-center text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] transition-all duration-300" role="button">
      <div className="absolute inset-0 ">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span className="text-white">{words}</span>
    </button>
  )
}
