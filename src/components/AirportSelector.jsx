import React, { useState, useRef, useEffect } from 'react';
import { FaPlane, FaSearch, FaTimes } from 'react-icons/fa';
import { airports, searchAirports, getAirportByCode, getFlagUrl } from '../utils/airports';

const AirportSelector = ({ 
  value, 
  onChange, 
  placeholder = "Select Airport",
  label,
  error,
  name
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAirports, setFilteredAirports] = useState(airports);
  const dropdownRef = useRef(null);

  // Get selected airport info
  const selectedAirport = value ? getAirportByCode(value) : null;

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter airports based on search
  useEffect(() => {
    setFilteredAirports(searchAirports(searchQuery));
  }, [searchQuery]);

  const handleSelect = (airport) => {
    onChange({ target: { name, value: airport.code } });
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange({ target: { name, value: '' } });
    setSearchQuery('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block mb-2 font-bold text-base">
          {label}
        </label>
      )}
      
      {/* Selected Value Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 border rounded-md bg-white cursor-pointer transition-colors duration-200 flex items-center justify-between ${
          error ? 'border-red-500' : 'border-white hover:border-[#002B7F]'
        }`}
      >
        {selectedAirport ? (
          <div className="flex items-center gap-2 flex-1">
            <img 
              src={getFlagUrl(selectedAirport.countryCode, 32)} 
              alt={selectedAirport.country}
              className="w-6 h-6 rounded object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{selectedAirport.city}</span>
              <span className="text-xs text-gray-500">{selectedAirport.code}</span>
            </div>
          </div>
        ) : (
          <span className="text-gray-400 flex items-center gap-2">
            <FaPlane className="text-gray-300" />
            {placeholder}
          </span>
        )}
        
        <div className="flex items-center gap-2">
          {selectedAirport && (
            <button
              onClick={handleClear}
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaTimes />
            </button>
          )}
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      {error && <span className="text-red-500 text-xs font-normal mt-1 block">{error}</span>}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-xl max-h-96 overflow-hidden">
          {/* Search Box */}
          <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city or code..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#002B7F]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Airport List */}
          <div className="overflow-y-auto max-h-80">
            {filteredAirports.length > 0 ? (
              filteredAirports.map((airport) => (
                <div
                  key={airport.code}
                  onClick={() => handleSelect(airport)}
                  className={`p-3 hover:bg-blue-50 cursor-pointer transition-colors flex items-center gap-3 ${
                    value === airport.code ? 'bg-blue-100' : ''
                  }`}
                >
                  <img 
                    src={getFlagUrl(airport.countryCode, 48)} 
                    alt={airport.country}
                    className="w-8 h-8 rounded object-cover shadow-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">{airport.city}</span>
                      <span className="text-xs bg-[#002B7F] text-white px-2 py-1 rounded">
                        {airport.code}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{airport.country}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <FaPlane className="mx-auto mb-2 text-gray-300 text-3xl" />
                <p>No airports found</p>
                <p className="text-xs">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportSelector;
