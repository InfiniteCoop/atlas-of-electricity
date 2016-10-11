google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {

  // actual area chart data
  var data = google.visualization.arrayToDataTable([
      ['Year', 'Fossil fuels', 'Nuclear ', 'Hydroelectric & other renewables'],
      ['1949',200965,0,95159  ],
      ['1950',232813,0,101274  ],
      ['1951',270531,0,104767  ],
      ['1952',293640,0,110190  ],
      ['1953',337042,0,110007  ],
      ['1954',364354,0,111903  ],
      ['1955',433786,0,116512  ],
      ['1956',478487,0,125388  ],
      ['1957',501098,10,133535  ],
      ['1958',504497,165,143790  ],
      ['1959',571883,188,141307  ],
      ['1960',609024,518,149614  ],
      ['1961',639676,1692,155756  ],
      ['1962',683430,2270,172244  ],
      ['1963',747530,3212,169286  ],
      ['1964',803222,3343,180653  ],
      ['1965',857287,3657,197442  ],
      ['1966',943553,5520,198459  ],
      ['1967',984560,7655,225581  ],
      ['1968',1093613,12528,226684  ],
      ['1969',1177127,13928,254403  ],
      ['1970',1261468,21804,251839  ],
      ['1971',1307359,38105,270390  ],
      ['1972',1421175,54091,277712  ],
      ['1973',1502853,83479,277725  ],
      ['1974',1449429,113976,306915  ],
      ['1975',1441660,172505,306590  ],
      ['1976',1559003,191104,290807  ],
      ['1977',1648902,250883,227662  ],
      ['1978',1646193,276403,286780  ],
      ['1979',1708047,255155,287463  ],
      ['1980',1753796,251116,284688  ],
      ['1981',1755401,272674,269899  ],
      ['1982',1644061,282773,317538  ],
      ['1983',1678021,293677,341747  ],
      ['1984',1758882,327634,332950  ],
      ['1985',1794276,383691,295035  ],
      ['1986',1770925,414038,305508  ],
      ['1987',1854895,455270,265123  ],
      ['1988',1942353,526973,238085  ],
      ['1989',2108629,529355,325333  ],
      ['1990',2103620,576862,357238  ],
      ['1991',2103263,612565,357773  ],
      ['1992',2138705,618776,326858  ],
      ['1993',2230741,610291,356707  ],
      ['1994',2270133,640440,336661  ],
      ['1995',2293908,673402,384798  ],
      ['1996',2346018,674729,422958  ],
      ['1997',2430320,628644,433636  ],
      ['1998',2547065,673702,400424  ],
      ['1999',2569670,728254,398959  ],
      ['2000',2692478,753893,356479  ],
      ['2001',2677005,768826,287730  ],
      ['2002',2730166,780064,343438  ],
      ['2003',2758650,763733,355293  ],
      ['2004',2824798,788528,351485  ],
      ['2005',2909522,781986,357651  ],
      ['2006',2885295,787219,385772  ],
      ['2007',2992238,806425,352747  ],
      ['2008',2926731,806208,380932  ],
      ['2009',2726452,798855,417724  ],
      ['2010',2883361,806968,427376  ],
      ['2011',2788867,790204,513336  ],
      ['2012',2775024,769331,494573  ],
      ['2013',2745968,789016,522073  ],
      ['2014',2750573,797166,538579  ],
      ['2015',2732532,797178,549527  ]
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
    colors: ['#a80000', '#70A800', '#004ABA', '#365884', '#AAC38A', '#4C0073'],
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
      ['Year', 'Fossil fuels', 'Nuclear ', 'Hydroelectric & other renewables'],
  ['1949',67.9,0,32.1  ],
  ['1950',69.7,0,30.3  ],
  ['1951',72.1,0,27.9  ],
  ['1952',72.7,0,27.3  ],
  ['1953',75.4,0,24.6  ],
  ['1954',76.5,0,23.5  ],
  ['1955',78.8,0,21.2  ],
  ['1956',79.2,0,20.8  ],
  ['1957',79,0,21  ],
  ['1958',77.8,0,22.2  ],
  ['1959',80.2,0,19.8  ],
  ['1960',80.2,0.1,19.7  ],
  ['1961',80.2,0.2,19.5  ],
  ['1962',79.7,0.3,20.1  ],
  ['1963',81.3,0.3,18.4  ],
  ['1964',81.4,0.3,18.3  ],
  ['1965',81,0.3,18.7  ],
  ['1966',82.2,0.5,17.3  ],
  ['1967',80.8,0.6,18.5  ],
  ['1968',82.1,0.9,17  ],
  ['1969',81.4,1,17.6  ],
  ['1970',82.2,1.4,16.4  ],
  ['1971',80.9,2.4,16.7  ],
  ['1972',81.1,3.1,15.8  ],
  ['1973',80.6,4.5,14.9  ],
  ['1974',77.5,6.1,16.4  ],
  ['1975',75.1,9,16  ],
  ['1976',76.4,9.4,14.2  ],
  ['1977',77.5,11.8,10.7  ],
  ['1978',74.5,12.5,13  ],
  ['1979',75.9,11.3,12.8  ],
  ['1980',76.6,11,12.4  ],
  ['1981',76.4,11.9,11.7  ],
  ['1982',73.3,12.6,14.1  ],
  ['1983',72.5,12.7,14.8  ],
  ['1984',72.7,13.5,13.8  ],
  ['1985',72.6,15.5,11.9  ],
  ['1986',71.1,16.6,12.3  ],
  ['1987',72,17.7,10.3  ],
  ['1988',71.7,19.5,8.8  ],
  ['1989',71.2,17.9,11  ],
  ['1990',69.2,19,11.8  ],
  ['1991',68.4,19.9,11.6  ],
  ['1992',69.3,20.1,10.6  ],
  ['1993',69.8,19.1,11.2  ],
  ['1994',69.9,19.7,10.4  ],
  ['1995',68.4,20.1,11.5  ],
  ['1996',68.1,19.6,12.3  ],
  ['1997',69.6,18,12.4  ],
  ['1998',70.3,18.6,11.1  ],
  ['1999',69.5,19.7,10.8  ],
  ['2000',70.8,19.8,9.4  ],
  ['2001',71.7,20.6,7.7  ],
  ['2002',70.8,20.2,8.9  ],
  ['2003',71.1,19.7,9.2  ],
  ['2004',71.2,19.9,8.9  ],
  ['2005',71.9,19.3,8.8  ],
  ['2006',71.1,19.4,9.5  ],
  ['2007',72.1,19.4,8.5  ],
  ['2008',71.1,19.6,9.3  ],
  ['2009',69.1,20.3,10.6  ],
  ['2010',70,19.6,10.4  ],
  ['2011',68.1,19.3,12.5  ],
  ['2012',68.7,19,12.2  ],
  ['2013',67.7,19.4,12.9  ],
  ['2014',67.3,19.5,13.2  ],
  ['2015',67,19.5,13.5  ]
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
      ['Year', 'Fossil fuels', 'Nuclear ', 'Hydroelectric & other renewables'],
      ['1949',200965,0,95159  ],
      ['1950',232813,0,101274  ],
      ['1951',270531,0,104767  ],
      ['1952',293640,0,110190  ],
      ['1953',337042,0,110007  ],
      ['1954',364354,0,111903  ],
      ['1955',433786,0,116512  ],
      ['1956',478487,0,125388  ],
      ['1957',501098,10,133535  ],
      ['1958',504497,165,143790  ],
      ['1959',571883,188,141307  ],
      ['1960',609024,518,149614  ],
      ['1961',639676,1692,155756  ],
      ['1962',683430,2270,172244  ],
      ['1963',747530,3212,169286  ],
      ['1964',803222,3343,180653  ],
      ['1965',857287,3657,197442  ],
      ['1966',943553,5520,198459  ],
      ['1967',984560,7655,225581  ],
      ['1968',1093613,12528,226684  ],
      ['1969',1177127,13928,254403  ],
      ['1970',1261468,21804,251839  ],
      ['1971',1307359,38105,270390  ],
      ['1972',1421175,54091,277712  ],
      ['1973',1502853,83479,277725  ],
      ['1974',1449429,113976,306915  ],
      ['1975',1441660,172505,306590  ],
      ['1976',1559003,191104,290807  ],
      ['1977',1648902,250883,227662  ],
      ['1978',1646193,276403,286780  ],
      ['1979',1708047,255155,287463  ],
      ['1980',1753796,251116,284688  ],
      ['1981',1755401,272674,269899  ],
      ['1982',1644061,282773,317538  ],
      ['1983',1678021,293677,341747  ],
      ['1984',1758882,327634,332950  ],
      ['1985',1794276,383691,295035  ],
      ['1986',1770925,414038,305508  ],
      ['1987',1854895,455270,265123  ],
      ['1988',1942353,526973,238085  ],
      ['1989',2108629,529355,325333  ],
      ['1990',2103620,576862,357238  ],
      ['1991',2103263,612565,357773  ],
      ['1992',2138705,618776,326858  ],
      ['1993',2230741,610291,356707  ],
      ['1994',2270133,640440,336661  ],
      ['1995',2293908,673402,384798  ],
      ['1996',2346018,674729,422958  ],
      ['1997',2430320,628644,433636  ],
      ['1998',2547065,673702,400424  ],
      ['1999',2569670,728254,398959  ],
      ['2000',2692478,753893,356479  ],
      ['2001',2677005,768826,287730  ],
      ['2002',2730166,780064,343438  ],
      ['2003',2758650,763733,355293  ],
      ['2004',2824798,788528,351485  ],
      ['2005',2909522,781986,357651  ],
      ['2006',2885295,787219,385772  ],
      ['2007',2992238,806425,352747  ],
      ['2008',2926731,806208,380932  ],
      ['2009',2726452,798855,417724  ],
      ['2010',2883361,806968,427376  ],
      ['2011',2788867,790204,513336  ],
      ['2012',2775024,769331,494573  ],
      ['2013',2745968,789016,522073  ],
      ['2014',2750573,797166,538579  ],
      ['2015',2732532,797178,549527  ]
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
