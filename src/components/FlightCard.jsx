import React from 'react';
import { FaPlane, FaClock, FaSuitcase, FaWifi } from 'react-icons/fa';

const FlightCard = ({ flight }) => {
  // Helper function to format time
  const formatTime = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Helper function to calculate duration
  const calculateDuration = (departure, arrival) => {
    if (!departure || !arrival) return 'N/A';
    const dep = new Date(departure);
    const arr = new Date(arrival);
    const diffMs = arr - dep;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Since we don't know the exact API response structure, 
  // we'll create a flexible component that can handle common fields
  const {
    airline = 'Unknown Airline',
    flightNumber = 'N/A',
    departure = {},
    arrival = {},
    price = {},
    stops = 0,
    aircraft = 'N/A',
    amenities = [],
    baggageAllowance = 'N/A',
  } = flight;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Airline Info */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center border-r border-gray-200 pr-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#002B7F] to-blue-600 rounded-full flex items-center justify-center mb-2">
            <FaPlane className="text-white text-2xl" />
          </div>
          <h3 className="font-bold text-gray-800 text-center">{airline}</h3>
          <p className="text-sm text-gray-500">{flightNumber}</p>
        </div>

        {/* Flight Details */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            {/* Departure */}
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-gray-800">
                {formatTime(departure.time || departure.departureTime)}
              </p>
              <p className="text-sm text-gray-600 font-medium">
                {departure.airport || departure.city || 'N/A'}
              </p>
              <p className="text-xs text-gray-500">
                {formatDate(departure.date || departure.departureDate)}
              </p>
            </div>

            {/* Flight Path */}
            <div className="flex-1 flex flex-col items-center px-4">
              <div className="flex items-center w-full justify-center mb-1">
                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                <FaPlane className="text-[#002B7F] mx-2 transform rotate-90" />
                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                {calculateDuration(
                  departure.time || departure.departureTime,
                  arrival.time || arrival.arrivalTime
                )}
              </p>
              <p className="text-xs text-gray-500">
                {stops === 0 ? 'Non-stop' : stops === 1 ? '1 Stop' : `${stops} Stops`}
              </p>
            </div>

            {/* Arrival */}
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-gray-800">
                {formatTime(arrival.time || arrival.arrivalTime)}
              </p>
              <p className="text-sm text-gray-600 font-medium">
                {arrival.airport || arrival.city || 'N/A'}
              </p>
              <p className="text-xs text-gray-500">
                {formatDate(arrival.date || arrival.arrivalDate)}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <FaSuitcase />
              <span>{baggageAllowance}</span>
            </div>
            {amenities.includes('wifi') && (
              <div className="flex items-center gap-1">
                <FaWifi />
                <span>WiFi Available</span>
              </div>
            )}
            {aircraft && (
              <div className="flex items-center gap-1">
                <FaClock />
                <span>{aircraft}</span>
              </div>
            )}
          </div>
        </div>

        {/* Price & Book */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center border-l border-gray-200 pl-4">
          <p className="text-xs text-gray-500 mb-1">Price per person</p>
          <p className="text-3xl font-bold text-[#002B7F] mb-1">
            ${price.amount || price.total || 'N/A'}
          </p>
          <p className="text-xs text-gray-500 mb-4">
            {price.currency || 'USD'}
          </p>
          <button className="bg-[#002B7F] text-white px-8 py-3 rounded-full hover:opacity-90 transition font-medium w-full">
            Book Now
          </button>
          <button className="text-[#002B7F] text-sm mt-2 hover:underline">
            View Details
          </button>
        </div>
      </div>

      {/* Display raw flight data for debugging (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-xs">
          <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
            Debug: View Raw Flight Data
          </summary>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto max-h-40">
            {JSON.stringify(flight, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
};

export default FlightCard;
