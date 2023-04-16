// sample data
var data = {
  labels: [
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ],

  datasets: [
    {
      label: "% Primary energy comes from Geo Biomass Energy (TWh) - World",
      data: [
        17.985231, 19.806007, 19.98657, 22.120045, 23.257965, 25.701897,
        27.888294, 29.888775, 32.09585, 34.289085, 34.81208, 38.79105, 40.89204,
        43.29665, 46.499256, 49.717464, 53.48617, 61.708954, 68.35493, 76.34615,
        79.07158, 85.91538, 91.96002, 94.601906, 104.530365, 117.1966,
        122.234406, 131.13734, 135.51932, 140.64368, 146.61673, 150.68289,
        161.39073, 168.1891, 176.61984, 184.7502, 191.8941, 206.54245,
        218.14294, 235.69623, 255.08171, 271.76044, 294.84308, 315.41873,
        338.81403, 380.77747, 402.35526, 435.71637, 470.9959, 510.2568,
        551.1013, 559.9602, 596.4205, 643.03204, 674.74536, 703.91644,
        762.78265,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],

      borderWidth: 1,
    },
    {
      label:
        "% Primary energy comes from Solar Generation Energy (TWh) - India",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.003,
        0.006311111, 0.011747475, 0.015183838, 0.01060303, 0.01019596,
        0.26222324, 0.38829494, 0.5052029, 0.4665851, 0.55669755, 0.59701395,
        0.6388138, 0.69920796, 0.7495848, 0.811789, 0.9051969, 1.0589701,
        1.4232854, 1.7990196, 2.2551038, 2.9715216, 4.18711, 5.761839,
        7.8179097, 12.697423, 21.073973, 33.91127, 65.58232, 101.54088,
        138.60146, 196.3565, 254.73972, 327.58423, 445.46628, 576.2309,
        703.94977, 846.2294, 1032.5012,
      ],

      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],

      borderWidth: 1,
    },
    {
      label: "% Primary energy comes from Wind Generation Energy (TWh) - World",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.003, 0.006, 0.0105, 0.0105,
        0.0185, 0.03279495, 0.044755556, 0.064220205, 0.13883132, 0.19537677,
        0.3315798, 2.6497767, 3.6324706, 4.0867066, 4.733212, 5.697569, 7.12293,
        8.261924, 9.2046, 12.017817, 15.92126, 21.216173, 31.407434, 38.38145,
        52.344784, 63.285397, 85.62619, 104.64433, 133.49828, 171.5067,
        221.41104, 276.79254, 346.4246, 440.38376, 530.49646, 635.5051,
        705.8537, 831.34375, 962.1017, 1140.3931, 1269.9792, 1420.5441,
        1596.4282, 1861.9398,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],

      borderWidth: 1,
    },
    {
      label:
        "% Primary energy comes from Hydro Generation energy (TWh) - World",
      data: [
        923.19806, 983.81696, 1005.7424, 1059.2887, 1121.7424, 1174.6497,
        1227.2422, 1284.629, 1303.013, 1431.2317, 1448.8834, 1443.1366,
        1491.6724, 1614.3823, 1695.1862, 1731.6493, 1768.9036, 1800.9081,
        1877.7689, 1941.3734, 1979.782, 2006.5929, 2033.778, 2098.947,
        2087.7932, 2158.7434, 2209.0586, 2208.4602, 2341.4575, 2356.1958,
        2483.679, 2517.0254, 2561.03, 2580.9958, 2600.5432, 2646.667, 2578.682,
        2626.26, 2622.8213, 2816.4531, 2911.2815, 3022.0857, 3072.8923,
        3251.431, 3246.414, 3429.21, 3492.6719, 3641.911, 3788.3323, 3889.022,
        3878.3682, 4012.4524, 4069.9827, 4183.1665, 4231.377, 4345.99,
        4273.8276,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],

      borderWidth: 1,
    },
  ],
};

// set options for the chart
var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var chart = new Chart(document.getElementById("worldrenewable-energy"), {
  type: "line",
  data: data,
  options: options,
});
