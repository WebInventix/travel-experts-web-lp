import React, { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DatePicker = ({ 
  value, 
  onChange, 
  label,
  name,
  error,
  minDate,
  disabled = false,
  placeholder = "Select Date"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef(null);

  // Parse value to Date object
  const selectedDate = value ? new Date(value) : null;

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

  // Set current month when value changes
  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(new Date(selectedDate));
    }
  }, [value]);

  // Format date for display
  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days in month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Check if date is selected
  const isSelected = (date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  // Check if date is disabled
  const isDateDisabled = (date) => {
    if (!minDate) return false;
    const min = new Date(minDate);
    min.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date < min;
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    if (isDateDisabled(date)) return;
    const formattedDate = date.toISOString().split('T')[0];
    onChange({ target: { name, value: formattedDate } });
    setIsOpen(false);
  };

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Month and year display
  const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block mb-2 font-bold text-base">
          {label}
        </label>
      )}

      {/* Input Display */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`p-2 border rounded-md bg-white transition-colors duration-200 flex items-center justify-between ${
          disabled 
            ? 'bg-gray-200 cursor-not-allowed' 
            : 'cursor-pointer hover:border-[#002B7F]'
        } ${error ? 'border-red-500' : 'border-white'}`}
      >
        <div className="flex items-center gap-2 flex-1">
          <FaCalendarAlt className={`${disabled ? 'text-gray-400' : 'text-[#002B7F]'}`} />
          <span className={selectedDate ? 'text-gray-800 font-medium' : 'text-gray-400'}>
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
        </div>
        <FaCalendarAlt className="text-gray-400" />
      </div>

      {/* Error Message */}
      {error && <span className="text-red-500 text-xs font-normal mt-1 block">{error}</span>}

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white border border-gray-300 rounded-lg shadow-2xl p-4 w-full sm:w-80">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              type="button"
            >
              <FaChevronLeft className="text-[#002B7F]" />
            </button>
            <h3 className="font-bold text-gray-800">{monthYear}</h3>
            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              type="button"
            >
              <FaChevronRight className="text-[#002B7F]" />
            </button>
          </div>

          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const disabled = isDateDisabled(date);
              const selected = isSelected(date);
              const today = isToday(date);

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  disabled={disabled}
                  type="button"
                  className={`
                    aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                    ${disabled 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'hover:bg-blue-50 cursor-pointer'
                    }
                    ${selected 
                      ? 'bg-[#002B7F] text-white hover:bg-[#003399] shadow-md' 
                      : 'text-gray-700'
                    }
                    ${today && !selected 
                      ? 'border-2 border-[#002B7F] font-bold' 
                      : ''
                    }
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 pt-3 border-t border-gray-200 flex gap-2">
            <button
              onClick={() => {
                const today = new Date();
                if (!isDateDisabled(today)) {
                  handleDateSelect(today);
                }
              }}
              type="button"
              className="flex-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition font-medium text-gray-700"
            >
              Today
            </button>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="flex-1 px-3 py-2 text-sm bg-[#002B7F] hover:opacity-90 text-white rounded-md transition font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
