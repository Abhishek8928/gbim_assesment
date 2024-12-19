

function Navbar() {
    return (
      <div className="w-full flex justify-between items-center  py-[1.2vw] px-[2vw]">
  
        <div className="nav-tp w-1/4">
          <h2 className="font-semibold text-[2vw]">Dm cockpit</h2>
        </div>
  
        <ul className="flex w-2/4 justify-end gap-[2vw] text-sm font-semibold">
  
          <li className="active text-green-600 border-b-[2px] border-green-600">Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Ai chatbot</li>
        </ul>
  
        <div className="gap-[1.4vw] w-1/2 justify-end flex items-center">
  
          <button className="font-semibold text-sm">Contact Us</button>
          <button className="bg-purple-900 text-sm font-semibold text-white px-[3vw] py-[0.6vw] rounded-full">Sign up</button>
          <button className="bg-green-500 text-sm font-semibold text-white px-[3vw] py-[0.6vw] rounded-full">Log In</button>
  
  
        </div>
  
      </div>
    )
  }


  export default Navbar;