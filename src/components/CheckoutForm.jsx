import { useState, useEffect } from "react";

const COUNTRIES = [
  "Afghanistan",
  "South Africa",
  "Albania",
  "Germany",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua & Barbuda",
  "Saudi Arabia",
  "Algeria",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bhutan",
  "Cape Verde",
  "Cameroon",
  "Cambodia",
  "Canada",
  "Canary Islands",
  "Kazakhstan",
  "Ceuta & Melilla",
  "Chad",
  "Chile",
  "China",
  "Cyprus",
  "Singapore",
  "Colombia",
  "Comoros",
  "Congo (Republic)",
  "North Korea",
  "South Korea",
  "Côte d'Ivoire",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Diego Garcia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Egypt",
  "El Salvador",
  "United Arab Emirates",
  "Ecuador",
  "Eritrea",
  "Slovakia",
  "Slovenia",
  "Spain",
  "United States",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Philippines",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Ghana",
  "Georgia",
  "Gibraltar",
  "United Kingdom",
  "Grenada",
  "Greece",
  "Greenland",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guyana",
  "French Guiana",
  "Guinea",
  "Equatorial Guinea",
  "Guinea-Bissau",
  "Haiti",
  "Netherlands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Yemen",
  "Bouvet Island",
  "Ascension Island",
  "Clipperton Island",
  "Isle of Man",
  "Christmas Island",
  "Pitcairn Islands",
  "Réunion",
  "Åland Islands",
  "Cayman Islands",
  "Cocos (Keeling) Islands",
  "Cook Islands",
  "Faroe Islands",
  "South Georgia & South Sandwich Islands",
  "Heard & McDonald Islands",
  "Falkland Islands (Islas Malvinas)",
  "Northern Mariana Islands",
  "Marshall Islands",
  "U.S. Outlying Islands",
  "Norfolk Island",
  "Solomon Islands",
  "Seychelles",
  "Tokelau",
  "Turks & Caicos Islands",
  "U.S. Virgin Islands",
  "British Virgin Islands",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Iceland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Laos",
  "Lesotho",
  "Latvia",
  "Lebanon",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "North Macedonia",
  "Madagascar",
  "Malaysia",
  "Malawi",
  "Maldives",
  "Mali",
  "Malta",
  "Morocco",
  "Martinique",
  "Mauritius",
  "Mauritania",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Mozambique",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norway",
  "New Caledonia",
  "New Zealand",
  "Oman",
  "Caribbean Netherlands",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Pakistan",
  "Paraguay",
  "Peru",
  "French Polynesia",
  "Poland",
  "Puerto Rico",
  "Portugal",
  "Qatar",
  "Kenya",
  "Kyrgyzstan",
  "Central African Republic",
  "Congo (DRC)",
  "Dominican Republic",
  "Czech Republic",
  "Romania",
  "Rwanda",
  "Russia",
  "Western Sahara",
  "St. Pierre & Miquelon",
  "American Samoa",
  "Samoa",
  "San Marino",
  "St. Helena",
  "St. Lucia",
  "St. Barthélemy",
  "St. Kitts & Nevis",
  "St. Martin",
  "Sint Maarten",
  "São Tomé & Príncipe",
  "St. Vincent & Grenadines",
  "Senegal",
  "Sierra Leone",
  "Serbia",
  "Syria",
  "Somalia",
  "Sri Lanka",
  "Eswatini",
  "Sudan",
  "South Sudan",
  "Sweden",
  "Switzerland",
  "Suriname",
  "Svalbard & Jan Mayen",
  "Tajikistan",
  "Thailand",
  "Taiwan",
  "Tanzania",
  "British Indian Ocean Territory",
  "French Southern Territories",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tristan da Cunha",
  "Tunisia",
  "Turkmenistan",
  "Turkey",
  "Tuvalu",
  "Ukraine",
  "Uganda",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis & Futuna",
  "Zambia",
  "Zimbabwe",
].sort();

function CheckoutForm({ onSubmit, onValidityChange }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    ["name", "email", "phone", "address", "zipCode", "city", "country"].forEach(
      (field) => {
        if (!formData[field].trim()) newErrors[field] = "Required";
      }
    );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone";
    }
    n;
    if (formData.paymentMethod === "e-Money") {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "Required";
      if (!formData.eMoneyPin) newErrors.eMoneyPin = "Required";

      if (
        formData.eMoneyNumber &&
        !/^\d{16}$/.test(formData.eMoneyNumber.replace(/\s/g, ""))
      ) {
        newErrors.eMoneyNumber = "Must be 16 digits";
      }
      if (formData.eMoneyPin && !/^\d{4}$/.test(formData.eMoneyPin)) {
        newErrors.eMoneyPin = "Must be 4 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  useEffect(() => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "address",
      "zipCode",
      "city",
      "country",
    ];

    const isValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (formData.paymentMethod === "e-Money") {
      if (!formData.eMoneyNumber || !formData.eMoneyPin) {
        onValidityChange(false);
        return;
      }
    }

    onValidityChange(isValid);
  }, [formData, onValidityChange]);

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider">
        Billing Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
            {errors.name && (
              <span className="text-red-500 text-xs">({errors.name})</span>
            )}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Alexie Ward"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
            {errors.email && (
              <span className="text-red-500 text-xs">({errors.email})</span>
            )}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="alexei@mail.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
            {errors.phone && (
              <span className="text-red-500 text-xs">({errors.phone})</span>
            )}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+1 202-555-0136"
          />
        </div>
      </div>

      <h2 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider">
        Shipping Info
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address
          {errors.address && (
            <span className="text-red-500 text-xs">({errors.address})</span>
          )}
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="1137 William Avenue"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
            {errors.zipCode && (
              <span className="text-red-500 text-xs">({errors.zipCode})</span>
            )}
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded ${
              errors.zipCode ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="10001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
            {errors.city && (
              <span className="text-red-500 text-xs">({errors.city})</span>
            )}
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="New York"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
            {errors.country && (
              <span className="text-red-500 text-xs">({errors.country})</span>
            )}
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded appearance-none text-gray-300${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">United State</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider">
        Payment Details
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <div className="space-y-4">
            <label className="flex items-center p-4 border rounded hover:border-orange-300 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="e-Money"
                checked={formData.paymentMethod === "e-Money"}
                onChange={handleChange}
                className="h-5 w-5 text-orange-500"
              />
              <span className="ml-3 font-medium">e-Money</span>
            </label>
            <label className="flex items-center p-4 border rounded hover:border-orange-300 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={formData.paymentMethod === "Cash on Delivery"}
                onChange={handleChange}
                className="h-5 w-5 text-orange-500"
              />
              <span className="ml-3 font-medium">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {formData.paymentMethod === "e-Money" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                e-Money Number
                {errors.eMoneyNumber && (
                  <span className="text-red-500 text-xs">
                    ({errors.eMoneyNumber})
                  </span>
                )}
              </label>
              <input
                type="text"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded ${
                  errors.eMoneyNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="238521993"
                maxLength="16"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                e-Money PIN
                {errors.eMoneyPin && (
                  <span className="text-red-500 text-xs">
                    ({errors.eMoneyPin})
                  </span>
                )}
              </label>
              <input
                type="password"
                name="eMoneyPin"
                value={formData.eMoneyPin}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded ${
                  errors.eMoneyPin ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="6891"
                maxLength="4"
              />
            </div>
          </div>
        )}

        {formData.paymentMethod === "Cash on Delivery" && (
          <div className="flex items-start p-4 bg-gray-50 rounded">
            <div className="mr-4 text-3xl">💵</div>
            <p className="text-gray-600 text-sm">
              Pay with cash when our delivery courier arrives. Ensure your
              address is correct.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default CheckoutForm;
