import React, { useState } from 'react';
import { FaPlane, FaClock, FaSuitcase, FaChevronDown, FaChevronUp, FaPhone, FaEnvelope, FaTimes, FaUser, FaCalendar, FaDollarSign } from 'react-icons/fa';
import { getAirportByCode } from '../utils/airports';

const FlightCard = ({ flight }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContactTime: '',
  });
  const [formErrors, setFormErrors] = useState({});

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

  // Get airline name from carrier code
  const getAirlineName = (code) => {
    const airlines = {
      'SG': 'SpiceJet',
      'EK': 'Emirates',
      'AI': 'Air India',
      '6E': 'IndiGo',
      'UK': 'Vistara',
      'G8': 'Go Air',
      'QR': 'Qatar Airways',
      'EY': 'Etihad Airways',
      'FZ': 'Flydubai',
    };
    return airlines[code] || code;
  };

  // Extract flight information
  const {
    OriginDestination,
    ValidatingCarrier,
    TotalFare,
    Segments = [],
    FlightPricingInfo,
    SeatRemaining,
  } = flight;

  const departure = OriginDestination?.Departure || 'N/A';
  const arrival = OriginDestination?.Arrival || 'N/A';
  const departureTime = OriginDestination?.DepartureDateTime;
  const arrivalTime = OriginDestination?.ArrivalDateTime;
  const totalTime = OriginDestination?.TotalTime || 'N/A';
  const stops = Segments.length - 1;
  const airlineName = getAirlineName(ValidatingCarrier);

  // Get airport details
  const departureAirport = getAirportByCode(departure);
  const arrivalAirport = getAirportByCode(arrival);

  // Get first segment for airline logo
  const firstSegment = Segments[0] || {};
  const airlineLogoURL = firstSegment.AirlineLogoURL || `https://airlogo.cloud.trvlnxt.com/${ValidatingCarrier}.png`;

  // Get baggage info
  const baggageWeight = firstSegment.Baggage?.Weight || 'N/A';
  const baggageUnit = firstSegment.Baggage?.Unit || 'KG';
  const cabinBaggage = firstSegment.CabinBaggage || '7 KG';

  // Calculate layover time for connecting flights
  const getLayoverTime = (index) => {
    if (index >= Segments.length - 1) return null;
    const currentArrival = new Date(Segments[index].OriginDestination.ArrivalDateTime);
    const nextDeparture = new Date(Segments[index + 1].OriginDestination.DepartureDateTime);
    const diffMs = nextDeparture - currentArrival;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Handle Call Now
  const handleCallNow = () => {
    // You can replace this with actual phone number
    window.location.href = 'tel:+14253682462';
  };

  // Handle Contact Form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Prepare data with flight details
      const submissionData = {
        ...formData,
        flightDetails: {
          airline: airlineName,
          validatingCarrier: ValidatingCarrier,
          from: `${departureAirport?.city || departure} (${departure})`,
          to: `${arrivalAirport?.city || arrival} (${arrival})`,
          departureDate: formatDate(departureTime),
          departureTime: formatTime(departureTime),
          arrivalDate: formatDate(arrivalTime),
          arrivalTime: formatTime(arrivalTime),
          duration: totalTime,
          stops: stops === 0 ? 'Non-stop' : `${stops} Stop(s)`,
          price: `$${Math.round(TotalFare)} USD`,
          segments: Segments.map(seg => ({
            from: seg.OriginDestination.Departure,
            to: seg.OriginDestination.Arrival,
            flightNumber: `${seg.MarketingCarrier} ${seg.FlightNumber}`,
            departureTime: formatTime(seg.OriginDestination.DepartureDateTime),
            arrivalTime: formatTime(seg.OriginDestination.ArrivalDateTime)
          }))
        },
        submittedAt: new Date().toISOString()
      };

      // Log to console (will be replaced with API call later)
      console.log('=== FLIGHT BOOKING INQUIRY ===');
      console.log('Customer Information:');
      console.log(`Name: ${submissionData.name}`);
      console.log(`Email: ${submissionData.email}`);
      console.log(`Phone: ${submissionData.phone}`);
      console.log(`Preferred Contact Time: ${submissionData.preferredContactTime || 'Not specified'}`);
      console.log(`Message: ${submissionData.message}`);
      console.log('\nFlight Details:');
      console.log(`Route: ${submissionData.flightDetails.from} → ${submissionData.flightDetails.to}`);
      console.log(`Airline: ${submissionData.flightDetails.airline} (${submissionData.flightDetails.validatingCarrier})`);
      console.log(`Departure: ${submissionData.flightDetails.departureDate} at ${submissionData.flightDetails.departureTime}`);
      console.log(`Arrival: ${submissionData.flightDetails.arrivalDate} at ${submissionData.flightDetails.arrivalTime}`);
      console.log(`Duration: ${submissionData.flightDetails.duration}`);
      console.log(`Stops: ${submissionData.flightDetails.stops}`);
      console.log(`Price: ${submissionData.flightDetails.price}`);
      console.log('\nFlight Segments:');
      submissionData.flightDetails.segments.forEach((seg, idx) => {
        console.log(`  Segment ${idx + 1}: ${seg.from} → ${seg.to} | ${seg.flightNumber} | ${seg.departureTime} - ${seg.arrivalTime}`);
      });
      console.log(`\nSubmitted At: ${submissionData.submittedAt}`);
      console.log('============================');

      // Show success message
      alert('Thank you! Your inquiry has been submitted successfully. We will contact you shortly.');
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContactTime: '',
      });
      setShowContactForm(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
        {/* Main Flight Card */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Airline Info */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center border-r border-gray-200 pr-4">
              <img 
                src={airlineLogoURL} 
                alt={airlineName}
                className="w-16 h-16 object-contain mb-2"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-16 h-16 bg-gradient-to-br from-[#002B7F] to-blue-600 rounded-full items-center justify-center mb-2 hidden">
                <FaPlane className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 text-center text-sm">{airlineName}</h3>
              <p className="text-xs text-gray-500">{ValidatingCarrier}</p>
            </div>

            {/* Flight Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                {/* Departure */}
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-gray-800">
                    {formatTime(departureTime)}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {departureAirport?.city || departure}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(departureTime)}
                  </p>
                  <p className="text-xs text-[#002B7F] font-semibold mt-1">
                    {departure}
                  </p>
                </div>

                {/* Flight Path */}
                <div className="flex-1 flex flex-col items-center px-4">
                  <div className="flex items-center w-full justify-center mb-1">
                    <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                    <div className="mx-2 flex flex-col items-center">
                      <FaPlane className="text-[#002B7F] transform rotate-90" />
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {totalTime}
                  </p>
                  <p className="text-xs text-gray-500">
                    {stops === 0 ? 'Non-stop' : stops === 1 ? '1 Stop' : `${stops} Stops`}
                  </p>
                </div>

                {/* Arrival */}
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-gray-800">
                    {formatTime(arrivalTime)}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {arrivalAirport?.city || arrival}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(arrivalTime)}
                  </p>
                  <p className="text-xs text-[#002B7F] font-semibold mt-1">
                    {arrival}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <FaSuitcase />
                  <span>Baggage: {baggageWeight}{baggageUnit}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaSuitcase className="text-gray-400" />
                  <span>Cabin: {cabinBaggage}</span>
                </div>
                {SeatRemaining && (
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span className="text-orange-600 font-medium">{SeatRemaining}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center border-l border-gray-200 pl-4">
              <p className="text-xs text-gray-500 mb-1">Total Price</p>
              <p className="text-3xl font-bold text-[#002B7F] mb-1">
                ${Math.round(TotalFare)}
              </p>
              <p className="text-xs text-gray-500 mb-4">USD</p>
              
              {/* Action Buttons */}
              <div className="w-full space-y-2">
                <button 
                  onClick={handleCallNow}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition font-medium w-full flex items-center justify-center gap-2"
                >
                  <FaPhone size={14} />
                  Call Now
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-[#002B7F] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-medium w-full flex items-center justify-center gap-2"
                >
                  <FaEnvelope size={14} />
                  Contact Now
                </button>
              </div>

              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-[#002B7F] text-sm hover:underline flex items-center gap-1 mt-3"
              >
                {showDetails ? 'Hide Details' : 'View Details'}
                {showDetails ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </button>
            </div>
          </div>
        </div>

        {/* Flight Details Dropdown */}
        {showDetails && (
          <div className="border-t border-gray-200 bg-gray-50 p-6">
            <h4 className="font-bold text-gray-800 mb-4">Flight Details</h4>
            
            {/* Segments */}
            {Segments.map((segment, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={segment.AirlineLogoURL || airlineLogoURL}
                        alt={getAirlineName(segment.MarketingCarrier)}
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {getAirlineName(segment.MarketingCarrier)} {segment.FlightNumber}
                        </p>
                        <p className="text-xs text-gray-500">
                          {segment.Cabin} • {segment.EquipmentType}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">
                        {segment.OriginDestination.TotalTime}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Departure</p>
                      <p className="font-bold text-gray-800">
                        {formatTime(segment.OriginDestination.DepartureDateTime)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {getAirportByCode(segment.OriginDestination.Departure)?.city || segment.OriginDestination.Departure}
                      </p>
                      <p className="text-xs text-gray-500">
                        {segment.DepartureTerminal && `Terminal ${segment.DepartureTerminal}`}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Arrival</p>
                      <p className="font-bold text-gray-800">
                        {formatTime(segment.OriginDestination.ArrivalDateTime)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {getAirportByCode(segment.OriginDestination.Arrival)?.city || segment.OriginDestination.Arrival}
                      </p>
                      <p className="text-xs text-gray-500">
                        {segment.ArrivalTerminal && `Terminal ${segment.ArrivalTerminal}`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Layover Info */}
                {index < Segments.length - 1 && (
                  <div className="flex items-center justify-center py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                      <FaClock className="text-orange-600" />
                      <span>
                        Layover: {getLayoverTime(index)} in {getAirportByCode(segment.OriginDestination.Arrival)?.city || segment.OriginDestination.Arrival}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Fare Breakdown */}
            {FlightPricingInfo && (
              <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-3">Fare Breakdown</h5>
                {FlightPricingInfo.PaxFareDetails?.map((pax, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      {pax.PaxType === 'ADT' ? 'Adult' : pax.PaxType === 'CHD' ? 'Child' : 'Infant'}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Fare:</span>
                        <span className="font-medium">${pax.BasicFare.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & Fees:</span>
                        <span className="font-medium">${pax.TotalTax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 mt-1">
                        <span className="font-semibold text-gray-800">Total:</span>
                        <span className="font-bold text-[#002B7F]">${pax.TotalFare.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] overflow-y-auto ">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl animate-fadeIn my-8">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#002B7F] to-blue-700 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition"
              >
                <FaTimes size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Contact Us for This Flight</h2>
              <p className="text-blue-100 text-sm">Fill out the form below and we'll get back to you shortly</p>
            </div>

            {/* Flight Summary in Modal */}
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <FaPlane className="text-[#002B7F]" />
                  <span className="font-semibold">{departureAirport?.city || departure}</span>
                  <span className="text-gray-500">→</span>
                  <span className="font-semibold">{arrivalAirport?.city || arrival}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[#002B7F]" />
                  <span>{formatDate(departureTime)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#002B7F]" />
                  <span>{totalTime} • {stops === 0 ? 'Non-stop' : `${stops} Stop(s)`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-[#002B7F]" />
                  <span className="font-bold text-[#002B7F]">${Math.round(TotalFare)} USD</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaUser className="inline mr-2 text-[#002B7F]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] focus:border-transparent transition`}
                />
                {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-[#002B7F]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] focus:border-transparent transition`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-2 text-[#002B7F]" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-8900"
                    className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] focus:border-transparent transition`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              {/* Preferred Contact Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaClock className="inline mr-2 text-[#002B7F]" />
                  Preferred Contact Time (Optional)
                </label>
                <select
                  name="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] focus:border-transparent transition"
                >
                  <option value="">Select a time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel plans or any questions you have..."
                  rows="4"
                  className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] focus:border-transparent transition resize-none`}
                />
                {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#002B7F] to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition transform"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FlightCard;