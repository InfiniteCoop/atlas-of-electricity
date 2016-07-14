google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  

  var data = google.visualization.arrayToDataTable([
['Year', 'Net electricity generation', 'Net electricity consumption'],
  ['1949',296124,254511  ],
  ['1950',334088,291443  ],
  ['1951',375298,330285  ],
  ['1952',403829,356164  ],
  ['1953',447049,396217  ],
  ['1954',476258,424164  ],
  ['1955',550299,496748  ],
  ['1956',603876,546280  ],
  ['1957',634642,575820  ],
  ['1958',648451,587863  ],
  ['1959',713379,646888  ],
  ['1960',759156,688075  ],
  ['1961',797124,721950  ],
  ['1962',857944,777600  ],
  ['1963',920028,832613  ],
  ['1964',987218,896059  ],
  ['1965',1058386,953789  ],
  ['1966',1147532,1035145  ],
  ['1967',1217796,1099217  ],
  ['1968',1332826,1202871  ],
  ['1969',1445458,1313833  ],
  ['1970',1535111,1392300  ],
  ['1971',1615854,1469540  ],
  ['1972',1752978,1595161  ],
  ['1973',1864057,1712909  ],
  ['1974',1870319,1705924  ],
  ['1975',1920755,1747091  ],
  ['1976',2040914,1855246  ],
  ['1977',2127447,1948361  ],
  ['1978',2209377,2017922  ],
  ['1979',2250665,2071099  ],
  ['1980',2289600,2094449  ],
  ['1981',2297973,2147103  ],
  ['1982',2244372,2086441  ],
  ['1983',2313446,2150955  ],
  ['1984',2419465,2285796  ],
  ['1985',2473002,2323974  ],
  ['1986',2490471,2368753  ],
  ['1987',2575288,2457272  ],
  ['1988',2707411,2578062  ],
  ['1989',2967146,2755635  ],
  ['1990',3037827,2837084  ],
  ['1991',3073799,2886060  ],
  ['1992',3083882,2897207  ],
  ['1993',3197191,3000700  ],
  ['1994',3247522,3080888  ],
  ['1995',3353487,3163963  ],
  ['1996',3444188,3253765  ],
  ['1997',3492172,3301849  ],
  ['1998',3620295,3425097  ],
  ['1999',3694810,3483716  ],
  ['2000',3802105,3592357  ],
  ['2001',3736644,3557107  ],
  ['2002',3858452,3631650  ],
  ['2003',3883185,3662029  ],
  ['2004',3970555,3715949  ],
  ['2005',4055423,3810984  ],
  ['2006',4064702,3816845  ],
  ['2007',4156745,3890231  ],
  ['2008',4119388,3866161  ],
  ['2009',3950331,3723733  ],
  ['2010',4125060,3886752  ],
  ['2011',4100141,3882600  ],
  ['2012',4047765,3832306  ],
  ['2013',4065964,3868330  ],
  ['2014',4093606,3903274  ],
  ['2015',4087381,3863275  ]
  ]);
  
  var formatter = new google.visualization.NumberFormat({
    suffix: ' gigawatt hours (GWh)',
    fractionDigits: 0
  });

  formatter.format(data, 1);
  formatter.format(data, 2);


  // set chart options
  var options = {
    title: 'Electricity Generation vs. Consumption',

      backgroundColor: 'transparent',
    colors: ['#AAC38A', '#4C0073', '#a80000', '#365884', '#AAC38A', '#4C0073'],
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
      title: 'Gigawatt hours (GWh)',
      format: '#,###',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
      },
      textStyle: {
        fontSize: 13
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

  var areaChart = new google.visualization.LineChart(document.getElementById('chart'));
  areaChart.draw(data, options);

  function resizeChart () {
    areaChart.draw(data, options);
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