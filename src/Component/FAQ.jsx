function Accordion(){
    return (
      <div className="w-full border-b flex justify-between items-center py-[1.6vw] text-left">
  
        <p className="font-semibold text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <i class="ri-arrow-down-s-line"></i>
      </div>
    )
  }

function FAQ(){
    return (
      <div className="w-full    py-[2vw] px-[2vw]  ">
      <div className="mx-auto w-[70%] text-center">
  
      <h2 className="font-bold text-[2vw]">Frequently Asked Question</h2>
          <p className="text-sm">Ask Us Anything
          </p>
      </div>
  
      <div  className="flex justify-between">
      <div className="w-[50%] px-[6vw] py-[2vw] text-left">
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          </div>
  
          <div className="w-[50%] px-[6vw] py-[2vw] text-left">
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          </div>
      </div>
  
      </div>
    )
  }
  

  
  export default FAQ;