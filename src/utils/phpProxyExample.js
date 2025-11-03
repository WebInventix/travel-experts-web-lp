/**
 * PHP Proxy API Integration Example
 * 
 * This file demonstrates how to use the PHP proxy for API requests
 */

const PHP_PROXY_URL = "https://stagging-server786.com/proxy_api.php";
const TARGET_API_BASE = "http://trvlnxtgateway.parikshan.net/api";
const API_KEY = "CUST01010101MqkRi0o1s5Qd0Fk6JGWoFxhMlbhjeGIeyhBTZBPLNkeQNOyd9acb";

/**
 * Send request through PHP proxy
 * @param {string} endpoint - API endpoint (e.g., '/Availability')
 * @param {object} payload - Request payload
 * @param {object} customHeaders - Additional headers (optional)
 * @returns {Promise<any>} API response
 */
export async function sendProxyRequest(endpoint, payload, customHeaders = {}) {
  try {
    // Construct the full target URL
    const targetUrl = `${TARGET_API_BASE}${endpoint}`;
    
    // Prepare headers for the actual API
    const headers = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "apikey": API_KEY,
      ...customHeaders,
    };
    
    // Create form data for PHP proxy
    const formData = new URLSearchParams();
    formData.append("url", targetUrl);
    formData.append("payloads", JSON.stringify(payload));
    formData.append("headers", JSON.stringify(headers));
    
    console.log("🚀 Sending request through PHP proxy:");
    console.log("Target URL:", targetUrl);
    console.log("Payload:", payload);
    
    // Make request
    const response = await fetch(PHP_PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("✅ Response received:", data);
    
    return data;
  } catch (error) {
    console.error("❌ Proxy request failed:", error);
    throw error;
  }
}

/**
 * Example: Search flights through PHP proxy
 */
export async function searchFlightsExample() {
  const searchParams = {
    Departure: "DXB",
    Arrival: "BOM",
    DepartureDate: new Date().toISOString(),
    ArrivalDate: "0001-01-01T00:00:00",
    Cabin: "Y",
    TripType: "O",
    PreferredAirline: null,
    PaxType: {
      Adult: 1,
      Child: 0,
      Infant: 0,
    },
    Stop: {
      OneStop: false,
      TwoStop: false,
      NonStop: false,
    },
    CustID: "CUST01010101",
    MultiCitySearches: null,
  };
  
  try {
    const result = await sendProxyRequest("/Availability", searchParams);
    return result;
  } catch (error) {
    console.error("Flight search failed:", error);
    throw error;
  }
}

/**
 * Test function - Run in browser console
 * 
 * Usage:
 * import { testPhpProxy } from './utils/phpProxyExample';
 * testPhpProxy();
 */
export async function testPhpProxy() {
  console.log("🧪 Testing PHP Proxy...");
  
  try {
    const result = await searchFlightsExample();
    console.log("✅ Test successful!");
    console.log("Result:", result);
    return result;
  } catch (error) {
    console.error("❌ Test failed!");
    console.error("Error:", error);
    throw error;
  }
}

// For direct browser testing
if (typeof window !== "undefined") {
  window.testPhpProxy = testPhpProxy;
  window.sendProxyRequest = sendProxyRequest;
  console.log("💡 PHP Proxy test functions loaded!");
  console.log("Run 'testPhpProxy()' in console to test");
}
