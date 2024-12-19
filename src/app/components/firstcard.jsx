
// import { IoIosArrowForward } from "react-icons/io";

// export default function Card({ Next, formData, handleInputChange }) {
//   return (
//     <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
//       <div className="w-[416px] h-[385px] flex-col justify-center mt-8">
//         <div className="w-[416px] h-[129px]">
//           <img src="/logo.png" className="w-[60px] h-[60px]" />
//           <p className="text-[26px] font-semibold">Join Us! 😎</p>
//           <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
//         </div>
//         <div className="w-[416px] h-[228px] my-[25px] flex flex-col justify-between">
//           <div className="w-[416px] h-[68px]">
//             <p className="font-semibold my-[2px]">First name *</p>
//             <input
//               value={formData.firstName}
//               onChange={(e) => handleInputChange('firstName', e.target.value)}
//               className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
//               placeholder="Enter your first name"
//             />
//           </div>
//           <div className="w-[416px] h-[68px]">
//             <p className="font-semibold my-[2px]">Last name *</p>
//             <input
//               value={formData.lastName}
//               onChange={(e) => handleInputChange('lastName', e.target.value)}
//               className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
//               placeholder="Enter your last name"
//             />
//           </div>
//           <div className="w-[416px] h-[68px] my-[2px]">
//             <p className="font-semibold">Username *</p>
//             <input
//               value={formData.username}
//               onChange={(e) => handleInputChange('username', e.target.value)}
//               className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
//               placeholder="Enter your username"
//             />
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={Next}
//         className="w-[416px] h-[44px] bg-[#D6D8DB] absolute rounded-md my-[580px] text-[#A9ACAF] flex justify-center gap-2 items-center"
//       >
//         Continue 1/3
//         <IoIosArrowForward className="w-[18px] h-[18px]" />
//       </button>
//     </div>
//   )
// }

import { IoIosArrowForward } from "react-icons/io"; 
import { useState } from 'react'

export default function Card({ Next, formData, handleInputChange }) {
  // Add state for error message
  const [error, setError] = useState('');

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    // Regular expression to allow only alphabets and spaces
    const regex = /^[A-Za-z\s]+$/;

    // Check if value matches the regex
    if (!regex.test(value)) {
      setError('First name cannot contain special characters or numbers.');
    } else {
      setError('');
    }

    // Update form data regardless of validation
    handleInputChange('firstName', value);
  };

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[385px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[129px]">
          <img src="/logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] h-[228px] my-[25px] flex flex-col justify-between">
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">First name *</p>
            <input
              value={formData.firstName}
              onChange={handleFirstNameChange} // Use the new handler
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your first name"
            />
            {/* Show error message if validation fails */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Last name *</p>
            <input
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your last name"
            />
          </div>
          <div className="w-[416px] h-[68px] my-[2px]">
            <p className="font-semibold">Username *</p>
            <input
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your username"
            />
          </div>
        </div>
      </div>
      <button
        onClick={Next}
        className="w-[416px] h-[44px] bg-[#D6D8DB] absolute rounded-md my-[580px] text-[#A9ACAF] flex justify-center gap-2 items-center"
      >
        Continue 1/3
        <IoIosArrowForward className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
}
