import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaChild, FaBaby, FaPlus, FaMinus } from 'react-icons/fa';

const PassengerSelector = ({
  adults = 1,
  children = 0,
  infants = 0,
  onAdultsChange,
  onChildrenChange,
  onInfantsChange,
  cabin = 'Y',
  onCabinChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate total passengers
  const totalPassengers = adults + children + infants;

  // Get cabin name
  const getCabinName = (code) => {
    switch (code) {
      case 'Y':
        return 'Economy';
      case 'C':
        return 'Business';
      case 'F':
        return 'First Class';
      default:
        return 'Economy';
    }
  };

  // Passenger counter component
  const PassengerCounter = ({ icon: Icon, label, subtitle, value, onChange, min = 0, max = 9 }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 min-w-[220px]">
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
          <Icon className="text-[#002B7F]" />
        </div>
        <div >
          <p className="font-semibold text-gray-800 ">{label}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition ${
            value <= min
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-[#002B7F] text-[#002B7F] hover:bg-[#002B7F] hover:text-white'
          }`}
        >
          <FaMinus size={12} />
        </button>
        <span className="w-8 text-center font-bold text-gray-800">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition ${
            value >= max
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-[#002B7F] text-[#002B7F] hover:bg-[#002B7F] hover:text-white'
          }`}
        >
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block mb-2 font-bold text-base uppercase">Traveller & Class</label>

      {/* Display Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border border-white rounded-md bg-white cursor-pointer hover:border-[#002B7F] transition-colors duration-200 flex items-center justify-between w-full sm:w-auto"
      >
        <div className="flex items-center gap-2">
          <FaUser className="text-[#002B7F]" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm text-gray-800">
              {totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}
            </span>
            <span className="text-xs text-gray-500">{getCabinName(cabin)}</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white border border-gray-300 rounded-lg shadow-2xl w-full sm:w-[320px] md:w-[400px] lg:w-[480px] xl:w-[600px] max-w-full overflow-x-auto overflow-y-auto max-h-[300px] top-full left-0">
          {/* Passengers Section */}
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-3">Passengers</h3>

            <PassengerCounter
              icon={FaUser}
              label="Adults"
              subtitle="12+ years"
              value={adults}
              onChange={(val) => onAdultsChange({ target: { name: 'adults', value: val } })}
              min={1}
              max={9}
            />

            <PassengerCounter
              icon={FaChild}
              label="Children"
              subtitle="2-11 years"
              value={children}
              onChange={(val) => onChildrenChange({ target: { name: 'children', value: val } })}
              min={0}
              max={6}
            />

            <PassengerCounter
              icon={FaBaby}
              label="Infants"
              subtitle="Under 2 years"
              value={infants}
              onChange={(val) => onInfantsChange({ target: { name: 'infants', value: val } })}
              min={0}
              max={4}
            />
          </div>

          {/* Cabin Class Section */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3">Cabin Class</h3>
            <div className="space-y-2">
              {[
                { value: 'Y', label: 'Economy', desc: 'Affordable travel' },
                { value: 'C', label: 'Business', desc: 'Extra comfort & service' },
                { value: 'F', label: 'First Class', desc: 'Ultimate luxury' }
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition ${
                    cabin === option.value
                      ? 'border-[#002B7F] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="cabin"
                    value={option.value}
                    checked={cabin === option.value}
                    onChange={(e) => onCabinChange(e)}
                    className="w-4 h-4 text-[#002B7F] focus:ring-[#002B7F]"
                  />
                  <div className="ml-3 flex-1">
                    <p className="font-semibold text-gray-800">{option.label}</p>
                    <p className="text-xs text-gray-500">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Done Button */}
          <div className="p-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#002B7F] text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
