var entity = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Angola",
  "Antigua and Barbuda",
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
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Faeroe Islands",
  "Falkland Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South America",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Virgin Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Western Sahara",
  "World",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

var consumption = [
  952.46204, 11293.816, 16271.601, 30405.38, 3373.5918, 33084.12, 20802.248,
  16293.592, 51107.438, 66210.4, 48223.145, 17654.637, 39636.062, 159474.5,
  2734.3862, 25134.729, 31923.438, 65096.242, 9276.503, 2384.0408, 50639.293,
  29170.91, 7762.246, 20694.078, 9208.824, 16467.885, 23027.105, 120314.98,
  29794.377, 918.21844, 309.50797, 4062.9436, 1820.6459, 108308.13, 7411.0205,
  50498.695, 299.17163, 456.56238, 25313.426, 28116.959, 10679.629, 1685.7295,
  4573.193, 28596.066, 13062.923, 2370.8738, 23200.73, 9622.593, 26442.418,
  45351.72, 388.12585, 33746.93, 2355.324, 11049.784, 11284.445, 12183.461,
  9919.544, 7265.09, 14738.115, 944.68146, 47141.387, 5574.079, 926.7454,
  75477.11, 55487.023, 9343.045, 59288.46, 42424.598, 16917.729, 15741.969,
  7602.879, 972.6674, 19658.654, 44441.184, 3178.9197, 29416.262, 62939.25,
  10640.755, 21730.5, 44416.324, 5846.786, 1201.7599, 703.1271, 13960.689,
  1174.2875, 5678.938, 45987.445, 28141.18, 175527.75, 6858.1797, 9011.873,
  37688.18, 14870.865, 38134.598, 35090.04, 30491.9, 15258.877, 40868.69,
  10842.929, 44966.754, 1908.0554, 2592.4211, 15994.236, 107970.18, 10424.712,
  21322.256, 23379.492, 18513.482, 2189.2104, 1100.831, 26684.338, 24628.977,
  76271.39, 23023.49, 662.6856, 523.41595, 37846.984, 18410.123, 1232.1189,
  80167.48, 24816.326, 4105.001, 22800, 16835.797, 6471.663, 13488.841,
  24283.242, 22563.396, 30173.104, 7257.274, 2383.8127, 3189.0923, 8908.718,
  21976.104, 1517.7913, 56760.367, 77884.74, 53204.344, 4293.878, 448.6711,
  2452.6533, 16592.62, 3682.8887, 14689.193, 0, 96304.086, 82253.63, 4404.6714,
  4049.5115, 29093.584, 3050.0098, 19847.37, 10407.2, 5097.7817, 30777.797,
  28478.04, 24878.516, 208448, 14915.876, 19839.049, 57223.547, 491.4472,
  9829.213, 23322.64, 15259.872, 62718.688, 8592.866, 7402.3364, 3418.4817,
  83662.83, 2753.4397, 27005.617, 44727.047, 512.99756, 167306, 33892.78,
  37905.92, 2022.5632, 227.57251, 25646.666, 16166.974, 67086.52, 745.9871,
  33764.863, 4996.2246, 2336.8125, 23374.662, 63260.46, 39156.453, 6221.1094,
  56543.227, 8087.8057, 947.1592, 21371.45, 1698.8424, 1181.881, 6664.306,
  127023.28, 10128, 21973.062, 64104.95, 22838.61, 0, 888.918, 21661.146,
  137143.8, 32725.4, 79479.8, 98535.74, 19797.732, 16212.647, 3140.479,
  20033.133, 12585.571, 1996.5897, 21014.164, 1477.3042, 3302.091, 3219.013,
];

var data = {
  labels: entity,
  datasets: [
    {
      label: "Primary Energy Consumption per Capita 2019",
      data: consumption,
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ],
};

var options = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Country",
          fontSize: 21,
        },
        ticks: {
          fontSize: 14,
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "kWh/person",
          fontSize: 21,
        },
        ticks: {
          fontSize: 14,
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Primary Energy Consumption per Capita (kWh/person)",
    fontSize: 20,
  },
  legend: {
    display: false,
  },
};

var ctx = document.getElementById("Data-2019").getContext("2d");
var chart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
