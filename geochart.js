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
    ],
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    //find a good image of species on web, right click, 'copy image link' or 'open image in new tab', make sure its just an image and black background, not a site and paste link here
    "info":[
        "https://en.wikipedia.org/wiki/Gorilla",
        "https://www.worldwildlife.org/species/gorilla",
        "https://www.britannica.com/animal/Gorilla-primate-genus",
    ],
    "donate":[
        "https://gorillafund.org/",
        "https://gorillafund.org/get-involved/",
        "https://www.gorillas.org/donate/",
        "https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/gorilla.aspx",
        "https://gracegorillas.org/grace-save-a-gorilla/"
    ]
    //learn more/research and donate links. if its taking over 2 minutes to get this many links, you are probably not doing it right and please let me know. it shouldn't be difficult.
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
    ],
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    "info":[

    ],
    "donate":[

    ]
  },
  {
    "animal": "Malayan Tiger",
    "countries": [
        {
            "country": "Malaysia",
            "population": 200
        }

    ],
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    "info":[
        
    ],
    "donate":[

    ]
  },
  {
    "animal": "Asian Elephant",
    "countries": [
        {
            "country": "Costa Rica",
            "population": 550000
        }
    ],
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    "info":[
        
    ],
    "donate":[

    ]
  },
  {
    "animal": "Mountain Gorilla",
    "countries": [
        {
            "country": "CD",
            // Congo/Congo (Democratic Republic of the)/Democratic Republic of the Congo doesn't work
            "population": 1000
        }
    ],
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    "info":[
        
    ],
    "donate":[

    ]
  },
  
]

document.getElementById("list").innerHTML = "";

for (var i = 0; i < species.length; ++i) {
    document.getElementById("list").innerHTML += "<a href='javascript:drawSpecies(" + i + ")' class='link-item'>" + species[i].animal + "</a>";
}

google.charts.load('current', {
    'packages':['geochart'],
  });


  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Population'],
    //   ['United States', 100]
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
  

  function drawSpecies(animal) {
    var pop = [
        ['Country', 'Population']
    ];

    for (var i=0; i<species[animal].countries.length; i++){
        pop.push([species[animal].countries[i].country, species[animal].countries[i].population]);
    }

    var data = google.visualization.arrayToDataTable(pop);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
    
  }