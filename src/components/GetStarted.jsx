import { arrowUp } from "../assets"
export default function GetStarted() {
  return (

    <button className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
        <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
            <div className='flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full'>
                <div className="relative">
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient text-start">
                        <span className="text-gradient">Get</span> <br />
                        <span className="text-gradient">Started</span>
                    </p>
                    <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain absolute top-0 right-2" />
                </div>
            </div>
        </div>
    </button>
  )
}
