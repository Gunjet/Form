import { IoIosArrowForward } from "react-icons/io";

export default function Card(){
    return(
      <div className='w-[480px] h-[655px] bg-white rounded-md flex justify-center relative'>
        <div className='w-[416px] h-[385px] flex-col justify-center mt-8'>
            <div className='w-[416px] h-[129px]'>
                <img src='/logo.png' className='w-[60px] h-[60px]'/>
                <p className='text-[26px] font-semibold'>Join Us! 😎</p>
                <p className='text-[18px] text-[#8E8E8E]'>Please provide all current information accurately.</p>
            </div>
            <div className='w-[416px] h-[228px] b my-[25px] flex flex-col justify-between'>
                <div className='w-[416px] h-[68px] '>
                    <p className='font-semibold my-[2px]'>First name *</p>
                    <input className='w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2' placeholder='Enter your first name'></input>
                </div>
                <div className='w-[416px] h-[68px]'>
                   <p className='font-semibold my-[2px]'>Last name *</p>
                   <input className='w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2' placeholder='Enter your last name'></input>
                </div>
                <div className='w-[416px] h-[68px] my-[2px]'>
                   <p className='font-semibold'>Username *</p>
                   <input className='w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2' placeholder='Enter your username'></input>
                </div>
            </div>
        </div>
        <button className='w-[416px] h-[44px] bg-[#D6D8DB] absolute rounded-md my-[580px] text-[#A9ACAF] '>
            Continue 1/3
            {/* <IoIosArrowForward /> */}
        </button>
      </div>
    )
}