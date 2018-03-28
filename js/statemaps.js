var map2 = new Datamap({
  element: document.getElementById('hello2'),
  scope: 'usa',
  popupTemplate: function(geography, data) {
    return '<div class="hoverinfo">' + geography.properties.name + 'Party Scale:' +  data.partyScale + ' '},
    fills: {
      'Heavy Democrat': '#667FAF',
      'Democrat': '#667FAF',
      'Slight Democrat': '#A9C0DE',
      'Neutral': '#eeeea4',
      'Slight Republican': '#EAA9A8',
      'Republican': '#CA5E5B',
      'Heavy Republican': '#CA5E5B',
      defaultFill: '#eeeea4'
    },
    dataType: 'json',
    dataUrl: 'https://api.myjson.com/bins/7p5b3'
  });
