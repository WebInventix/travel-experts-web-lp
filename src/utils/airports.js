// Popular airports with their codes, cities, and countries
export const airports = [
  // USA (major and international airports)
  { code: 'ATL', city: 'Atlanta', country: 'United States', countryCode: 'US' },
  { code: 'DFW', city: 'Dallas/Fort Worth', country: 'United States', countryCode: 'US' },
  { code: 'DEN', city: 'Denver', country: 'United States', countryCode: 'US' },
  { code: 'ORD', city: 'Chicago', country: 'United States', countryCode: 'US' },
  { code: 'LAX', city: 'Los Angeles', country: 'United States', countryCode: 'US' },
  { code: 'JFK', city: 'New York', country: 'United States', countryCode: 'US' },
  { code: 'LAS', city: 'Las Vegas', country: 'United States', countryCode: 'US' },
  { code: 'MCO', city: 'Orlando', country: 'United States', countryCode: 'US' },
  { code: 'MIA', city: 'Miami', country: 'United States', countryCode: 'US' },
  { code: 'CLT', city: 'Charlotte', country: 'United States', countryCode: 'US' },
  { code: 'PHX', city: 'Phoenix', country: 'United States', countryCode: 'US' },
  { code: 'SEA', city: 'Seattle', country: 'United States', countryCode: 'US' },
  { code: 'SFO', city: 'San Francisco', country: 'United States', countryCode: 'US' },
  { code: 'EWR', city: 'Newark', country: 'United States', countryCode: 'US' },
  { code: 'BOS', city: 'Boston', country: 'United States', countryCode: 'US' },
  { code: 'IAH', city: 'Houston', country: 'United States', countryCode: 'US' },
  { code: 'FLL', city: 'Fort Lauderdale', country: 'United States', countryCode: 'US' },
  { code: 'MSP', city: 'Minneapolis', country: 'United States', countryCode: 'US' },
  { code: 'DTW', city: 'Detroit', country: 'United States', countryCode: 'US' },
  { code: 'PHL', city: 'Philadelphia', country: 'United States', countryCode: 'US' },
  { code: 'LGA', city: 'New York', country: 'United States', countryCode: 'US' },
  { code: 'BWI', city: 'Baltimore', country: 'United States', countryCode: 'US' },
  { code: 'SLC', city: 'Salt Lake City', country: 'United States', countryCode: 'US' },
  { code: 'SAN', city: 'San Diego', country: 'United States', countryCode: 'US' },
  { code: 'IAD', city: 'Washington DC', country: 'United States', countryCode: 'US' },
  { code: 'DCA', city: 'Washington DC', country: 'United States', countryCode: 'US' },
  { code: 'MDW', city: 'Chicago', country: 'United States', countryCode: 'US' },
  { code: 'TPA', city: 'Tampa', country: 'United States', countryCode: 'US' },
  { code: 'PDX', city: 'Portland', country: 'United States', countryCode: 'US' },
  { code: 'HNL', city: 'Honolulu', country: 'United States', countryCode: 'US' },
  { code: 'AUS', city: 'Austin', country: 'United States', countryCode: 'US' },
  { code: 'BNA', city: 'Nashville', country: 'United States', countryCode: 'US' },
  { code: 'DAL', city: 'Dallas', country: 'United States', countryCode: 'US' },
  { code: 'HOU', city: 'Houston', country: 'United States', countryCode: 'US' },
  { code: 'MCI', city: 'Kansas City', country: 'United States', countryCode: 'US' },
  { code: 'MSY', city: 'New Orleans', country: 'United States', countryCode: 'US' },
  { code: 'OAK', city: 'Oakland', country: 'United States', countryCode: 'US' },
  { code: 'RDU', city: 'Raleigh', country: 'United States', countryCode: 'US' },
  { code: 'SJC', city: 'San Jose', country: 'United States', countryCode: 'US' },
  { code: 'SNA', city: 'Santa Ana', country: 'United States', countryCode: 'US' },
  { code: 'STL', city: 'St. Louis', country: 'United States', countryCode: 'US' },
  { code: 'ABQ', city: 'Albuquerque', country: 'United States', countryCode: 'US' },
  { code: 'ANC', city: 'Anchorage', country: 'United States', countryCode: 'US' },
  { code: 'CLE', city: 'Cleveland', country: 'United States', countryCode: 'US' },
  { code: 'CMH', city: 'Columbus', country: 'United States', countryCode: 'US' },
  { code: 'CVG', city: 'Cincinnati', country: 'United States', countryCode: 'US' },
  { code: 'IND', city: 'Indianapolis', country: 'United States', countryCode: 'US' },
  { code: 'PIT', city: 'Pittsburgh', country: 'United States', countryCode: 'US' },
  { code: 'RSW', city: 'Fort Myers', country: 'United States', countryCode: 'US' },
  { code: 'SAT', city: 'San Antonio', country: 'United States', countryCode: 'US' },
  { code: 'SJU', city: 'San Juan', country: 'United States', countryCode: 'US' },
  { code: 'SMF', city: 'Sacramento', country: 'United States', countryCode: 'US' },

  // Australia
  { code: 'SYD', city: 'Sydney', country: 'Australia', countryCode: 'AU' },
  { code: 'MEL', city: 'Melbourne', country: 'Australia', countryCode: 'AU' },
  { code: 'BNE', city: 'Brisbane', country: 'Australia', countryCode: 'AU' },
  { code: 'PER', city: 'Perth', country: 'Australia', countryCode: 'AU' },
  { code: 'ADL', city: 'Adelaide', country: 'Australia', countryCode: 'AU' },
  { code: 'OOL', city: 'Gold Coast', country: 'Australia', countryCode: 'AU' },
  { code: 'CNS', city: 'Cairns', country: 'Australia', countryCode: 'AU' },
  { code: 'CBR', city: 'Canberra', country: 'Australia', countryCode: 'AU' },
  { code: 'HBA', city: 'Hobart', country: 'Australia', countryCode: 'AU' },
  { code: 'DRW', city: 'Darwin', country: 'Australia', countryCode: 'AU' },

  // India (all major international and domestic)
  { code: 'DEL', city: 'New Delhi', country: 'India', countryCode: 'IN' },
  { code: 'BOM', city: 'Mumbai', country: 'India', countryCode: 'IN' },
  { code: 'BLR', city: 'Bangalore', country: 'India', countryCode: 'IN' },
  { code: 'HYD', city: 'Hyderabad', country: 'India', countryCode: 'IN' },
  { code: 'MAA', city: 'Chennai', country: 'India', countryCode: 'IN' },
  { code: 'CCU', city: 'Kolkata', country: 'India', countryCode: 'IN' },
  { code: 'AMD', city: 'Ahmedabad', country: 'India', countryCode: 'IN' },
  { code: 'GOX', city: 'Mopa (Goa)', country: 'India', countryCode: 'IN' },
  { code: 'GOI', city: 'Dabolim (Goa)', country: 'India', countryCode: 'IN' },
  { code: 'PNQ', city: 'Pune', country: 'India', countryCode: 'IN' },
  { code: 'COK', city: 'Kochi', country: 'India', countryCode: 'IN' },
  { code: 'ATQ', city: 'Amritsar', country: 'India', countryCode: 'IN' },
  { code: 'BDQ', city: 'Vadodara', country: 'India', countryCode: 'IN' },
  { code: 'BBI', city: 'Bhubaneswar', country: 'India', countryCode: 'IN' },
  { code: 'CCJ', city: 'Kozhikode', country: 'India', countryCode: 'IN' },
  { code: 'CJB', city: 'Coimbatore', country: 'India', countryCode: 'IN' },
  { code: 'CNN', city: 'Kannur', country: 'India', countryCode: 'IN' },
  { code: 'GAU', city: 'Guwahati', country: 'India', countryCode: 'IN' },
  { code: 'IDR', city: 'Indore', country: 'India', countryCode: 'IN' },
  { code: 'IXE', city: 'Mangalore', country: 'India', countryCode: 'IN' },
  { code: 'IXM', city: 'Madurai', country: 'India', countryCode: 'IN' },
  { code: 'JAI', city: 'Jaipur', country: 'India', countryCode: 'IN' },
  { code: 'LKO', city: 'Lucknow', country: 'India', countryCode: 'IN' },
  { code: 'NAG', city: 'Nagpur', country: 'India', countryCode: 'IN' },
  { code: 'PAT', city: 'Patna', country: 'India', countryCode: 'IN' },
  { code: 'RPR', city: 'Raipur', country: 'India', countryCode: 'IN' },
  { code: 'SXR', city: 'Srinagar', country: 'India', countryCode: 'IN' },
  { code: 'TRV', city: 'Thiruvananthapuram', country: 'India', countryCode: 'IN' },
  { code: 'TRZ', city: 'Tiruchirappalli', country: 'India', countryCode: 'IN' },
  { code: 'VNS', city: 'Varanasi', country: 'India', countryCode: 'IN' },
  { code: 'VTZ', city: 'Visakhapatnam', country: 'India', countryCode: 'IN' },

  // United Arab Emirates
  { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE' },
  { code: 'AUH', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE' },
  { code: 'SHJ', city: 'Sharjah', country: 'United Arab Emirates', countryCode: 'AE' },
  { code: 'DWC', city: 'Dubai Al Maktoum', country: 'United Arab Emirates', countryCode: 'AE' },

  // United Kingdom
  { code: 'LHR', city: 'London Heathrow', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'LGW', city: 'London Gatwick', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'MAN', city: 'Manchester', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'EDI', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'BHX', city: 'Birmingham', country: 'United Kingdom', countryCode: 'GB' },
  { code: 'STN', city: 'London Stansted', country: 'United Kingdom', countryCode: 'GB' },

  // Canada
  { code: 'YYZ', city: 'Toronto', country: 'Canada', countryCode: 'CA' },
  { code: 'YVR', city: 'Vancouver', country: 'Canada', countryCode: 'CA' },
  { code: 'YUL', city: 'Montreal', country: 'Canada', countryCode: 'CA' },
  { code: 'YYC', city: 'Calgary', country: 'Canada', countryCode: 'CA' },
  { code: 'YEG', city: 'Edmonton', country: 'Canada', countryCode: 'CA' },
  { code: 'YOW', city: 'Ottawa', country: 'Canada', countryCode: 'CA' },

  // Germany
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', countryCode: 'DE' },
  { code: 'MUC', city: 'Munich', country: 'Germany', countryCode: 'DE' },
  { code: 'BER', city: 'Berlin', country: 'Germany', countryCode: 'DE' },
  { code: 'HAM', city: 'Hamburg', country: 'Germany', countryCode: 'DE' },
  { code: 'DUS', city: 'Düsseldorf', country: 'Germany', countryCode: 'DE' },

  // France
  { code: 'CDG', city: 'Paris Charles de Gaulle', country: 'France', countryCode: 'FR' },
  { code: 'ORY', city: 'Paris Orly', country: 'France', countryCode: 'FR' },
  { code: 'NCE', city: 'Nice', country: 'France', countryCode: 'FR' },
  { code: 'LYS', city: 'Lyon', country: 'France', countryCode: 'FR' },
  { code: 'MRS', city: 'Marseille', country: 'France', countryCode: 'FR' },

  // Spain
  { code: 'MAD', city: 'Madrid', country: 'Spain', countryCode: 'ES' },
  { code: 'BCN', city: 'Barcelona', country: 'Spain', countryCode: 'ES' },
  { code: 'PMI', city: 'Palma de Mallorca', country: 'Spain', countryCode: 'ES' },
  { code: 'AGP', city: 'Málaga', country: 'Spain', countryCode: 'ES' },
  { code: 'ALC', city: 'Alicante', country: 'Spain', countryCode: 'ES' },

  // Italy
  { code: 'FCO', city: 'Rome Fiumicino', country: 'Italy', countryCode: 'IT' },
  { code: 'MXP', city: 'Milan Malpensa', country: 'Italy', countryCode: 'IT' },
  { code: 'VCE', city: 'Venice', country: 'Italy', countryCode: 'IT' },
  { code: 'NAP', city: 'Naples', country: 'Italy', countryCode: 'IT' },

  // Netherlands
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { code: 'RTM', city: 'Rotterdam', country: 'Netherlands', countryCode: 'NL' },
  { code: 'EIN', city: 'Eindhoven', country: 'Netherlands', countryCode: 'NL' },

  // Switzerland
  { code: 'ZRH', city: 'Zurich', country: 'Switzerland', countryCode: 'CH' },
  { code: 'GVA', city: 'Geneva', country: 'Switzerland', countryCode: 'CH' },

  // China
  { code: 'PEK', city: 'Beijing Capital', country: 'China', countryCode: 'CN' },
  { code: 'PKX', city: 'Beijing Daxing', country: 'China', countryCode: 'CN' },
  { code: 'PVG', city: 'Shanghai Pudong', country: 'China', countryCode: 'CN' },
  { code: 'CAN', city: 'Guangzhou', country: 'China', countryCode: 'CN' },
  { code: 'SZX', city: 'Shenzhen', country: 'China', countryCode: 'CN' },
  { code: 'CTU', city: 'Chengdu', country: 'China', countryCode: 'CN' },

  // Japan
  { code: 'HND', city: 'Tokyo Haneda', country: 'Japan', countryCode: 'JP' },
  { code: 'NRT', city: 'Tokyo Narita', country: 'Japan', countryCode: 'JP' },
  { code: 'KIX', city: 'Osaka Kansai', country: 'Japan', countryCode: 'JP' },
  { code: 'FUK', city: 'Fukuoka', country: 'Japan', countryCode: 'JP' },
  { code: 'NGO', city: 'Nagoya', country: 'Japan', countryCode: 'JP' },

  // South Korea
  { code: 'ICN', city: 'Seoul Incheon', country: 'South Korea', countryCode: 'KR' },
  { code: 'GMP', city: 'Seoul Gimpo', country: 'South Korea', countryCode: 'KR' },
  { code: 'PUS', city: 'Busan', country: 'South Korea', countryCode: 'KR' },

  // Singapore
  { code: 'SIN', city: 'Singapore', country: 'Singapore', countryCode: 'SG' },

  // Thailand
  { code: 'BKK', city: 'Bangkok Suvarnabhumi', country: 'Thailand', countryCode: 'TH' },
  { code: 'DMK', city: 'Bangkok Don Mueang', country: 'Thailand', countryCode: 'TH' },
  { code: 'HKT', city: 'Phuket', country: 'Thailand', countryCode: 'TH' },
  { code: 'CNX', city: 'Chiang Mai', country: 'Thailand', countryCode: 'TH' },

  // Malaysia
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia', countryCode: 'MY' },
  { code: 'PEN', city: 'Penang', country: 'Malaysia', countryCode: 'MY' },

  // Indonesia
  { code: 'CGK', city: 'Jakarta Soekarno-Hatta', country: 'Indonesia', countryCode: 'ID' },
  { code: 'DPS', city: 'Denpasar Bali', country: 'Indonesia', countryCode: 'ID' },
  { code: 'SUB', city: 'Surabaya', country: 'Indonesia', countryCode: 'ID' },

  // Philippines
  { code: 'MNL', city: 'Manila', country: 'Philippines', countryCode: 'PH' },
  { code: 'CEB', city: 'Cebu', country: 'Philippines', countryCode: 'PH' },

  // Vietnam
  { code: 'SGN', city: 'Ho Chi Minh City', country: 'Vietnam', countryCode: 'VN' },
  { code: 'HAN', city: 'Hanoi', country: 'Vietnam', countryCode: 'VN' },
  { code: 'DAD', city: 'Da Nang', country: 'Vietnam', countryCode: 'VN' },

  // Saudi Arabia
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'DMM', city: 'Dammam', country: 'Saudi Arabia', countryCode: 'SA' },
  { code: 'MED', city: 'Medina', country: 'Saudi Arabia', countryCode: 'SA' },

  // Qatar
  { code: 'DOH', city: 'Doha', country: 'Qatar', countryCode: 'QA' },

  // Turkey
  { code: 'IST', city: 'Istanbul', country: 'Turkey', countryCode: 'TR' },
  { code: 'SAW', city: 'Istanbul Sabiha Gökçen', country: 'Turkey', countryCode: 'TR' },
  { code: 'AYT', city: 'Antalya', country: 'Turkey', countryCode: 'TR' },

  // Brazil
  { code: 'GRU', city: 'São Paulo Guarulhos', country: 'Brazil', countryCode: 'BR' },
  { code: 'GIG', city: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR' },
  { code: 'BSB', city: 'Brasília', country: 'Brazil', countryCode: 'BR' },
  { code: 'CNF', city: 'Belo Horizonte', country: 'Brazil', countryCode: 'BR' },

  // Mexico
  { code: 'MEX', city: 'Mexico City', country: 'Mexico', countryCode: 'MX' },
  { code: 'CUN', city: 'Cancún', country: 'Mexico', countryCode: 'MX' },
  { code: 'GDL', city: 'Guadalajara', country: 'Mexico', countryCode: 'MX' },
  { code: 'MTY', city: 'Monterrey', country: 'Mexico', countryCode: 'MX' },

  // Argentina
  { code: 'EZE', city: 'Buenos Aires Ezeiza', country: 'Argentina', countryCode: 'AR' },
  { code: 'AEP', city: 'Buenos Aires Aeroparque', country: 'Argentina', countryCode: 'AR' },
  { code: 'COR', city: 'Córdoba', country: 'Argentina', countryCode: 'AR' },

  // South Africa
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { code: 'CPT', city: 'Cape Town', country: 'South Africa', countryCode: 'ZA' },
  { code: 'DUR', city: 'Durban', country: 'South Africa', countryCode: 'ZA' },

  // Egypt
  { code: 'CAI', city: 'Cairo', country: 'Egypt', countryCode: 'EG' },

  // Russia
  { code: 'SVO', city: 'Moscow Sheremetyevo', country: 'Russia', countryCode: 'RU' },
  { code: 'DME', city: 'Moscow Domodedovo', country: 'Russia', countryCode: 'RU' },
  { code: 'LED', city: 'St. Petersburg', country: 'Russia', countryCode: 'RU' },

  // New Zealand
  { code: 'AKL', city: 'Auckland', country: 'New Zealand', countryCode: 'NZ' },
  { code: 'CHC', city: 'Christchurch', country: 'New Zealand', countryCode: 'NZ' },

  // Ireland
  { code: 'DUB', city: 'Dublin', country: 'Ireland', countryCode: 'IE' },

  // Portugal
  { code: 'LIS', city: 'Lisbon', country: 'Portugal', countryCode: 'PT' },
  { code: 'OPO', city: 'Porto', country: 'Portugal', countryCode: 'PT' },

  // Greece
  { code: 'ATH', city: 'Athens', country: 'Greece', countryCode: 'GR' },
  { code: 'HER', city: 'Heraklion', country: 'Greece', countryCode: 'GR' },

  // Sweden
  { code: 'ARN', city: 'Stockholm Arlanda', country: 'Sweden', countryCode: 'SE' },

  // Norway
  { code: 'OSL', city: 'Oslo', country: 'Norway', countryCode: 'NO' },

  // Denmark
  { code: 'CPH', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK' },

  // Austria
  { code: 'VIE', city: 'Vienna', country: 'Austria', countryCode: 'AT' },

  // Belgium
  { code: 'BRU', city: 'Brussels', country: 'Belgium', countryCode: 'BE' },

  // Poland
  { code: 'WAW', city: 'Warsaw', country: 'Poland', countryCode: 'PL' },

  // Hungary
  { code: 'BUD', city: 'Budapest', country: 'Hungary', countryCode: 'HU' },

  // Czech Republic
  { code: 'PRG', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ' },

  // Israel
  { code: 'TLV', city: 'Tel Aviv', country: 'Israel', countryCode: 'IL' },

  // Hong Kong
  { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', countryCode: 'HK' },

  // Taiwan
  { code: 'TPE', city: 'Taipei', country: 'Taiwan', countryCode: 'TW' },

  // Pakistan
  { code: 'KHI', city: 'Karachi', country: 'Pakistan', countryCode: 'PK' },
  { code: 'LHE', city: 'Lahore', country: 'Pakistan', countryCode: 'PK' },
  { code: 'ISB', city: 'Islamabad', country: 'Pakistan', countryCode: 'PK' }
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