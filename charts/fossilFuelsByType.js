google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {

  // actual area chart data
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Coal', 'Natural gas', 'Petroleum', 'Other gases'],
    ['1949',135451.32,36966.709,28547.232,0  ],
    ['1950',154519.994,44559.159,33734.288,0  ],
    ['1951',185203.657,56615.678,28712.116,0  ],
    ['1952',195436.666,68453.088,29749.761,0  ],
    ['1953',218846.325,79790.975,38404.449,0  ],
    ['1954',239145.966,93688.271,31520.175,0  ],
    ['1955',301362.698,95285.441,37138.308,0  ],
    ['1956',338503.484,104037.208,35946.772,0  ],
    ['1957',346386.207,114212.525,40499.357,0  ],
    ['1958',344365.781,119759.302,40371.54,0  ],
    ['1959',378424.21,146619.391,46839.719,0  ],
    ['1960',403067.357,157969.787,47986.893,0  ],
    ['1961',421870.669,169285.998,48519.376,0  ],
    ['1962',450249.238,184301.293,48879.536,0  ],
    ['1963',493926.719,201602.073,52001.61,0  ],
    ['1964',526230.019,220038.479,56953.712,0  ],
    ['1965',570925.951,221559.434,64801.224,0  ],
    ['1966',613474.8,251151.562,78926.172,0  ],
    ['1967',630483.363,264805.785,89270.724,0  ],
    ['1968',684904.58,304432.723,104275.833,0  ],
    ['1969',706001.24,333278.945,137847.152,0  ],
    ['1970',704394.479,372890.063,184183.402,0  ],
    ['1971',713102.454,374030.784,220225.423,0  ],
    ['1972',771131.265,375747.796,274295.961,0  ],
    ['1973',847651.47,340858.192,314342.926,0  ],
    ['1974',828432.921,320065.088,300930.537,0  ],
    ['1975',852786.222,299778.408,289094.9,0  ],
    ['1976',944390.993,294623.911,319988.136,0  ],
    ['1977',985218.596,305504.859,358178.822,0  ],
    ['1978',975742.083,305390.836,365060.441,0  ],
    ['1979',1075037.091,329485.107,303525.209,0  ],
    ['1980',1161562.368,346239.9,245994.189,0  ],
    ['1981',1203203.232,345777.173,206420.775,0  ],
    ['1982',1192004.204,305259.749,146797.49,0  ],
    ['1983',1259424.279,274098.458,144498.593,0  ],
    ['1984',1341680.752,297393.596,119807.913,0  ],
    ['1985',1402128.125,291945.965,100202.273,0  ],
    ['1986',1385831.452,248508.433,136584.867,0  ],
    ['1987',1463781.289,272620.803,118492.571,0  ],
    ['1988',1540652.774,252800.704,148899.561,0  ],
    ['1989',1583779.139,352628.866,164358.52,7862.418  ],
    ['1990',1594011.479,372765.154,126460.202,10382.83  ],
    ['1991',1590622.748,381553.017,119751.573,11335.593  ],
    ['1992',1621206.039,404074.372,100154.163,13270.237  ],
    ['1993',1690070.232,414926.798,112788.18,12955.798  ],
    ['1994',1690693.864,460218.682,105900.983,13319.051  ],
    ['1995',1709426.468,496057.945,74554.065,13869.951  ],
    ['1996',1795195.593,455055.576,81411.225,14355.813  ],
    ['1997',1845015.736,479398.67,92554.873,13350.634  ],
    ['1998',1873515.69,531257.104,128800.173,13492.23  ],
    ['1999',1881087.224,556396.127,118060.838,14125.592  ],
    ['2000',1966264.596,601038.159,111220.965,13954.758  ],
    ['2001',1903955.942,639129.119,124880.221,9039.473  ],
    ['2002',1933130.354,691005.744,94567.395,11462.684  ],
    ['2003',1973736.752,649907.539,119405.643,15600.022  ],
    ['2004',1978300.549,710100.017,121145.057,15252.431  ],
    ['2005',2012873.046,760960.254,122225.017,13464.144  ],
    ['2006',1990511.135,816440.77,64166.414,14176.808  ],
    ['2007',2016455.584,896589.791,65738.978,13453.354  ],
    ['2008',1985801.247,882980.599,46242.612,11706.876  ],
    ['2009',1755904.253,920978.681,38936.515,10632.107  ],
    ['2010',1847290.279,987697.234,37061.013,11312.787  ],
    ['2011',1733430.005,1013688.929,30182.245,11566.2  ],
    ['2012',1514042.945,1225894.175,23189.542,11897.585  ],
    ['2013',1581114.716,1124835.56,27164.444,12852.937  ],
    ['2014',1581710.35,1126608.958,30231.862,12021.786  ],
    ['2015',1356057.298,1335067.936,28443.04,12963.458  ]
  ]);

var formatter = new google.visualization.NumberFormat({
  suffix: " gigawatt hours (GWh)",
  fractionDigits: 0
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);


  // set chart options
  var options = {
    title: '',

    backgroundColor: 'transparent',
    colors: ['#a80000', '#6C308C', '#00734C', '#8CBEFC', '#AAC38A', '#4C0073'],
    fontName: 'Questrial',

    chartArea: {
      width: "80%",
      height: "80%"
    },

    hAxis: {
      baselineColor: '#DDD',
      textStyle: {
        fontSize: 13
      },
      maxAlternation: 1,
      minTextSpacing: 104,
    },
    
    vAxis: {
      title: '',
      format: '#,###',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
      },
      textStyle: {
        fontSize: 12
      }
    },

    tooltip: {
      textStyle: {
        color: '#333',
        fontSize: 13
      }, 
      showColorCode: true
    },

    crosshair : {
      trigger: 'focus',
      opacity: 0.1
    },

    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 13
      }
    },

    animation: {
      duration: 1200,
      easing: 'out',
      startup: true
    },

    lineWidth: 2.5,
    pointSize: 4,
  };


  var lineChart = new google.visualization.LineChart(document.getElementById('chart'));

  lineChart.draw(data, options);

  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");

  button2.onclick = function() {
    console.log("Clicked!");
    button2.classList.add("disabled");
    button1.classList.remove("disabled");
    data = google.visualization.arrayToDataTable([
      ['Year', 'Coal', 'Natural gas', 'Petroleum', 'Other gases'],
      ['1949',67.4,18.4,14.2,0  ],
      ['1950',66.4,19.1,14.5,0  ],
      ['1951',68.5,20.9,10.6,0  ],
      ['1952',66.6,23.3,10.1,0  ],
      ['1953',64.9,23.7,11.4,0  ],
      ['1954',65.6,25.7,8.7,0  ],
      ['1955',69.5,22,8.6,0  ],
      ['1956',70.7,21.7,7.5,0  ],
      ['1957',69.1,22.8,8.1,0  ],
      ['1958',68.3,23.7,8,0  ],
      ['1959',66.2,25.6,8.2,0  ],
      ['1960',66.2,25.9,7.9,0  ],
      ['1961',66,26.5,7.6,0  ],
      ['1962',65.9,27,7.2,0  ],
      ['1963',66.1,27,7,0  ],
      ['1964',65.5,27.4,7.1,0  ],
      ['1965',66.6,25.8,7.6,0  ],
      ['1966',65,26.6,8.4,0  ],
      ['1967',64,26.9,9.1,0  ],
      ['1968',62.6,27.8,9.5,0  ],
      ['1969',60,28.3,11.7,0  ],
      ['1970',55.8,29.6,14.6,0  ],
      ['1971',54.5,28.6,16.8,0  ],
      ['1972',54.3,26.4,19.3,0  ],
      ['1973',56.4,22.7,20.9,0  ],
      ['1974',57.2,22.1,20.8,0  ],
      ['1975',59.2,20.8,20.1,0  ],
      ['1976',60.6,18.9,20.5,0  ],
      ['1977',59.7,18.5,21.7,0  ],
      ['1978',59.3,18.6,22.2,0  ],
      ['1979',62.9,19.3,17.8,0  ],
      ['1980',66.2,19.7,14,0  ],
      ['1981',68.5,19.7,11.8,0  ],
      ['1982',72.5,18.6,8.9,0  ],
      ['1983',75.1,16.3,8.6,0  ],
      ['1984',76.3,16.9,6.8,0  ],
      ['1985',78.1,16.3,5.6,0  ],
      ['1986',78.3,14,7.7,0  ],
      ['1987',78.9,14.7,6.4,0  ],
      ['1988',79.3,13,7.7,0  ],
      ['1989',75.1,16.7,7.8,0.4  ],
      ['1990',75.8,17.7,6,0.5  ],
      ['1991',75.6,18.1,5.7,0.5  ],
      ['1992',75.8,18.9,4.7,0.6  ],
      ['1993',75.8,18.6,5.1,0.6  ],
      ['1994',74.5,20.3,4.7,0.6  ],
      ['1995',74.5,21.6,3.3,0.6  ],
      ['1996',76.5,19.4,3.5,0.6  ],
      ['1997',75.9,19.7,3.8,0.5  ],
      ['1998',73.6,20.9,5.1,0.5  ],
      ['1999',73.2,21.7,4.6,0.5  ],
      ['2000',73,22.3,4.1,0.5  ],
      ['2001',71.1,23.9,4.7,0.3  ],
      ['2002',70.8,25.3,3.5,0.4  ],
      ['2003',71.5,23.6,4.3,0.6  ],
      ['2004',70,25.1,4.3,0.5  ],
      ['2005',69.2,26.2,4.2,0.5  ],
      ['2006',69,28.3,2.2,0.5  ],
      ['2007',67.4,30,2.2,0.4  ],
      ['2008',67.9,30.2,1.6,0.4  ],
      ['2009',64.4,33.8,1.4,0.4  ],
      ['2010',64.1,34.3,1.3,0.4  ],
      ['2011',62.2,36.3,1.1,0.4  ],
      ['2012',54.6,44.2,0.8,0.4  ],
      ['2013',57.6,41,1,0.5  ],
      ['2014',57.5,41,1.1,0.4  ],
      ['2015',49.6,48.9,1,0.5  ]
    ]);

var formatter = new google.visualization.NumberFormat({
  suffix: "%",
  fractionDigits: 1
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);

resizeChart();
};

button1.onclick = function() {
  console.log("Clicked!");
  button1.classList.add("disabled");
  button2.classList.remove("disabled");
  data = google.visualization.arrayToDataTable([
    ['Year', 'Coal', 'Natural gas', 'Petroleum', 'Other gases'],
    ['1949',135451.32,36966.709,28547.232,0  ],
    ['1950',154519.994,44559.159,33734.288,0  ],
    ['1951',185203.657,56615.678,28712.116,0  ],
    ['1952',195436.666,68453.088,29749.761,0  ],
    ['1953',218846.325,79790.975,38404.449,0  ],
    ['1954',239145.966,93688.271,31520.175,0  ],
    ['1955',301362.698,95285.441,37138.308,0  ],
    ['1956',338503.484,104037.208,35946.772,0  ],
    ['1957',346386.207,114212.525,40499.357,0  ],
    ['1958',344365.781,119759.302,40371.54,0  ],
    ['1959',378424.21,146619.391,46839.719,0  ],
    ['1960',403067.357,157969.787,47986.893,0  ],
    ['1961',421870.669,169285.998,48519.376,0  ],
    ['1962',450249.238,184301.293,48879.536,0  ],
    ['1963',493926.719,201602.073,52001.61,0  ],
    ['1964',526230.019,220038.479,56953.712,0  ],
    ['1965',570925.951,221559.434,64801.224,0  ],
    ['1966',613474.8,251151.562,78926.172,0  ],
    ['1967',630483.363,264805.785,89270.724,0  ],
    ['1968',684904.58,304432.723,104275.833,0  ],
    ['1969',706001.24,333278.945,137847.152,0  ],
    ['1970',704394.479,372890.063,184183.402,0  ],
    ['1971',713102.454,374030.784,220225.423,0  ],
    ['1972',771131.265,375747.796,274295.961,0  ],
    ['1973',847651.47,340858.192,314342.926,0  ],
    ['1974',828432.921,320065.088,300930.537,0  ],
    ['1975',852786.222,299778.408,289094.9,0  ],
    ['1976',944390.993,294623.911,319988.136,0  ],
    ['1977',985218.596,305504.859,358178.822,0  ],
    ['1978',975742.083,305390.836,365060.441,0  ],
    ['1979',1075037.091,329485.107,303525.209,0  ],
    ['1980',1161562.368,346239.9,245994.189,0  ],
    ['1981',1203203.232,345777.173,206420.775,0  ],
    ['1982',1192004.204,305259.749,146797.49,0  ],
    ['1983',1259424.279,274098.458,144498.593,0  ],
    ['1984',1341680.752,297393.596,119807.913,0  ],
    ['1985',1402128.125,291945.965,100202.273,0  ],
    ['1986',1385831.452,248508.433,136584.867,0  ],
    ['1987',1463781.289,272620.803,118492.571,0  ],
    ['1988',1540652.774,252800.704,148899.561,0  ],
    ['1989',1583779.139,352628.866,164358.52,7862.418  ],
    ['1990',1594011.479,372765.154,126460.202,10382.83  ],
    ['1991',1590622.748,381553.017,119751.573,11335.593  ],
    ['1992',1621206.039,404074.372,100154.163,13270.237  ],
    ['1993',1690070.232,414926.798,112788.18,12955.798  ],
    ['1994',1690693.864,460218.682,105900.983,13319.051  ],
    ['1995',1709426.468,496057.945,74554.065,13869.951  ],
    ['1996',1795195.593,455055.576,81411.225,14355.813  ],
    ['1997',1845015.736,479398.67,92554.873,13350.634  ],
    ['1998',1873515.69,531257.104,128800.173,13492.23  ],
    ['1999',1881087.224,556396.127,118060.838,14125.592  ],
    ['2000',1966264.596,601038.159,111220.965,13954.758  ],
    ['2001',1903955.942,639129.119,124880.221,9039.473  ],
    ['2002',1933130.354,691005.744,94567.395,11462.684  ],
    ['2003',1973736.752,649907.539,119405.643,15600.022  ],
    ['2004',1978300.549,710100.017,121145.057,15252.431  ],
    ['2005',2012873.046,760960.254,122225.017,13464.144  ],
    ['2006',1990511.135,816440.77,64166.414,14176.808  ],
    ['2007',2016455.584,896589.791,65738.978,13453.354  ],
    ['2008',1985801.247,882980.599,46242.612,11706.876  ],
    ['2009',1755904.253,920978.681,38936.515,10632.107  ],
    ['2010',1847290.279,987697.234,37061.013,11312.787  ],
    ['2011',1733430.005,1013688.929,30182.245,11566.2  ],
    ['2012',1514042.945,1225894.175,23189.542,11897.585  ],
    ['2013',1581114.716,1124835.56,27164.444,12852.937  ],
    ['2014',1581710.35,1126608.958,30231.862,12021.786  ],
    ['2015',1356057.298,1335067.936,28443.04,12963.458  ]
  ]);

var formatter = new google.visualization.NumberFormat({
  suffix: " gigawatt hours (GWh)",
  fractionDigits: 0
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);


resizeChart();
};

function resizeChart () {
  lineChart.draw(data, options);
}

if (document.addEventListener) {
  window.addEventListener('resize', resizeChart);
}
else if (document.attachEvent) {
  window.attachEvent('onresize', resizeChart);
}
else {
  window.resize = resizeChart;
}
}