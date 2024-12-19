

import React from 'react'

const CTA = () => {
  return (
    <div className="w-full p-[2vw]">

      <div className="bg-[#301934] flex items-center w-full rounded-lg">

        <div className="w-1/3">

        <img className="w-full" src="https://imgs.search.brave.com/ONvSIxVKtAI_sNbEA2HnUy95tCStF8diczWrPuzeCOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9MYXB0b3AtUE5H/LnBuZw" alt="" />
        
        </div>

        <div className="2/3">

        <small className="text-sm text-zinc-400 ">SIGN UP NOW</small>

        <h1 className="text-[2.8vw] font-bold text-white">GET <span className="text-green-600">30 DAYS</span> FREE TRIAL</h1>
        <p className="text-[1.8vw] text-zinc-400 ">For Agencies</p>

        <button className="py-[0.6vw] text-sm border-[1px] border-zinc-200 text-white bg-[#301934] mt-[1.2vw] px-[2.8vw] font-semibold  rounded-full">Sign Up Now</button>
        
        </div>

      </div>

    </div>
  )
}

export default CTA