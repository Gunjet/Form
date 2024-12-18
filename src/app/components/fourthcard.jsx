export function FourthCard({Next, Back}){
    return(
      <div className='w-[480px] h-[193px] bg-white rounded-md flex justify-center relative'>
        <div className='w-[416px] h-[465px] justify-center mt-8'>
            <div className='w-[416px] h-[129px]'>
                <img src='/logo.png' className='w-[60px] h-[60px]'/>
                <p className='text-[26px] font-semibold'>You're All Set 🔥</p>
                <p className='text-[18px] text-[#8E8E8E]'>We have received your submission. Thank you!</p>
            </div>
        </div>   
      </div>
    )
}
