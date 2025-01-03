import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export function SecondCard({ Next, Back, formData, handleInputChange }) {
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex=/^\d{8,}$/

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    if (value === ""){
      setEmailError("Email cannot be empty.")
    } else if (!emailRegex.test(value)) 
        // else if (
        //   !value.includes("@") || 
        //   !value.includes(".") || 
        //   !nameRegex.test(value)
        // ) 
    {
      setEmailError("Please provide a valid email address.")
    } else {
      setEmailError(" ");
    }
    handleInputChange("email", value)
  }

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.trim();
    if (value === ""){
      setPhoneNumberError("Phone number cannot be empty.")
    } else if(!phoneNumberRegex.test(value)){
      setPhoneNumberError("Please enter a valid phone number.")
    } else{
      setPhoneNumberError(" ");
    }
    handleInputChange("phoneNumber", value)
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value.trim();
    if (value === ""){
      setPasswordError("Password cannot be empty.")
    } else{
      setPasswordError(" ");
    }
    handleInputChange("password", value)
  }

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value.trim();
    if (value === ""){
      setConfirmPasswordError("Confirm pasword cannot be empty.")
    } else if(value !== formData.password){
      setConfirmPasswordError("Passwords do not match. Please try again.")
    } else{
      setConfirmPasswordError(" ")
    }
  }

  const isButtonDisabled = !(emailError===" " && phoneNumberError===" " && passwordError===" " && confirmPasswordError===" ")
  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[129px]">
          <img src="/logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] h-[308px] my-[25px] flex flex-col justify-between">
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Email *</p>
            <input
              value={formData.email}
              onChange={handleEmailChange}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}   
          </div>
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Phone number *</p>
            <input
              value={formData.phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your phone number"
            />
            {phoneNumberError && <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>} 
          </div>
          <div className="w-[416px] h-[68px] my-[2px]">
            <p className="font-semibold">Password *</p>
            <input
              type="password"

              onChange={handlePasswordChange}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your password"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>} 
          </div>
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Confirm password *</p>
            <input
              

              onChange={handleConfirmPasswordChange}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your password again"
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>} 
          </div>
        </div>
      </div>
      <div className="w-[416px] h-[44px] absolute my-[580px] justify-between flex">
        <button
          onClick={Back}
          className="w-[128px] h-[44px] rounded-md text-black bg-white border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center"
        >
          <IoIosArrowBack className="w-[18px] h-[18px]" />
          Back
        </button>
        <button
          onClick={Next}
          className={`w-[280px] h-[44px] ${isButtonDisabled ? "bg-[#D6D8DB] text-[#A9ACAF]" : "bg-[#202124] text-white"} absolute ml-[135px] rounded-md flex justify-center gap-2 items-center`}
          disabled={isButtonDisabled} 
        >
          Continue 2/3
          <IoIosArrowForward className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
