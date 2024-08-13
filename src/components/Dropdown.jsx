import { useState } from 'react';
import {ChevronDown} from 'lucide-react'  // Adjust the import based on your project structure

const Dropdown = ({ options, register, errors }) => {
  return (
    <div className="relative inline-block w-full sm:w-[70%] text-left">
          <select
            {...register("experience")}
            className="block w-full px-3 py-2 text-base text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 ring-inset transition ease-in-out duration-150"
          >
            <option value="" disabled>
              Select Experience
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>
  );
};

export default Dropdown;
