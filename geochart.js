// follow the format/template, don't forget to put comment
//https://github.com/emrahonder/All-Countries-For-Google-GeoChart/blob/master/geochart-country-name.html

var species = [
  {
    "animal": "rhinos",
    "countries": [
        {
            "country": "South Africa",
            "population": 16000
        },
        {
            "country": "Zimbabwe",
            "population": 1000
        },
        {
            "country": "Kenya",
            "population": 1258
        }
    ]
  },
  {
    "animal": "Sea Turtles",
    "countries": [
        {
            "country": "Costa Rica",
            "population": 550000
        },
        {
            "country": "Mexico",
            "population": 450000
        },
        {
            "country": "India",
            "population": 135000
        }
    ]
  },
  {
    "animal": "Sea Turtles",
    "countries": [
        {
            "country": "Costa Rica",
            "population": 550000
        },
        {
            "country": "Mexico",
            "population": 450000
        },
        {
            "country": "India",
            "population": 135000
        }
    ]
  },
  {
    "animal": "Sea Turtles",
    "countries": [
        {
            "country": "Costa Rica",
            "population": 550000
        },
        {
            "country": "Mexico",
            "population": 450000
        },
        {
            "country": "India",
            "population": 135000
        }
    ]
  },
  {
    "animal": "Sea Turtles",
    "countries": [
        {
            "country": "Costa Rica",
            "population": 550000
        },
        {
            "country": "Mexico",
            "population": 450000
        },
        {
            "country": "India",
            "population": 135000
        }
    ]
  }
]

document.getElementById("list").innerHTML = "";

for (var i = 0; i < species.length; ++i) {
    document.getElementById("list").innerHTML += "<a href='#' class='link-item'>" + species[i].animal + "</a>";
}

// for (i = 0; i < species.length; i++) {
//   var node = document.createElement("a");
//   var space = document.createTextNode(" ");
//   node.innerHTML = species[i].animal;
//   node.onclick = "drawRegionsMap(" + i + ")"; //drawRegionsMap( value of i );
//   node.onclick = ;
//   document.getElementById("list").appendChild(node);
//   document.getElementById("list").appendChild(space);
// }

google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Population'],
      ['United States', 100]
    //   ['Germany', 200],
    //   ['United States', 300],
    //   ['Brazil', 400],
    //   ['Canada', 500],
    //   ['France', 600],
    //   ['Russia', 700],
    //   ['Australia', 600]
    ]);

    

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }