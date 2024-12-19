import { Feature_Config } from "../Utils/constant";



function PlanAndPricing() {

    return (
  
      <div className="w-full    py-[2vw]  text-center">
        <div className="mx-auto w-[60%]">
  
  
  
          <h2 className="font-bold text-[3.6vw]">Plan & Pricing</h2>
          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque debitis dignissimos, sunt impedit quae, itaque rerum laudantium minus nam nostrum consectetur deserunt placeat fuga dolorum
          </p>
  
          <h2 className="font-bold text-[3.6vw]">Are you an <span className="text-green-600"> Agency?</span> </h2>
  
          <div className="w-1/2 mt-[2vw]  border-[1px]  bg-gradient from-red-400 to-green-600 flex overflow-hidden mx-auto border-purple-900 rounded-full">
  
            <h2 className="w-1/2 h-full py-[1vw]  rounded-full  bg-purple-800 font-bold text-white">Agency</h2>
            <h2 className="w-1/2 h-full py-[1vw] font-bold text-black">Individual</h2>
  
  
  
          </div>
  
          <div className=" flex justify-center  gap-[1.2vw] py-[1.2vw]">
            {
              Feature_Config.map((item,index) => (
                <div key={index} className={
                  `border-[1px] w-fit  ${item.active ? "bg-[#301934] text-white" : "text-purple-900"} = font-semibold rounded-lg py-[1vw] px-[4vw]`
                }>{item.text}</div>
              ))
            }
          </div>
  
  
        </div>
  
  
        <div className="pricing-wrapper flex justify-between px-[2vw] py-[2vw]">
  
        {
          new Array(4).fill(0).map((item, index) => <PricingCard key ={index} />)
        }
        </div>
  
  
  
      </div>
  
    )
  }


  


function PricingCard() {
    return(
      <div className="p-[2vw] mx-[2vw] w-[25%] text-left  rounded-lg border-[1px] border-zinc-200"> 
      <h2 className="font-bold text-[2vw]">Free Digital</h2>
          <p className="text-sm text-zinc-600">
            For Professional Use
          </p>
  
          <div className="pt-[1.6vw]">
  
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> For Small Agencies</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> Agency Dashboard</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> Managae up to 50 Projects</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> Tracks 5,000 keywords</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> 5 Team Member</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> For Small Agencies</p>
            <p className="text-sm pb-[1vw]"><i class="ri-check-fill "></i> Competitor Analysis, On Page / Website Audit ,Backlink Checker and Mointor , Analytics & Reporting With more features </p>
  
          </div>
  
          <div className="w-full bg-[#301934] py-[0.8vw] rounded-lg text-center text-white font-semibold">
            Choose Plan
          </div>
      
      </div>
    )
  }

  export default PlanAndPricing;