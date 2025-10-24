// Popular airports with their codes, cities, and countries
export const airports = [
  // UAE
  { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE' },
  { code: 'AUH', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE' },
  { code: 'SHJ', city: 'Sharjah', country: 'United Arab Emirates', countryCode: 'AE' },
  
  // India
  { code: 'BOM', city: 'Mumbai', country: 'India', countryCode: 'IN' },
  { code: 'DEL', city: 'New Delhi', country: 'India', countryCode: 'IN' },
  { code: 'BLR', city: 'Bangalore', country: 'India', countryCode: 'IN' },
  { code: 'HYD', city: 'Hyderabad', country: 'India', countryCode: 'IN' },
  { code: 'MAA', city: 'Chennai', country: 'India', countryCode: 'IN' },
  { code: 'CCU', city: 'Kolkata', country: 'India', countryCode: 'IN' },
  { code: 'AMD', city: 'Ahmedabad', country: 'India', countryCode: 'IN' },
  { code: 'COK', city: 'Kochi', country: 'India', countryCode: 'IN' },
  { code: 'GOI', city: 'Goa', country: 'India', countryCode: 'IN' },
  { code: 'PNQ', city: 'Pune', country: 'India', countryCode: 'IN' },
  { code: 'JAI', city: 'Jaipur', country: 'India', countryCode: 'IN' },
  
  // Pakistan
  { code: 'KHI', city: 'Karachi', country: 'Pakistan', countryCode: 'PK' },
  { code: 'LHE', city: 'Lahore', country: 'Pakistan', countryCode: 'PK' },
  { code: 'ISB', city: 'Islamabad', country: 'Pakistan', countryCode: 'PK' },
  
  // Saudi Arabia
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'DMM', city: 'Dammam', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'MED', city: 'Medina', country: 'Saudi Arabia', countryCode: 'SA' },
  
  // USA
  { code: 'JFK', city: 'New York', country: 'United States', countryCode: 'US' },
  { code: 'LAX', city: 'Los Angeles', country: 'United States', countryCode: 'US' },
  { code: 'ORD', city: 'Chicago', country: 'United States', countryCode: 'US' },
  { code: 'MIA', city: 'Miami', country: 'United States', countryCode: 'US' },
  { code: 'SFO', city: 'San Francisco', country: 'United States', countryCode: 'US' },
  { code: 'IAD', city: 'Washington DC', country: 'United States', countryCode: 'US' },
  
  // UK
  { code: 'LHR', city: 'London', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'MAN', city: 'Manchester', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'EDI', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB' },
  
  // Europe
  { code: 'CDG', city: 'Paris', country: 'France', countryCode: 'FR' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', countryCode: 'DE' },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { code: 'MAD', city: 'Madrid', country: 'Spain', countryCode: 'ES' },
  { code: 'BCN', city: 'Barcelona', country: 'Spain', countryCode: 'ES' },
  { code: 'FCO', city: 'Rome', country: 'Italy', countryCode: 'IT' },
  { code: 'MXP', city: 'Milan', country: 'Italy', countryCode: 'IT' },
  { code: 'ZRH', city: 'Zurich', country: 'Switzerland', countryCode: 'CH' },
  { code: 'VIE', city: 'Vienna', country: 'Austria', countryCode: 'AT' },
  
  // Asia
  { code: 'SIN', city: 'Singapore', country: 'Singapore', countryCode: 'SG' },
  { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', countryCode: 'HK' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand', countryCode: 'TH' },
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia', countryCode: 'MY' },
  { code: 'CGK', city: 'Jakarta', country: 'Indonesia', countryCode: 'ID' },
  { code: 'MNL', city: 'Manila', country: 'Philippines', countryCode: 'PH' },
  { code: 'NRT', city: 'Tokyo', country: 'Japan', countryCode: 'JP' },
  { code: 'ICN', city: 'Seoul', country: 'South Korea', countryCode: 'KR' },
  { code: 'PEK', city: 'Beijing', country: 'China', countryCode: 'CN' },
  { code: 'PVG', city: 'Shanghai', country: 'China', countryCode: 'CN' },
  
  // Middle East
  { code: 'DOH', city: 'Doha', country: 'Qatar', countryCode: 'QA' },
  { code: 'BAH', city: 'Bahrain', country: 'Bahrain', countryCode: 'BH' },
  { code: 'KWI', city: 'Kuwait', country: 'Kuwait', countryCode: 'KW' },
  { code: 'MCT', city: 'Muscat', country: 'Oman', countryCode: 'OM' },
  { code: 'CAI', city: 'Cairo', country: 'Egypt', countryCode: 'EG' },
  { code: 'BEY', city: 'Beirut', country: 'Lebanon', countryCode: 'LB' },
  { code: 'AMM', city: 'Amman', country: 'Jordan', countryCode: 'JO' },
  
  // Australia
  { code: 'SYD', city: 'Sydney', country: 'Australia', countryCode: 'AU' },
  { code: 'MEL', city: 'Melbourne', country: 'Australia', countryCode: 'AU' },
  { code: 'BNE', city: 'Brisbane', country: 'Australia', countryCode: 'AU' },
  
  // Canada
  { code: 'YYZ', city: 'Toronto', country: 'Canada', countryCode: 'CA' },
  { code: 'YVR', city: 'Vancouver', country: 'Canada', countryCode: 'CA' },
  { code: 'YUL', city: 'Montreal', country: 'Canada', countryCode: 'CA' },
  
  // Africa
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { code: 'CPT', city: 'Cape Town', country: 'South Africa', countryCode: 'ZA' },
  { code: 'NBO', city: 'Nairobi', country: 'Kenya', countryCode: 'KE' },
  { code: 'ADD', city: 'Addis Ababa', country: 'Ethiopia', countryCode: 'ET' },
  
  // South America
  { code: 'GRU', city: 'São Paulo', country: 'Brazil', countryCode: 'BR' },
  { code: 'GIG', city: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR' },
  { code: 'EZE', city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
];

// Helper function to search airports
export const searchAirports = (query) => {
  if (!query) return airports;
  
  const searchTerm = query.toLowerCase().trim();
  return airports.filter(
    (airport) =>
      airport.city.toLowerCase().includes(searchTerm) ||
      airport.code.toLowerCase().includes(searchTerm) ||
      airport.country.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get airport by code
export const getAirportByCode = (code) => {
  return airports.find((airport) => airport.code === code.toUpperCase());
};

// Helper function to get flag URL from country code
export const getFlagUrl = (countryCode, size = 64) => {
  return `https://flagsapi.com/${countryCode}/flat/${size}.png`;
};
