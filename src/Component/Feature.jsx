import { Feature_Card_Config, Feature_Config } from "../Utils/constant";


function Features() {
    return (
      <div className="w-full py-[2vw] px-[2vw]  text-center">
        <h2 className="font-bold text-[3vw]">Features</h2>
        <p className="font-semibold">Here's Few More Reasons To Use DM CockPit</p>
  
        <div className=" flex justify-center gap-[1.2vw] py-[1.4vw]">
          {
            Feature_Config.map((item,index) => (
              <div key={index} className={
                `border-[1px] w-fit  ${item.active ? "bg-[#301934] text-white" : "text-purple-900"} = font-semibold rounded-lg py-[1vw] px-[4vw]`
              }>{item.text}</div>
            ))
          }
        </div>
  
  
  
        <div className="feature-card flex items-center gap-[1.2vw]">
  
          {
            Feature_Card_Config.map((item, index) => {
              return <div key={index} className={`
                  logo ${index === 0 ? "border-[#301934]  bg-zinc-200" : ""}     rounded-md w-[16%] p-[1vw] 
                `}>
  
                <img className="w-full bg-red-600 h-[12vw]" src="https://as1.ftcdn.net/v2/jpg/00/80/32/52/1000_F_80325284_jp1LZUi06ug12hSi8OQJDPOPMduKTa62.jpg" alt="" />
  
  
                <h2 className="font-bold text-center  text-lg pt-[1.2vw] leading-none">{item}</h2>
  
  
              </div>
            })
          }
  
  
  
  
        </div>
  
      </div>
    )
  }

  export default Features; 