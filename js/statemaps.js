var json_link='';
var user;

var my_map = new Datamap({
  element: document.getElementById('display-map'),
  scope: 'usa',
  popupTemplate: function(geography, dataUrl) {
    return '<div class="hoverinfo">' + geography.properties.name + 'Party Scale:' +  dataUrl.partyScale + ' '
  },
  fills: {
    'Heavy Democrat': '#ffffff',
    'Democrat': '#333333',
    'Slight Democrat': '#444444',
    'Neutral': '#555555',
    'Slight Republican': '#EAA9A8',
    'Republican': '#CA5E5B',
    'Heavy Republican': '#CA5E5B',
    defaultFill: '#eeeea4'
  },
  dataType: 'json',
  dataUrl: 'https://api.myjson.com/bins/14x76f'
});
my_map.labels()
console.log('map labels:', my_map.options.dataUrl);

function choose(choice){
    user = choice;
    json_link = change_json(user);
    //console.log('json_link:', json_link);
    var json_obj = JSON.parse(Get(json_link));
    //console.log('json_obj:', json_obj);
    console.log(c for c in json);
    for (c in json_obj){
      var state = c;
      var fill = json_obj[c]['fillKey'];
      console.log(state);
      console.log(fill);
      my_map.updateChoropleth({
        state: {fillKey: fill},
      })
    };
    //console.log('map labelss!!!:', my_map.options.dataUrl);
};

function change_json(user){
    if (user == 'all') {
      return'https://api.myjson.com/bins/14x76f';
    }
    else if (user == 'current') {
      return'https://api.myjson.com/bins/1aebmn';
    }
    localStorage.setItem("json_link", json_link);
}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
}
