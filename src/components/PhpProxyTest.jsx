import React, { useState } from "react";

const PhpProxyTest = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const PHP_PROXY_URL = "https://stagging-server786.com/proxy_api.php";
  const TARGET_API_BASE = "http://trvlnxtgateway.parikshan.net/api";
  const API_KEY =
    "CUST01010101MqkRi0o1s5Qd0Fk6JGWoFxhMlbhjeGIeyhBTZBPLNkeQNOyd9acb";

  const testProxy = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      // Sample flight search payload
      const payload = {
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

      const targetUrl = `${TARGET_API_BASE}/Availability`;

      const headers = {
        "Content-Type": "application/json",
        Accept: "*/*",
        apikey: API_KEY,
      };

      // Create form data for PHP proxy
      const formData = new URLSearchParams();
      formData.append("url", targetUrl);
      formData.append("payloads", JSON.stringify(payload));
      formData.append("headers", JSON.stringify(headers));

      console.log("📤 Sending request to PHP proxy...");
      console.log("Target URL:", targetUrl);
      console.log("Form Data:", {
        url: targetUrl,
        payloads: JSON.stringify(payload),
        headers: JSON.stringify(headers),
      });

      const res = await fetch(PHP_PROXY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      console.log("📥 Response status:", res.status);

      const text = await res.text();
      console.log("📥 Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { raw: text, parseError: e.message };
      }

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}, response: ${text}`);
      }

      setResponse(data);
      console.log("✅ Success:", data);
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#002B7F] mb-4">
            PHP Proxy Test Component
          </h1>

          <p className="text-gray-600 mb-6">
            Click the button below to test your PHP proxy integration
          </p>

          <button
            onClick={testProxy}
            disabled={loading}
            className="bg-[#002B7F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Testing...
              </span>
            ) : (
              "Test PHP Proxy"
            )}
          </button>

          {/* Error Display */}
          {error && (
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <h3 className="text-red-800 font-bold mb-2">❌ Error</h3>
              <pre className="text-red-700 text-sm whitespace-pre-wrap">
                {error}
              </pre>
            </div>
          )}

          {/* Response Display */}
          {response && (
            <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="text-green-800 font-bold mb-2">✅ Response</h3>
              <pre className="bg-white p-4 rounded text-xs overflow-auto max-h-96">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-blue-900 font-bold mb-3">📋 How to Use:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
              <li>Click "Test PHP Proxy" button</li>
              <li>Open browser DevTools (F12) to see console logs</li>
              <li>Check the response below</li>
              <li>If successful, your PHP proxy is working correctly!</li>
            </ol>
          </div>

          {/* cURL Example */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-gray-900 font-bold mb-3">
              🔧 Equivalent cURL Command:
            </h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded text-xs overflow-x-auto">
              {`curl -X POST "https://stagging-server786.com/proxy_api.php" \\
  -d 'url=http://trvlnxtgateway.parikshan.net/api/Availability' \\
  -d 'payloads={"Departure":"DXB","Arrival":"BOM",...}' \\
  -d 'headers={"Content-Type":"application/json","apikey":"..."}'`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhpProxyTest;
