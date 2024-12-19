


function MarqueeSecond(){
    return (
        <div className="w-full    py-[2vw] px-[2vw]  ">
      <div className="mx-auto w-[70%] text-center">
  
      <h2 className="font-bold text-[2vw]">DmCockPit Integrates with the  <br />  <span className="text-green-600">App You Use !</span> </h2>
          
      </div>

      <div className="w-full overflow-hidden">

<div className="flex gap-[1vw] w-full py-[2vw]">      {
        new Array(12).fill(0).map((item)=>{
          return (
            <div className="border-[1px] flex-shrink-0 w-fit flex items-center justify-between gap-[1.2vw] rounded-lg border-zinc-200 p-[1vw]">

        <img className="w-[4vw]" src="https://logodownload.org/wp-content/uploads/2019/08/google-adwords-logo-6.png" alt="" />

        <small className="font-semibold text-[1.4vw]  text-zinc-600">Google Ads</small>


      </div>
          )
        })
      }</div>


      </div>

    </div>
    )
}


export default MarqueeSecond;