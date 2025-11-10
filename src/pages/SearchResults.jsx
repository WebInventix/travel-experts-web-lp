import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlightCard from '../components/FlightCard';
import { FaArrowLeft, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { getAirportByCode, getFlagUrl } from '../utils/airports';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, searchParams, isLoading, error } = location.state || {};
  
  // State for filtering and sorting
  const [sortBy, setSortBy] = useState('price'); // price, duration, departure
  const [filterStops, setFilterStops] = useState('all'); // all, nonstop, onestop


  
  // Get airport details for display
  const departureAirport = searchParams ? getAirportByCode(searchParams.Departure) : null;
  const arrivalAirport = searchParams ? getAirportByCode(searchParams.Arrival) : null;

  // Extract flights from the API response
  const flights = results?.Journeys?.[0]?.Flights || [];

  // Calculate B2C Price
  const calculateB2CPrice = (flight) => {
    const { TotalFare, AdditionalFare } = flight;
    const serviceFee = AdditionalFare?.serviceFee?.ADTServiceFee || 0;
    const gst = AdditionalFare?.serviceFee?.GST || 0;
    const markup = AdditionalFare?.markup?.ADTMarkup || 0;
    console.log('Calculating B2C Price:', TotalFare, serviceFee, gst, markup);
    return TotalFare + serviceFee + gst + markup;
  };

  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No search results</h2>
          <p className="text-gray-600 mb-6">Please perform a search first</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#002B7F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Filter flights
  const filteredFlights = flights.filter(flight => {
    if (filterStops === 'all') return true;
    const segmentCount = flight.Segments?.length || 0;
    if (filterStops === 'nonstop') return segmentCount === 1;
    if (filterStops === 'onestop') return segmentCount === 2;
    return true;
  });

  // Sort flights
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === 'price') {
      return calculateB2CPrice(a) - calculateB2CPrice(b);
    } else if (sortBy === 'duration') {
      const getDuration = (flight) => {
        const time = flight.OriginDestination?.TotalTime || '00:00';
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
      };
      return getDuration(a) - getDuration(b);
    } else if (sortBy === 'departure') {
      return new Date(a.OriginDestination?.DepartureDateTime) - new Date(b.OriginDestination?.DepartureDateTime);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button and Search Summary */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#002B7F] hover:opacity-70 transition mb-4"
          >
            <FaArrowLeft />
            <span className="font-medium">Back to Search</span>
          </button>

          {searchParams && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Search Details</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  {departureAirport && (
                    <img 
                      src={getFlagUrl(departureAirport.countryCode, 24)} 
                      alt={departureAirport.country}
                      className="w-5 h-5 rounded object-cover"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                  <span><strong>From:</strong> {departureAirport?.city || searchParams.Departure} ({searchParams.Departure})</span>
                </div>
                <div className="flex items-center gap-2">
                  {arrivalAirport && (
                    <img 
                      src={getFlagUrl(arrivalAirport.countryCode, 24)} 
                      alt={arrivalAirport.country}
                      className="w-5 h-5 rounded object-cover"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                  <span><strong>To:</strong> {arrivalAirport?.city || searchParams.Arrival} ({searchParams.Arrival})</span>
                </div>
                <span><strong>Departure:</strong> {new Date(searchParams.DepartureDate).toLocaleDateString()}</span>
                {searchParams.TripType === 'R' && searchParams.ArrivalDate && searchParams.ArrivalDate !== '0001-01-01T00:00:00' && (
                  <span><strong>Return:</strong> {new Date(searchParams.ArrivalDate).toLocaleDateString()}</span>
                )}
                <span><strong>Passengers:</strong> {searchParams.PaxType.Adult} Adult(s), {searchParams.PaxType.Child} Child(ren), {searchParams.PaxType.Infant} Infant(s)</span>
                <span><strong>Class:</strong> {searchParams.Cabin === 'Y' ? 'Economy' : searchParams.Cabin === 'C' ? 'Business' : 'First'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-[#002B7F]"></div>
            <p className="mt-4 text-gray-600 font-medium">Searching for flights...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-red-800 mb-2">Search Error</h3>
            <p className="text-red-600">{error.data?.message || error.error || 'Failed to fetch flights. Please try again.'}</p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 bg-[#002B7F] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Results */}
        {results && !isLoading && !error && (
          <>
            {/* Filters and Sort Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Available Flights ({sortedFlights.length})
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg">
                  <FaSortAmountDown className="text-gray-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-sm"
                  >
                    <option value="price">Price: Low to High</option>
                    <option value="duration">Duration: Shortest</option>
                    <option value="departure">Departure: Earliest</option>
                  </select>
                </div>

                {/* Filter Dropdown */}
                <div className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg">
                  <FaFilter className="text-gray-600" />
                  <select
                    value={filterStops}
                    onChange={(e) => setFilterStops(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-sm"
                  >
                    <option value="all">All Flights</option>
                    <option value="nonstop">Non-stop Only</option>
                    <option value="onestop">1 Stop</option>
                  </select>
                </div>
              </div>
            </div>

            {sortedFlights.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No flights found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-[#002B7F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Modify Search
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedFlights.map((flight, index) => (
                  <FlightCard key={flight.FlightKey || index} flight={flight} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
