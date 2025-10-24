import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlightCard from '../components/FlightCard';
import { FaArrowLeft, FaFilter } from 'react-icons/fa';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, searchParams, isLoading, error } = location.state || {};

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
                <span><strong>From:</strong> {searchParams.Departure}</span>
                <span><strong>To:</strong> {searchParams.Arrival}</span>
                <span><strong>Departure:</strong> {new Date(searchParams.DepartureDate).toLocaleDateString()}</span>
                {searchParams.TripType === 'R' && searchParams.ArrivalDate && (
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Available Flights ({results.length || 0})
              </h2>
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                <FaFilter />
                <span>Filters</span>
              </button>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No flights found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-[#002B7F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Modify Search
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((flight, index) => (
                  <FlightCard key={index} flight={flight} />
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
